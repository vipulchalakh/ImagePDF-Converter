import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { toast } from '@/components/ui/use-toast';
import jsPDF from 'jspdf';
import { Helmet } from 'react-helmet-async';

import ImageUploadArea from '@/components/home/ImageUploadArea';
import PdfSettingsPanel from '@/components/home/PdfSettingsPanel';
import ImagePreviewGrid from '@/components/home/ImagePreviewGrid';
import ContentSection from '@/components/home/ContentSection';
import AdditionalContentSection from '@/components/home/AdditionalContentSection';
import FaqSection from '@/components/home/FaqSection';

const HomePage = () => {
  const [images, setImages] = useState([]);
  const [isDragActive, setIsDragActive] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [pdfSettings, setPdfSettings] = useState({
    pageSize: 'A4',
    orientation: 'portrait',
    quality: 0.8,
    margin: 20
  });

  const handleDragEnter = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
  }, []);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
     if (e.dataTransfer.items) {
      e.dataTransfer.items.clear();
    } else {
      e.dataTransfer.clearData();
    }
  }, []);

  const handleFileInput = useCallback((e) => {
    const files = Array.from(e.target.files);
    handleFiles(files);
    e.target.value = null; 
  }, []);

  const handleFiles = (files) => {
    const imageFiles = files.filter(file => file.type.startsWith('image/'));
    
    if (imageFiles.length === 0) {
      toast({
        title: "Invalid files",
        description: "Please select only image files (JPG, PNG, GIF, etc.)",
        variant: "destructive"
      });
      return;
    }

    const newImages = [];
    imageFiles.forEach((file, index) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        newImages.push({
          id: Date.now() + index,
          file,
          src: e.target.result,
          name: file.name,
          size: file.size,
          rotation: 0
        });
        if (newImages.length === imageFiles.length) {
          setImages(prev => [...prev, ...newImages].sort((a,b) => a.id - b.id));
        }
      };
      reader.readAsDataURL(file);
    });

    toast({
      title: "Images added!",
      description: `Successfully added ${imageFiles.length} image(s) to your collection.`
    });
  };

  const removeImage = (id) => {
    setImages(prev => prev.filter(img => img.id !== id));
    toast({
      title: "Image removed",
      description: "Image has been removed from your collection."
    });
  };

  const rotateImage = (id) => {
    setImages(prev => prev.map(img => 
      img.id === id ? { ...img, rotation: (img.rotation + 90) % 360 } : img
    ));
  };

  const clearAllImages = () => {
    setImages([]);
    toast({
      title: "All images cleared",
      description: "Your image collection has been cleared."
    });
  };

  const generatePDF = async () => {
    if (images.length === 0) {
      toast({
        title: "No images",
        description: "Please add some images before generating PDF.",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);

    try {
      const pdf = new jsPDF({
        orientation: pdfSettings.orientation,
        unit: 'mm',
        format: pdfSettings.pageSize.toLowerCase()
      });

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const margin = pdfSettings.margin;
      const availableWidth = pageWidth - (margin * 2);
      const availableHeight = pageHeight - (margin * 2);

      for (let i = 0; i < images.length; i++) {
        if (i > 0) {
          pdf.addPage();
        }

        const img = images[i];
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const image = new Image();

        await new Promise((resolve, reject) => {
          image.onload = () => {
            try {
              const { width: imgWidth, height: imgHeight } = image;
              
              let newWidth = availableWidth;
              let newHeight = (imgHeight * availableWidth) / imgWidth;

              if (newHeight > availableHeight) {
                newHeight = availableHeight;
                newWidth = (imgWidth * availableHeight) / imgHeight;
              }
              
              const targetCanvasWidth = img.rotation === 90 || img.rotation === 270 ? newHeight : newWidth;
              const targetCanvasHeight = img.rotation === 90 || img.rotation === 270 ? newWidth : newHeight;

              canvas.width = targetCanvasWidth * 2; 
              canvas.height = targetCanvasHeight * 2;
              
              ctx.translate(canvas.width / 2, canvas.height / 2);
              ctx.rotate((img.rotation * Math.PI) / 180);
              ctx.drawImage(image, -newWidth, -newHeight, newWidth * 2, newHeight * 2);
              
              const imgData = canvas.toDataURL('image/jpeg', pdfSettings.quality);
              
              const x = (pageWidth - targetCanvasWidth) / 2;
              const y = (pageHeight - targetCanvasHeight) / 2;
              
              pdf.addImage(imgData, 'JPEG', x, y, targetCanvasWidth, targetCanvasHeight);
              resolve();
            } catch (e) {
              reject(e);
            }
          };
          image.onerror = (e) => reject(e);
          image.src = img.src;
        });
      }

      pdf.save('images-to-pdf.pdf');
      
      toast({
        title: "PDF Generated!",
        description: `Successfully created PDF with ${images.length} image(s).`
      });
    } catch (error) {
      console.error("PDF Generation Error:", error);
      toast({
        title: "Generation failed",
        description: `Failed to generate PDF. ${error.message || 'Please try again.'}`,
        variant: "destructive"
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>India's No. 1 Images to PDF Converter (FREE)</title>
        <meta name="description" content="Convert images to PDF instantly with India's No. 1 free tool. Fast, secure, and easy-to-use converter for JPG, PNG, and more. No signup needed!" />
      </Helmet>
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Images to PDF Converter
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Transform your images into beautiful PDF documents with ease. Drag, drop, customize, and convert!
          </p>
        </motion.div>

        <ImageUploadArea 
          isDragActive={isDragActive}
          handleDragEnter={handleDragEnter}
          handleDragLeave={handleDragLeave}
          handleDragOver={handleDragOver}
          handleDrop={handleDrop}
          handleFileInput={handleFileInput}
        />

        {images.length > 0 && (
          <PdfSettingsPanel 
            pdfSettings={pdfSettings}
            setPdfSettings={setPdfSettings}
          />
        )}

        <ImagePreviewGrid
          images={images}
          removeImage={removeImage}
          rotateImage={rotateImage}
          clearAllImages={clearAllImages}
          generatePDF={generatePDF}
          isGenerating={isGenerating}
        />
        
        <ContentSection />
        <AdditionalContentSection />
        <FaqSection />
      </div>
    </>
  );
};

export default HomePage;