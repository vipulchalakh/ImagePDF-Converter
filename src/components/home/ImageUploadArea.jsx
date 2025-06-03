import React from 'react';
import { motion } from 'framer-motion';
import { Upload, FileImage } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ImageUploadArea = ({ isDragActive, handleDragEnter, handleDragLeave, handleDragOver, handleDrop, handleFileInput }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="mb-8"
    >
      <div
        className={`relative border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 ${
          isDragActive 
            ? 'drag-active border-blue-400 bg-blue-500/10' 
            : 'border-gray-600 hover:border-gray-500 glass-effect'
        }`}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {/* This input is for drag and drop, keep it invisible and covering the area */}
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleFileInput} 
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          aria-label="Upload images via drag and drop"
        />
        
        <motion.div
          animate={{ scale: isDragActive ? 1.1 : 1 }}
          transition={{ duration: 0.2 }}
        >
          <Upload className="w-16 h-16 mx-auto mb-4 text-blue-400" />
          <h3 className="text-2xl font-semibold text-white mb-2">
            {isDragActive ? 'Drop your images here!' : 'Upload Your Images'}
          </h3>
          <p className="text-gray-400 mb-4">
            Drag and drop your images or click to browse
          </p>
          <Button 
            type="button"
            onClick={() => document.getElementById('fileInput').click()}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            aria-label="Choose images to upload"
          >
            <FileImage className="w-5 h-5 mr-2" />
            Choose Images
          </Button>
        </motion.div>
        <input
          id="fileInput"
          type="file"
          multiple
          accept="image/*"
          onChange={handleFileInput}
          className="hidden"
          aria-hidden="true"
        />
      </div>
    </motion.div>
  );
};

export default ImageUploadArea;