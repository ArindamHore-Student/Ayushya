
import React, { useState } from 'react';
import { 
  Search, 
  Plus, 
  AlertTriangle, 
  Pill, 
  Clock, 
  ShieldAlert, 
  ListFilter, 
  ChevronDown, 
  ArrowRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';

interface Drug {
  id: string;
  name: string;
  genericName: string;
  category: string;
  description: string;
  usedFor: string[];
  sideEffects: {
    common: string[];
    serious: string[];
  };
  interactions: string[];
  precautions: string[];
  dosage: string;
}

// Mock drug data
const mockDrugs: Drug[] = [
  {
    id: '1',
    name: 'Lipitor',
    genericName: 'Atorvastatin',
    category: 'Statins',
    description: 'Atorvastatin is used along with a proper diet to help lower bad cholesterol and fats and raise good cholesterol in the blood.',
    usedFor: ['High Cholesterol', 'Heart Disease Prevention'],
    sideEffects: {
      common: ['Muscle pain', 'Diarrhea', 'Upset stomach', 'Mild memory problems'],
      serious: ['Liver damage', 'Muscle breakdown', 'Increased blood sugar']
    },
    interactions: ['Grapefruit juice', 'Certain antibiotics', 'Antifungal medications'],
    precautions: ['Liver disease', 'Pregnancy', 'Alcohol use'],
    dosage: 'Initially 10-20mg once daily, may be increased as needed'
  },
  {
    id: '2',
    name: 'Metformin',
    genericName: 'Glucophage',
    category: 'Biguanides',
    description: 'Metformin is used to treat type 2 diabetes, either alone or alongside other medications.',
    usedFor: ['Type 2 Diabetes', 'Insulin Resistance', 'Polycystic Ovary Syndrome'],
    sideEffects: {
      common: ['Nausea', 'Vomiting', 'Diarrhea', 'Stomach pain'],
      serious: ['Lactic acidosis', 'Vitamin B12 deficiency']
    },
    interactions: ['Contrast dyes', 'Certain diuretics', 'Alcohol'],
    precautions: ['Kidney disease', 'Liver disease', 'Heart failure'],
    dosage: 'Initially 500mg twice daily with meals, may be increased gradually'
  },
  {
    id: '3',
    name: 'Lisinopril',
    genericName: 'Prinivil, Zestril',
    category: 'ACE Inhibitors',
    description: 'Lisinopril is used to treat high blood pressure and heart failure, and to improve survival after a heart attack.',
    usedFor: ['Hypertension', 'Heart Failure', 'Post-Heart Attack Treatment'],
    sideEffects: {
      common: ['Dry cough', 'Dizziness', 'Headache', 'Fatigue'],
      serious: ['Swelling of face/lips/tongue', 'High potassium levels', 'Decreased kidney function']
    },
    interactions: ['Potassium supplements', 'Salt substitutes', 'NSAIDs'],
    precautions: ['Pregnancy', 'History of angioedema', 'Kidney disease'],
    dosage: 'Initially 10mg once daily, may be adjusted based on blood pressure response'
  }
];

const DrugInfo = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState<string | null>(null);
  const [selectedDrug, setSelectedDrug] = useState<Drug | null>(null);
  
  const filteredDrugs = mockDrugs.filter(drug => {
    const matchesSearch = 
      drug.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      drug.genericName.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = filterCategory ? drug.category === filterCategory : true;
    
    return matchesSearch && matchesCategory;
  });
  
  const categories = Array.from(new Set(mockDrugs.map(drug => drug.category)));
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Left sidebar with search and filters */}
        <div className="w-full md:w-80 flex-shrink-0">
          <Card>
            <CardHeader>
              <CardTitle>Drug Search</CardTitle>
              <CardDescription>Find information about medications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input 
                  placeholder="Search by name..." 
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-2 flex items-center">
                  <ListFilter className="h-4 w-4 mr-1" />
                  Filter by Category
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge 
                    variant={filterCategory === null ? "default" : "outline"} 
                    className="cursor-pointer"
                    onClick={() => setFilterCategory(null)}
                  >
                    All
                  </Badge>
                  {categories.map(category => (
                    <Badge 
                      key={category}
                      variant={filterCategory === category ? "default" : "outline"} 
                      className="cursor-pointer"
                      onClick={() => setFilterCategory(category)}
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-sm font-medium mb-2">Popular Searches</h3>
                <div className="space-y-2">
                  {['Aspirin', 'Amoxicillin', 'Ibuprofen', 'Omeprazole'].map(drug => (
                    <div 
                      key={drug} 
                      className="flex items-center justify-between p-2 bg-gray-50 rounded-md cursor-pointer hover:bg-gray-100"
                      onClick={() => setSearchTerm(drug)}
                    >
                      <span className="text-sm">{drug}</span>
                      <ArrowRight className="h-3 w-3 text-gray-500" />
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Main content area */}
        <div className="flex-grow w-full">
          {selectedDrug ? (
            <Card className="mb-8">
              <CardHeader className="border-b">
                <div className="flex justify-between items-start">
                  <div>
                    <Badge className="mb-2">{selectedDrug.category}</Badge>
                    <CardTitle className="text-2xl">{selectedDrug.name}</CardTitle>
                    <CardDescription className="text-lg">
                      Generic: {selectedDrug.genericName}
                    </CardDescription>
                  </div>
                  <Button variant="outline" onClick={() => setSelectedDrug(null)}>
                    Back to List
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent className="pt-6">
                <Tabs defaultValue="overview">
                  <TabsList className="grid grid-cols-4 mb-8">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="sideEffects">Side Effects</TabsTrigger>
                    <TabsTrigger value="interactions">Interactions</TabsTrigger>
                    <TabsTrigger value="dosage">Dosage</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="overview">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium mb-2">Description</h3>
                        <p className="text-gray-700">{selectedDrug.description}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium mb-2">Used For</h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedDrug.usedFor.map((use, index) => (
                            <Badge key={index} variant="outline">
                              {use}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium mb-2">Precautions</h3>
                        <ul className="list-disc list-inside space-y-1">
                          {selectedDrug.precautions.map((precaution, index) => (
                            <li key={index} className="text-gray-700">{precaution}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="sideEffects">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium mb-2 flex items-center">
                          <AlertTriangle className="h-4 w-4 mr-2 text-yellow-500" />
                          Common Side Effects
                        </h3>
                        <ul className="list-disc list-inside space-y-1">
                          {selectedDrug.sideEffects.common.map((effect, index) => (
                            <li key={index} className="text-gray-700">{effect}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium mb-2 flex items-center">
                          <ShieldAlert className="h-4 w-4 mr-2 text-red-500" />
                          Serious Side Effects
                        </h3>
                        <div className="bg-red-50 border border-red-200 rounded-md p-4">
                          <p className="text-sm text-red-800 font-medium mb-2">
                            Seek immediate medical attention if you experience any of these:
                          </p>
                          <ul className="list-disc list-inside space-y-1">
                            {selectedDrug.sideEffects.serious.map((effect, index) => (
                              <li key={index} className="text-red-700">{effect}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="interactions">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium mb-4">Known Drug Interactions</h3>
                        <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 mb-4">
                          <p className="text-sm text-yellow-800">
                            Always tell your healthcare provider about all medications, supplements, and herbs you take.
                          </p>
                        </div>
                        <ul className="list-disc list-inside space-y-1">
                          {selectedDrug.interactions.map((interaction, index) => (
                            <li key={index} className="text-gray-700">{interaction}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="dosage">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium mb-2 flex items-center">
                          <Pill className="h-4 w-4 mr-2" />
                          Recommended Dosage
                        </h3>
                        <p className="text-gray-700 mb-4">{selectedDrug.dosage}</p>
                        
                        <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
                          <p className="text-sm text-blue-800">
                            <strong>Important:</strong> Dosage information provided is general. Follow your doctor's specific instructions as dosages may vary based on your condition, age, and other factors.
                          </p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-6">Drug Information Database</h2>
              
              {searchTerm && filteredDrugs.length === 0 ? (
                <div className="text-center p-8 bg-gray-50 rounded-lg border border-gray-200">
                  <p className="text-gray-600 mb-4">No medications found matching "{searchTerm}"</p>
                  <Button variant="outline" onClick={() => setSearchTerm('')}>
                    Clear Search
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredDrugs.map(drug => (
                    <Card key={drug.id} className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => setSelectedDrug(drug)}>
                      <CardHeader>
                        <div>
                          <Badge className="mb-1">{drug.category}</Badge>
                          <CardTitle>{drug.name}</CardTitle>
                          <CardDescription>Generic: {drug.genericName}</CardDescription>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 line-clamp-2">{drug.description}</p>
                      </CardContent>
                      <CardFooter className="border-t pt-4">
                        <div className="flex justify-between items-center w-full">
                          <div className="flex items-center text-sm text-gray-500">
                            <Pill className="h-4 w-4 mr-1" />
                            <span>Used for: {drug.usedFor.join(', ')}</span>
                          </div>
                          <Button variant="ghost" size="sm">
                            View Details
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DrugInfo;
