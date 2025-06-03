import React from 'react';
import { motion } from 'framer-motion';
import { Settings } from 'lucide-react';

const PdfSettingsPanel = ({ pdfSettings, setPdfSettings }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-effect rounded-xl p-6 mb-8"
    >
      <div className="flex items-center gap-2 mb-4">
        <Settings className="w-5 h-5 text-blue-400" />
        <h3 className="text-lg font-semibold text-white">PDF Settings</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label htmlFor="pageSize" className="block text-sm font-medium text-gray-300 mb-2">Page Size</label>
          <select
            id="pageSize"
            value={pdfSettings.pageSize}
            onChange={(e) => setPdfSettings(prev => ({ ...prev, pageSize: e.target.value }))}
            className="w-full bg-slate-800 border border-gray-600 rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="A4">A4</option>
            <option value="A3">A3</option>
            <option value="Letter">Letter</option>
            <option value="Legal">Legal</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="orientation" className="block text-sm font-medium text-gray-300 mb-2">Orientation</label>
          <select
            id="orientation"
            value={pdfSettings.orientation}
            onChange={(e) => setPdfSettings(prev => ({ ...prev, orientation: e.target.value }))}
            className="w-full bg-slate-800 border border-gray-600 rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="portrait">Portrait</option>
            <option value="landscape">Landscape</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="quality" className="block text-sm font-medium text-gray-300 mb-2">Quality</label>
          <select
            id="quality"
            value={pdfSettings.quality}
            onChange={(e) => setPdfSettings(prev => ({ ...prev, quality: parseFloat(e.target.value) }))}
            className="w-full bg-slate-800 border border-gray-600 rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value={0.6}>Low (60%)</option>
            <option value={0.8}>Medium (80%)</option>
            <option value={0.9}>High (90%)</option>
            <option value={1.0}>Maximum (100%)</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="margin" className="block text-sm font-medium text-gray-300 mb-2">Margin (mm)</label>
          <input
            id="margin"
            type="number"
            min="0"
            max="50"
            value={pdfSettings.margin}
            onChange={(e) => setPdfSettings(prev => ({ ...prev, margin: parseInt(e.target.value) || 0 }))}
            className="w-full bg-slate-800 border border-gray-600 rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default PdfSettingsPanel;