
import React, { useState } from 'react';
import { Search, Plus, AlertTriangle, X, Info, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { toast } from 'sonner';

interface Drug {
  id: string;
  name: string;
  genericName: string;
}

interface Interaction {
  id: string;
  severity: 'high' | 'medium' | 'low' | 'none';
  description: string;
  drugs: string[];
  recommendation: string;
}

// Mock drug database
const mockDrugDatabase: Drug[] = [
  { id: '1', name: 'Lipitor', genericName: 'Atorvastatin' },
  { id: '2', name: 'Crestor', genericName: 'Rosuvastatin' },
  { id: '3', name: 'Prinivil', genericName: 'Lisinopril' },
  { id: '4', name: 'Glucophage', genericName: 'Metformin' },
  { id: '5', name: 'Tenormin', genericName: 'Atenolol' },
  { id: '6', name: 'Synthroid', genericName: 'Levothyroxine' },
  { id: '7', name: 'Advil', genericName: 'Ibuprofen' },
  { id: '8', name: 'Tylenol', genericName: 'Acetaminophen' },
  { id: '9', name: 'Coumadin', genericName: 'Warfarin' },
  { id: '10', name: 'Prozac', genericName: 'Fluoxetine' },
];

const InteractionsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDrugs, setSelectedDrugs] = useState<Drug[]>([]);
  const [interactions, setInteractions] = useState<Interaction[]>([]);
  const [resultsShown, setResultsShown] = useState(false);
  
  // Filter drugs based on search term
  const filteredDrugs = mockDrugDatabase.filter(drug => {
    const matchesSearch = 
      drug.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      drug.genericName.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Don't show already selected drugs
    const notSelected = !selectedDrugs.some(selected => selected.id === drug.id);
    
    return matchesSearch && notSelected;
  });
  
  const handleAddDrug = (drug: Drug) => {
    setSelectedDrugs([...selectedDrugs, drug]);
    setSearchTerm('');
    toast.success(`${drug.name} added to your list`);
  };
  
  const handleRemoveDrug = (drugId: string) => {
    setSelectedDrugs(selectedDrugs.filter(drug => drug.id !== drugId));
    if (resultsShown) {
      // Re-check interactions when a drug is removed
      checkInteractions();
    }
  };
  
  const checkInteractions = () => {
    // Mock interactions based on selected drugs
    const newInteractions: Interaction[] = [];
    
    // Check for Warfarin + NSAID interaction
    const hasWarfarin = selectedDrugs.some(drug => drug.genericName === 'Warfarin');
    const hasIbuprofen = selectedDrugs.some(drug => drug.genericName === 'Ibuprofen');
    
    if (hasWarfarin && hasIbuprofen) {
      newInteractions.push({
        id: '1',
        severity: 'high',
        drugs: ['Warfarin', 'Ibuprofen'],
        description: 'Taking Warfarin with NSAIDs like Ibuprofen increases the risk of bleeding.',
        recommendation: 'Avoid this combination. Consult your doctor for alternative pain relief options.'
      });
    }
    
    // Check for statin + statin interaction
    const statins = selectedDrugs.filter(drug => 
      drug.genericName === 'Atorvastatin' || drug.genericName === 'Rosuvastatin'
    );
    
    if (statins.length > 1) {
      newInteractions.push({
        id: '2',
        severity: 'high',
        drugs: statins.map(s => s.name),
        description: 'Taking multiple statins increases the risk of muscle damage and rhabdomyolysis.',
        recommendation: 'Never take more than one statin medication. Contact your healthcare provider immediately.'
      });
    }
    
    // Check for ACE inhibitor + potassium supplements
    const hasLisinopril = selectedDrugs.some(drug => drug.genericName === 'Lisinopril');
    
    if (hasLisinopril && selectedDrugs.length > 1) {
      newInteractions.push({
        id: '3',
        severity: 'medium',
        drugs: ['Lisinopril', 'Other medications'],
        description: 'ACE inhibitors like Lisinopril can increase potassium levels. When combined with certain medications, this can lead to hyperkalemia.',
        recommendation: 'Monitor potassium levels regularly. Watch for symptoms like muscle weakness or irregular heartbeat.'
      });
    }
    
    // If no interactions found and multiple drugs selected, add a "no known interactions" entry
    if (newInteractions.length === 0 && selectedDrugs.length > 1) {
      newInteractions.push({
        id: '0',
        severity: 'none',
        drugs: selectedDrugs.map(d => d.name),
        description: 'No known significant interactions between these medications.',
        recommendation: 'Continue taking as prescribed, but always inform your healthcare providers about all medications you take.'
      });
    }
    
    setInteractions(newInteractions);
    setResultsShown(true);
  };
  
  const getSeverityBadge = (severity: Interaction['severity']) => {
    switch (severity) {
      case 'high':
        return <Badge variant="destructive" className="ml-2">High Risk</Badge>;
      case 'medium':
        return <Badge variant="default" className="bg-yellow-500 ml-2">Medium Risk</Badge>;
      case 'low':
        return <Badge variant="default" className="bg-blue-500 ml-2">Low Risk</Badge>;
      case 'none':
        return <Badge variant="default" className="bg-green-500 ml-2">No Risk</Badge>;
      default:
        return null;
    }
  };
  
  const getSeverityIcon = (severity: Interaction['severity']) => {
    switch (severity) {
      case 'high':
        return <AlertTriangle className="h-6 w-6 text-red-500" />;
      case 'medium':
        return <AlertTriangle className="h-6 w-6 text-yellow-500" />;
      case 'low':
        return <Info className="h-6 w-6 text-blue-500" />;
      case 'none':
        return <Check className="h-6 w-6 text-green-500" />;
      default:
        return null;
    }
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-2">Drug Interaction Checker</h1>
      <p className="text-gray-600 mb-8">Check for potential interactions between your medications</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left column: Drug selection */}
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Add Medications</CardTitle>
              <CardDescription>Search and add your medications to check for interactions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input 
                  placeholder="Search medications..." 
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              {searchTerm && (
                <div className="border rounded-md max-h-60 overflow-y-auto">
                  {filteredDrugs.length > 0 ? (
                    filteredDrugs.map(drug => (
                      <div 
                        key={drug.id}
                        className="flex justify-between items-center p-3 hover:bg-gray-50 cursor-pointer border-b last:border-b-0"
                        onClick={() => handleAddDrug(drug)}
                      >
                        <div>
                          <p className="font-medium text-sm">{drug.name}</p>
                          <p className="text-xs text-gray-500">{drug.genericName}</p>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    ))
                  ) : (
                    <div className="p-3 text-center text-gray-500">
                      No medications found
                    </div>
                  )}
                </div>
              )}
              
              <div className="mt-6">
                <h3 className="text-sm font-medium mb-2">Your Medications</h3>
                {selectedDrugs.length === 0 ? (
                  <div className="border border-dashed rounded-md p-6 text-center">
                    <p className="text-gray-500 text-sm">Add medications to check for interactions</p>
                  </div>
                ) : (
                  <div className="border rounded-md divide-y">
                    {selectedDrugs.map(drug => (
                      <div key={drug.id} className="flex justify-between items-center p-3">
                        <div>
                          <p className="font-medium">{drug.name}</p>
                          <p className="text-xs text-gray-500">{drug.genericName}</p>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleRemoveDrug(drug.id)}
                        >
                          <X className="h-4 w-4 text-gray-400" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                onClick={checkInteractions}
                className="w-full"
                disabled={selectedDrugs.length < 2}
              >
                Check Interactions
              </Button>
            </CardFooter>
          </Card>
        </div>
        
        {/* Right column: Interaction results */}
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Interaction Results</CardTitle>
              <CardDescription>Potential interactions between your selected medications</CardDescription>
            </CardHeader>
            <CardContent>
              {!resultsShown ? (
                <div className="text-center p-12 border border-dashed rounded-md">
                  <AlertTriangle className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-800 mb-2">No Results Yet</h3>
                  <p className="text-gray-500 mb-6">
                    Add at least two medications and click "Check Interactions" to see potential drug interactions
                  </p>
                </div>
              ) : interactions.length === 0 ? (
                <div className="text-center p-12 border border-dashed rounded-md">
                  <Check className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-800 mb-2">No Interactions Found</h3>
                  <p className="text-gray-500">
                    We found no known significant interactions between your selected medications
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  {interactions.map(interaction => (
                    <div key={interaction.id} className="border rounded-lg overflow-hidden">
                      <div className={`p-4 flex gap-4 ${
                        interaction.severity === 'high' ? 'bg-red-50' :
                        interaction.severity === 'medium' ? 'bg-yellow-50' :
                        interaction.severity === 'low' ? 'bg-blue-50' : 'bg-green-50'
                      }`}>
                        <div>
                          {getSeverityIcon(interaction.severity)}
                        </div>
                        <div>
                          <div className="flex items-center">
                            <h3 className="font-medium">
                              {interaction.drugs.join(' + ')}
                            </h3>
                            {getSeverityBadge(interaction.severity)}
                          </div>
                          <p className="text-sm mt-1">
                            {interaction.description}
                          </p>
                        </div>
                      </div>
                      <div className="p-4 bg-white">
                        <h4 className="text-sm font-medium mb-1">Recommendation:</h4>
                        <p className="text-sm text-gray-700">{interaction.recommendation}</p>
                      </div>
                    </div>
                  ))}
                  
                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertTitle>Important Information</AlertTitle>
                    <AlertDescription>
                      This tool is not a substitute for professional medical advice. Always consult with your healthcare provider before making any changes to your medication regimen.
                    </AlertDescription>
                  </Alert>
                </div>
              )}
            </CardContent>
            {resultsShown && (
              <CardFooter className="border-t flex justify-between">
                <p className="text-xs text-gray-500">
                  Last checked: {new Date().toLocaleString()}
                </p>
                <Button variant="outline" onClick={() => window.print()}>
                  Print Results
                </Button>
              </CardFooter>
            )}
          </Card>
        </div>
      </div>
      
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Understanding Drug Interactions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-medium mb-3">What are drug interactions?</h3>
            <p className="text-gray-700">
              Drug interactions occur when a medication affects how another medication works. This can either increase or decrease the effectiveness of the drugs or cause unexpected side effects. Not all drug interactions are harmful, but it's important to be aware of potential risks.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-medium mb-3">Types of drug interactions</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Drug-drug interactions between two or more medications</li>
              <li>Drug-food interactions between medications and food or beverages</li>
              <li>Drug-condition interactions between medications and existing health conditions</li>
              <li>Drug-supplement interactions between medications and vitamins or supplements</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractionsPage;
