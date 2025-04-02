
/**
 * Utility functions for OCR (Optical Character Recognition)
 * In a real implementation, this would connect to an actual OCR service
 */

// Simulates OCR processing of a prescription image or PDF
export const processPrescriptionImage = async (file: File): Promise<string> => {
  return new Promise((resolve) => {
    // In a real implementation, this would send the file to an OCR service
    // and return the extracted text
    
    // For now, just simulate a delay and return mock data
    setTimeout(() => {
      resolve(`
        Dr. John Smith, MD
        123 Medical Center Drive
        Healthcare City, HC 12345
        
        Patient: Jane Doe
        Date: ${new Date().toLocaleDateString()}
        
        Rx:
        
        1. Metformin 500mg
           Take 1 tablet twice daily with meals
           Qty: 60  Refills: 3
           
        2. Lisinopril 10mg
           Take 1 tablet once daily
           Qty: 30  Refills: 5
           
        3. Atorvastatin 20mg
           Take 1 tablet at bedtime
           Qty: 30  Refills: 5
           
        Dr. John Smith
        License: HC12345678
      `);
    }, 1500);
  });
};

// Extracts medication info from processed OCR text
export const extractMedicationsFromText = (text: string): Array<{name: string, dosage: string, instructions: string}> => {
  // In a real implementation, this would use NLP or regex patterns
  // to extract structured medication information
  
  // For this demo, return mock structured data
  return [
    {
      name: "Metformin",
      dosage: "500mg",
      instructions: "Take 1 tablet twice daily with meals"
    },
    {
      name: "Lisinopril",
      dosage: "10mg",
      instructions: "Take 1 tablet once daily"
    },
    {
      name: "Atorvastatin",
      dosage: "20mg",
      instructions: "Take 1 tablet at bedtime"
    }
  ];
};

// Process an uploaded prescription file
export const processUploadedPrescription = async (file: File) => {
  try {
    const extractedText = await processPrescriptionImage(file);
    const medications = extractMedicationsFromText(extractedText);
    
    return {
      success: true,
      extractedText,
      medications
    };
  } catch (error) {
    console.error("Error processing prescription:", error);
    return {
      success: false,
      error: "Failed to process the prescription. Please try again or use a clearer image."
    };
  }
};
