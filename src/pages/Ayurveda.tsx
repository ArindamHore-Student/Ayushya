import React, { useState } from 'react';
import { Search, Filter, ExternalLink, AlertCircle, Clock, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';

// Sample data for the search results
const sampleResults = [
  {
    id: 1,
    name: 'Lisinopril',
    category: 'Ayurvedic Connection',
    description: 'Used to treat high blood pressure (hypertension) and heart failure. Known in Ayurveda for its connection to Pitta dosha regulation.',
    sources: 'FDA, NIH, Ayurvedic Pharmacopoeia',
    lastUpdated: '2 days ago'
  },
  {
    id: 2,
    name: 'Lisinopril Side Effects',
    category: 'Medical Information',
    description: 'Common side effects include dry cough, dizziness, headache, and fatigue. Serious side effects may include low blood pressure, kidney problems, and high potassium levels.',
    sources: 'Medical Journals, Clinical Trials, FDA',
    lastUpdated: '1 week ago'
  },
  {
    id: 3,
    name: 'Lisinopril-Hydrochlorothiazide',
    category: 'Combination Drug',
    description: 'A combination medicine used to treat high blood pressure. Lisinopril is an ACE inhibitor and hydrochlorothiazide is a thiazide diuretic (water pill).',
    sources: 'FDA, Drug Manufacturer, NIH',
    lastUpdated: '3 days ago'
  },
  {
    id: 4,
    name: 'Lisinopril Dosage Information',
    category: 'Medical Information',
    description: 'Initial dose is typically 10mg once daily for hypertension. For heart failure, the initial dose is 5mg once daily. Dosage may be adjusted based on patient response.',
    sources: 'FDA, Medical Guidelines, Clinical Practice',
    lastUpdated: '1 month ago'
  }
];

const Ayurveda = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<typeof sampleResults>([]);
  const [filterType, setFilterType] = useState<string[]>([]);
  const [filterClass, setFilterClass] = useState<string[]>([]);
  const [filterSource, setFilterSource] = useState<string[]>([]);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);
  const [isSearched, setIsSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchResults(sampleResults);
      setIsSearched(true);
    } else {
      setSearchResults([]);
      setIsSearched(false);
    }
  };

  const handleTypeFilter = (type: string) => {
    if (filterType.includes(type)) {
      setFilterType(filterType.filter(t => t !== type));
    } else {
      setFilterType([...filterType, type]);
    }
  };

  const handleClassFilter = (drugClass: string) => {
    if (filterClass.includes(drugClass)) {
      setFilterClass(filterClass.filter(c => c !== drugClass));
    } else {
      setFilterClass([...filterClass, drugClass]);
    }
  };

  const handleSourceFilter = (source: string) => {
    if (filterSource.includes(source)) {
      setFilterSource(filterSource.filter(s => s !== source));
    } else {
      setFilterSource([...filterSource, source]);
    }
  };

  const handleReset = () => {
    setFilterType([]);
    setFilterClass([]);
    setFilterSource([]);
    setLastUpdated(null);
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Hero Search Section */}
      <div className="bg-blue-600 rounded-lg p-8 mb-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Ayurveda</h1>
          <p className="text-white/90 mb-8">
            Search for detailed information about medications, their Ayurveda connections, and safety considerations.
          </p>
          <form onSubmit={handleSearch} className="relative mx-auto max-w-2xl">
                <Input 
              type="text"
              placeholder="Search for any medication, active ingredient, or condition..."
              className="w-full pl-10 pr-24 py-3 rounded-full border-white/20 bg-white/10 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-white/70" />
            </div>
            <Button 
              type="submit" 
              className="absolute right-1 top-1 bottom-1 px-4 bg-white text-blue-600 hover:bg-blue-50 rounded-full"
            >
              Search
            </Button>
          </form>
          <div className="flex justify-center mt-6 space-x-4">
            <Link 
              to="/about#sanjeevani" 
              className="text-sm text-white/90 hover:text-white flex items-center"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
              Sanjeevani AI
            </Link>
            <Link 
              to="/about#arogya" 
              className="text-sm text-white/90 hover:text-white flex items-center"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
              Arogya Archive
            </Link>
          </div>
        </div>
      </div>

      {isSearched && (
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                <div className="flex items-center">
                  <Filter className="h-4 w-4 text-gray-500 mr-2" />
                  <h2 className="text-sm font-medium text-gray-900">Filters</h2>
                </div>
                <Button 
                  variant="ghost" 
                  className="text-xs text-blue-600 hover:text-blue-800 h-auto py-1"
                  onClick={handleReset}
                >
                  Reset
                </Button>
              </div>
              
              <div className="p-4 border-b border-gray-100">
                <h3 className="text-xs font-medium text-gray-700 mb-3">Drug Type</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Checkbox 
                      id="prescription" 
                      checked={filterType.includes('prescription')}
                      onCheckedChange={() => handleTypeFilter('prescription')}
                    />
                    <Label htmlFor="prescription" className="ml-2 text-sm text-gray-600">Prescription</Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox 
                      id="otc" 
                      checked={filterType.includes('otc')}
                      onCheckedChange={() => handleTypeFilter('otc')}
                    />
                    <Label htmlFor="otc" className="ml-2 text-sm text-gray-600">OTC</Label>
                        </div>
                  <div className="flex items-center">
                    <Checkbox 
                      id="generic" 
                      checked={filterType.includes('generic')}
                      onCheckedChange={() => handleTypeFilter('generic')}
                    />
                    <Label htmlFor="generic" className="ml-2 text-sm text-gray-600">Generic</Label>
                      </div>
                  <div className="flex items-center">
                    <Checkbox 
                      id="brand" 
                      checked={filterType.includes('brand')}
                      onCheckedChange={() => handleTypeFilter('brand')}
                    />
                    <Label htmlFor="brand" className="ml-2 text-sm text-gray-600">Brand Name</Label>
                    </div>
                </div>
              </div>

              <div className="p-4 border-b border-gray-100">
                <h3 className="text-xs font-medium text-gray-700 mb-3">Drug Class</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Checkbox 
                      id="ace" 
                      checked={filterClass.includes('ace')}
                      onCheckedChange={() => handleClassFilter('ace')}
                    />
                    <Label htmlFor="ace" className="ml-2 text-sm text-gray-600">ACE Inhibitor</Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox 
                      id="statin" 
                      checked={filterClass.includes('statin')}
                      onCheckedChange={() => handleClassFilter('statin')}
                    />
                    <Label htmlFor="statin" className="ml-2 text-sm text-gray-600">Statin</Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox 
                      id="antibiotic" 
                      checked={filterClass.includes('antibiotic')}
                      onCheckedChange={() => handleClassFilter('antibiotic')}
                    />
                    <Label htmlFor="antibiotic" className="ml-2 text-sm text-gray-600">Antibiotic</Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox 
                      id="nsaid" 
                      checked={filterClass.includes('nsaid')}
                      onCheckedChange={() => handleClassFilter('nsaid')}
                    />
                    <Label htmlFor="nsaid" className="ml-2 text-sm text-gray-600">NSAID</Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox 
                      id="antidepressant" 
                      checked={filterClass.includes('antidepressant')}
                      onCheckedChange={() => handleClassFilter('antidepressant')}
                    />
                    <Label htmlFor="antidepressant" className="ml-2 text-sm text-gray-600">Antidepressant</Label>
                  </div>
                        </div>
                        <Button 
                  variant="link" 
                  className="text-xs text-blue-600 p-0 h-auto mt-2"
                        >
                  Show more
                        </Button>
                      </div>

              <div className="p-4 border-b border-gray-100">
                <h3 className="text-xs font-medium text-gray-700 mb-3">Information Source</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Checkbox 
                      id="fda" 
                      checked={filterSource.includes('fda')}
                      onCheckedChange={() => handleSourceFilter('fda')}
                    />
                    <Label htmlFor="fda" className="ml-2 text-sm text-gray-600">FDA</Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox 
                      id="nih" 
                      checked={filterSource.includes('nih')}
                      onCheckedChange={() => handleSourceFilter('nih')}
                    />
                    <Label htmlFor="nih" className="ml-2 text-sm text-gray-600">NIH</Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox 
                      id="journals" 
                      checked={filterSource.includes('journals')}
                      onCheckedChange={() => handleSourceFilter('journals')}
                    />
                    <Label htmlFor="journals" className="ml-2 text-sm text-gray-600">Medical Journals</Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox 
                      id="trials" 
                      checked={filterSource.includes('trials')}
                      onCheckedChange={() => handleSourceFilter('trials')}
                    />
                    <Label htmlFor="trials" className="ml-2 text-sm text-gray-600">Clinical Trials</Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox 
                      id="manufacturer" 
                      checked={filterSource.includes('manufacturer')}
                      onCheckedChange={() => handleSourceFilter('manufacturer')}
                    />
                    <Label htmlFor="manufacturer" className="ml-2 text-sm text-gray-600">Manufacturer</Label>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-xs font-medium text-gray-700 mb-3">Last Updated</h3>
                <RadioGroup value={lastUpdated || ''} onValueChange={setLastUpdated}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="week" id="week" />
                    <Label htmlFor="week" className="text-sm text-gray-600">Past week</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="month" id="month" />
                    <Label htmlFor="month" className="text-sm text-gray-600">Past month</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="6months" id="6months" />
                    <Label htmlFor="6months" className="text-sm text-gray-600">Past 6 months</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="year" id="year" />
                    <Label htmlFor="year" className="text-sm text-gray-600">Past year</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="anytime" id="anytime" />
                    <Label htmlFor="anytime" className="text-sm text-gray-600">Any time</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
        </div>
        
          {/* Results */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium text-gray-900">
                {searchResults.length} results for "{searchQuery}"
              </h2>
              <div className="flex items-center">
                <select
                  className="text-sm text-gray-600 border-0 bg-transparent focus:ring-0"
                  defaultValue="relevance"
                >
                  <option value="relevance">Relevance</option>
                  <option value="recent">Most Recent</option>
                  <option value="az">A-Z</option>
                </select>
                </div>
                </div>

            <div className="space-y-4">
              {searchResults.map((result) => (
                <Card key={result.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="p-4">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="text-lg font-medium text-gray-900">{result.name}</h3>
                          <div className="mt-1">
                            <Badge variant="outline" className="text-xs bg-gray-50">
                              {result.category}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="text-xs gap-1 h-8"
                          >
                            Source Website <ExternalLink className="h-3 w-3" />
                          </Button>
                          <Button 
                            variant="default" 
                            size="sm" 
                            className="text-xs gap-1 h-8"
                          >
                            View Details
                          </Button>
                        </div>
                      </div>
                      <p className="mt-2 text-sm text-gray-600">{result.description}</p>
                      <div className="mt-3 flex flex-wrap items-center text-xs text-gray-500 gap-4">
                        <div className="flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          <span>Sources: {result.sources}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>Updated {result.lastUpdated}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {searchResults.length > 0 && (
                <div className="flex justify-center mt-6 gap-2">
                  <Button variant="outline" size="sm" disabled className="text-xs">Previous</Button>
                  <Button variant="default" size="sm" className="text-xs bg-blue-600">1</Button>
                  <Button variant="outline" size="sm" className="text-xs">2</Button>
                  <Button variant="outline" size="sm" className="text-xs">3</Button>
                  <Button variant="outline" size="sm" className="text-xs">Next</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {!isSearched && (
        <div className="max-w-2xl mx-auto text-center py-12">
          <CheckCircle2 className="h-16 w-16 text-blue-100 mx-auto mb-4" />
          <h2 className="text-xl font-medium text-gray-900 mb-2">Search for drug information</h2>
          <p className="text-gray-600 mb-8">
            Enter a medication name, active ingredient, or health condition to find detailed information, interactions, and safety guidelines.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge className="cursor-pointer px-3 py-1.5 bg-blue-50 text-blue-700 hover:bg-blue-100" onClick={() => setSearchQuery('Lisinopril')}>Lisinopril</Badge>
            <Badge className="cursor-pointer px-3 py-1.5 bg-blue-50 text-blue-700 hover:bg-blue-100" onClick={() => setSearchQuery('Metformin')}>Metformin</Badge>
            <Badge className="cursor-pointer px-3 py-1.5 bg-blue-50 text-blue-700 hover:bg-blue-100" onClick={() => setSearchQuery('Atorvastatin')}>Atorvastatin</Badge>
            <Badge className="cursor-pointer px-3 py-1.5 bg-blue-50 text-blue-700 hover:bg-blue-100" onClick={() => setSearchQuery('Hypertension')}>Hypertension</Badge>
            <Badge className="cursor-pointer px-3 py-1.5 bg-blue-50 text-blue-700 hover:bg-blue-100" onClick={() => setSearchQuery('Diabetes')}>Diabetes</Badge>
          </div>
        </div>
      )}
    </div>
  );
};

export default Ayurveda;
