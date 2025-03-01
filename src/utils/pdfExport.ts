
import html2pdf from 'html2pdf.js';

export const generatePDF = (element: HTMLElement, filename: string) => {
  const opt = {
    margin: [0.5, 0.5, 0.5, 0.5],
    filename: filename,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  };
  
  return html2pdf().set(opt).from(element).save();
};
