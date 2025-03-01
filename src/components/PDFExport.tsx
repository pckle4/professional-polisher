
import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { FileDown } from 'lucide-react';
import { generatePDF } from '@/utils/pdfExport';
import { toast } from '@/components/ui/use-toast';

interface PDFExportProps {
  resumeId: string;
  resumeName: string;
}

const PDFExport: React.FC<PDFExportProps> = ({ resumeId, resumeName }) => {
  const downloadPDF = () => {
    const element = document.getElementById(resumeId);
    
    if (!element) {
      toast({
        title: "Error",
        description: "Could not generate PDF. Please try again.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Generating PDF",
      description: "Your resume is being prepared for download...",
    });
    
    try {
      const filename = resumeName || 'resume.pdf';
      
      // Temporarily make element visible at full size for PDF generation
      const originalStyles = {
        transform: element.style.transform,
        height: element.style.height,
        overflow: element.style.overflow,
      };
      
      element.style.transform = 'none';
      element.style.height = 'auto';
      element.style.overflow = 'visible';
      
      generatePDF(element, filename)
        .then(() => {
          // Restore original styles
          element.style.transform = originalStyles.transform;
          element.style.height = originalStyles.height;
          element.style.overflow = originalStyles.overflow;
          
          toast({
            title: "Success",
            description: "Your resume has been downloaded successfully.",
          });
        })
        .catch((error) => {
          console.error('PDF generation error:', error);
          toast({
            title: "Error",
            description: "Failed to generate PDF. Please try again.",
            variant: "destructive",
          });
          
          // Restore original styles
          element.style.transform = originalStyles.transform;
          element.style.height = originalStyles.height;
          element.style.overflow = originalStyles.overflow;
        });
    } catch (error) {
      console.error('PDF export error:', error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Button 
      onClick={downloadPDF}
      className="flex items-center gap-2"
      size="lg"
    >
      <FileDown size={16} />
      <span>Download Resume</span>
    </Button>
  );
};

export default PDFExport;
