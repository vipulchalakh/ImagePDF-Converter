import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Trash2, RotateCw, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ImagePreviewGrid = ({ images, removeImage, rotateImage, clearAllImages, generatePDF, isGenerating }) => {
  return (
    <AnimatePresence>
      {images.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="mb-8"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-semibold text-white">
              Your Images ({images.length})
            </h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={clearAllImages}
                variant="outline"
                className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-none"
                aria-label="Clear all uploaded images"
              >
                <Trash2 className="w-5 h-5 mr-2" />
                Clear All
              </Button>
              <Button
                onClick={generatePDF}
                disabled={isGenerating}
                className="w-full sm:w-auto bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                aria-label="Generate PDF from uploaded images"
              >
                {isGenerating ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 mr-2"
                  >
                    <RotateCw className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <Download className="w-5 h-5 mr-2" />
                )}
                {isGenerating ? 'Generating...' : 'Generate PDF'}
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.05 }}
                className="glass-effect rounded-xl overflow-hidden group shadow-lg hover:shadow-purple-500/30 transition-shadow"
              >
                <div className="relative aspect-square">
                  <img
                    src={image.src}
                    alt={image.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    style={{ transform: `rotate(${image.rotation}deg)` }}
                  />
                  
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-2">
                    <div className="flex gap-2">
                      <Button
                        size="icon"
                        onClick={() => rotateImage(image.id)}
                        className="bg-blue-500/80 hover:bg-blue-600/90 text-white rounded-full"
                        aria-label="Rotate Image"
                      >
                        <RotateCw className="w-5 h-5" />
                      </Button>
                      <Button
                        size="icon"
                        onClick={() => removeImage(image.id)}
                        variant="destructive"
                        className="bg-red-500/80 hover:bg-red-600/90 text-white rounded-full"
                        aria-label="Remove Image"
                      >
                        <X className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                    {index + 1}
                  </div>
                </div>
                
                <div className="p-4">
                  <h4 className="text-white font-medium truncate mb-1" title={image.name}>
                    {image.name}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {(image.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImagePreviewGrid;