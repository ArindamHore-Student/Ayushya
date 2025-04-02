import React, { useState } from 'react';
import { 
  User, 
  Pill, 
  Bell, 
  FileText, 
  Clock, 
  Cog, 
  Lock, 
  LogOut, 
  Plus, 
  Trash2, 
  Edit, 
  AlertTriangle,
  Share2,
  ShieldCheck,
  Search,
  MessageSquare // Adding both Search and MessageSquare icons that are used in the file
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { toast } from 'sonner';

// Mock user data
const mockUser = {
  name: "John Doe",
  email: "john.doe@example.com",
  joinedDate: "January 2023",
  medications: [
    { id: "1", name: "Lisinopril", dosage: "10mg", schedule: "Once daily", time: "8:00 AM" },
    { id: "2", name: "Metformin", dosage: "500mg", schedule: "Twice daily", time: "8:00 AM, 8:00 PM" },
    { id: "3", name: "Atorvastatin", dosage: "20mg", schedule: "Once daily", time: "9:00 PM" }
  ],
  recentHistory: [
    { id: "1", type: "search", content: "Searched for Metformin side effects", date: "2023-08-15" },
    { id: "2", type: "chat", content: "MedBot conversation about Ayurveda", date: "2023-08-14" },
    { id: "3", type: "prescription", content: "Uploaded prescription from Dr. Smith", date: "2023-08-10" }
  ]
};

const Profile = () => {
  const [name, setName] = useState(mockUser.name);
  const [email, setEmail] = useState(mockUser.email);
  const [isEditing, setIsEditing] = useState(false);
  const [medications, setMedications] = useState(mockUser.medications);
  const [newMedication, setNewMedication] = useState({ name: "", dosage: "", schedule: "", time: "" });
  
  const handleSaveProfile = () => {
    setIsEditing(false);
    toast.success("Profile updated successfully");
  };
  
  const handleAddMedication = () => {
    if (newMedication.name && newMedication.dosage) {
      setMedications([
        ...medications, 
        { 
          id: Date.now().toString(), 
          ...newMedication 
        }
      ]);
      setNewMedication({ name: "", dosage: "", schedule: "", time: "" });
      toast.success("Medication added successfully");
    }
  };
  
  const handleDeleteMedication = (id: string) => {
    setMedications(medications.filter(med => med.id !== id));
    toast.success("Medication removed");
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left sidebar */}
        <div className="lg:w-80 flex-shrink-0">
          <Card>
            <CardHeader className="text-center">
              <Avatar className="w-24 h-24 mx-auto">
                <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <CardTitle className="mt-4">{name}</CardTitle>
              <CardDescription>{email}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Member since</span>
                  <span>{mockUser.joinedDate}</span>
                </div>
                <Separator />
                <nav className="space-y-1">
                  <a href="#" className="flex items-center px-3 py-2 text-sm font-medium rounded-md bg-medical-50 text-medical-700">
                    <User className="mr-3 h-5 w-5" />
                    Profile
                  </a>
                  <a href="#" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-medical-50 hover:text-medical-700">
                    <Pill className="mr-3 h-5 w-5" />
                    My Medications
                  </a>
                  <a href="#" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-medical-50 hover:text-medical-700">
                    <Bell className="mr-3 h-5 w-5" />
                    Notifications
                  </a>
                  <a href="#" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-medical-50 hover:text-medical-700">
                    <FileText className="mr-3 h-5 w-5" />
                    History
                  </a>
                  <a href="#" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-medical-50 hover:text-medical-700">
                    <Cog className="mr-3 h-5 w-5" />
                    Settings
                  </a>
                </nav>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button variant="outline" className="w-full flex items-center">
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
              </Button>
            </CardFooter>
          </Card>
        </div>
        
        {/* Main content */}
        <div className="flex-grow">
          <Tabs defaultValue="profile">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="medications">My Medications</TabsTrigger>
              <TabsTrigger value="history">History</TabsTrigger>
            </TabsList>
            
            <TabsContent value="profile">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>Update your personal details</CardDescription>
                  </div>
                  <Button 
                    variant={isEditing ? "default" : "outline"}
                    onClick={() => isEditing ? handleSaveProfile() : setIsEditing(true)}
                  >
                    {isEditing ? "Save Changes" : (
                      <>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit Profile
                      </>
                    )}
                  </Button>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input 
                      id="name" 
                      value={name} 
                      onChange={(e) => setName(e.target.value)}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={!isEditing}
                    />
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-lg font-medium mb-4">Security</h3>
                    <div className="space-y-4">
                      <Button variant="outline" className="w-full flex items-center justify-between">
                        <div className="flex items-center">
                          <Lock className="mr-2 h-4 w-4" />
                          Change Password
                        </div>
                        <span>&rarr;</span>
                      </Button>
                      <Button variant="outline" className="w-full flex items-center justify-between">
                        <div className="flex items-center">
                          <ShieldCheck className="mr-2 h-4 w-4" />
                          Privacy Settings
                        </div>
                        <span>&rarr;</span>
                      </Button>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-lg font-medium mb-4">Preferences</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="email-notifications" className="flex-grow">Email notifications</Label>
                        <Switch id="email-notifications" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="medication-reminders" className="flex-grow">Medication reminders</Label>
                        <Switch id="medication-reminders" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="newsletter" className="flex-grow">Newsletter subscription</Label>
                        <Switch id="newsletter" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="medications">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>My Medications</CardTitle>
                    <CardDescription>Track and manage your medications</CardDescription>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>
                        <Plus className="mr-2 h-4 w-4" />
                        Add Medication
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Add New Medication</DialogTitle>
                        <DialogDescription>
                          Add details about your medication and schedule
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="space-y-2">
                          <Label htmlFor="med-name">Medication Name</Label>
                          <Input
                            id="med-name"
                            placeholder="e.g., Lisinopril"
                            value={newMedication.name}
                            onChange={(e) => setNewMedication({...newMedication, name: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="med-dosage">Dosage</Label>
                          <Input
                            id="med-dosage"
                            placeholder="e.g., 10mg"
                            value={newMedication.dosage}
                            onChange={(e) => setNewMedication({...newMedication, dosage: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="med-schedule">Schedule</Label>
                          <Input
                            id="med-schedule"
                            placeholder="e.g., Once daily"
                            value={newMedication.schedule}
                            onChange={(e) => setNewMedication({...newMedication, schedule: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="med-time">Time</Label>
                          <Input
                            id="med-time"
                            placeholder="e.g., 8:00 AM"
                            value={newMedication.time}
                            onChange={(e) => setNewMedication({...newMedication, time: e.target.value})}
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button onClick={handleAddMedication}>Add Medication</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </CardHeader>
                <CardContent>
                  {medications.length === 0 ? (
                    <div className="text-center p-8 border border-dashed rounded-lg">
                      <Pill className="h-10 w-10 mx-auto mb-4 text-gray-400" />
                      <p className="text-gray-500 mb-4">You haven't added any medications yet.</p>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button>
                            <Plus className="mr-2 h-4 w-4" />
                            Add Your First Medication
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          {/* Same content as above dialog */}
                        </DialogContent>
                      </Dialog>
                    </div>
                  ) : (
                    <div className="divide-y">
                      {medications.map((med) => (
                        <div key={med.id} className="py-4 flex justify-between items-center">
                          <div className="flex items-start">
                            <div className="mr-4 bg-medical-100 p-2 rounded-full">
                              <Pill className="h-5 w-5 text-medical-600" />
                            </div>
                            <div>
                              <div className="flex items-center">
                                <h3 className="font-medium">{med.name}</h3>
                                <Badge className="ml-2 text-xs">{med.dosage}</Badge>
                              </div>
                              <p className="text-sm text-gray-500">{med.schedule}</p>
                              <p className="text-xs text-gray-400">{med.time}</p>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="ghost" size="icon">
                              <Bell className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              onClick={() => handleDeleteMedication(med.id)}
                            >
                              <Trash2 className="h-4 w-4 text-red-500" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
                <CardFooter className="bg-gray-50 border-t">
                  <div className="w-full flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium">Share with healthcare provider</p>
                      <p className="text-xs text-gray-500">Export or share your medication list</p>
                    </div>
                    <Button variant="outline" className="flex items-center">
                      <Share2 className="mr-2 h-4 w-4" />
                      Share List
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="history">
              <Card>
                <CardHeader>
                  <CardTitle>Activity History</CardTitle>
                  <CardDescription>Your recent activities and searches</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    {/* Timeline */}
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                    
                    <div className="space-y-6">
                      {mockUser.recentHistory.map((item) => (
                        <div key={item.id} className="relative pl-10">
                          {/* Timeline dot */}
                          <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-medical-100 flex items-center justify-center">
                            {item.type === 'search' && <Search className="h-4 w-4 text-medical-600" />}
                            {item.type === 'chat' && <MessageSquare className="h-4 w-4 text-medical-600" />}
                            {item.type === 'prescription' && <FileText className="h-4 w-4 text-medical-600" />}
                          </div>
                          
                          <div>
                            <p className="text-sm text-gray-500">
                              {new Date(item.date).toLocaleDateString('en-US', { 
                                year: 'numeric', 
                                month: 'short', 
                                day: 'numeric' 
                              })}
                            </p>
                            <p className="font-medium">{item.content}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t flex justify-center">
                  <Button variant="outline">View All Activity</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Profile;
