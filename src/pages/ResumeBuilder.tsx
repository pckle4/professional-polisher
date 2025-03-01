
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import ResumeHeader from '@/components/ResumeHeader';
import PersonalInfo from '@/components/FormSections/PersonalInfo';
import Experience from '@/components/FormSections/Experience';
import Education from '@/components/FormSections/Education';
import Skills from '@/components/FormSections/Skills';
import ResumePreview from '@/components/ResumePreview';
import ResumeTips from '@/components/ResumeTips';
import PDFExport from '@/components/PDFExport';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/components/ui/use-toast';
import { ArrowLeft } from 'lucide-react';

// Generate a unique ID
const generateId = () => Math.random().toString(36).substring(2, 9);

// Email validation regex
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// Phone validation regex (basic format)
const phoneRegex = /^(\+\d{1,3})?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
// URL validation regex
const urlRegex = /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;

const ResumeBuilder = () => {
  // Personal information form state
  const [personalInfo, setPersonalInfo] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    website: '',
    summary: '',
  });

  // Form validation errors
  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    phone: '',
    website: '',
    summary: '',
  });

  // Work experience form state
  const [experiences, setExperiences] = useState([
    {
      id: generateId(),
      company: '',
      position: '',
      location: '',
      startDate: '',
      endDate: '',
      description: '',
    },
  ]);

  // Education form state
  const [education, setEducation] = useState([
    {
      id: generateId(),
      institution: '',
      degree: '',
      field: '',
      location: '',
      graduationDate: '',
      gpa: '',
    },
  ]);

  // Skills form state
  const [skills, setSkills] = useState<string[]>([]);

  // Resume template state
  const [template, setTemplate] = useState<'modern' | 'classic' | 'creative'>('modern');
  
  // Active tab state
  const [activeTab, setActiveTab] = useState('personal');
  
  // Form validation function
  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      fullName: '',
      email: '',
      phone: '',
      website: '',
      summary: '',
    };
    
    // Validate full name
    if (!personalInfo.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
      isValid = false;
    } else if (personalInfo.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters';
      isValid = false;
    }
    
    // Validate email
    if (!personalInfo.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(personalInfo.email)) {
      newErrors.email = 'Enter a valid email address';
      isValid = false;
    }
    
    // Validate phone (if provided)
    if (personalInfo.phone && !phoneRegex.test(personalInfo.phone)) {
      newErrors.phone = 'Enter a valid phone number';
      isValid = false;
    }
    
    // Validate website (if provided)
    if (personalInfo.website && !urlRegex.test(personalInfo.website)) {
      newErrors.website = 'Enter a valid URL';
      isValid = false;
    }
    
    // Validate summary
    if (personalInfo.summary && personalInfo.summary.length > 500) {
      newErrors.summary = 'Summary should be less than 500 characters';
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };

  // Form section handlers
  const updatePersonalInfo = (field: string, value: string) => {
    setPersonalInfo(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user types
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const addExperience = () => {
    setExperiences(prev => [
      ...prev,
      {
        id: generateId(),
        company: '',
        position: '',
        location: '',
        startDate: '',
        endDate: '',
        description: '',
      },
    ]);
  };

  const updateExperience = (id: string, field: string, value: string) => {
    setExperiences(prev =>
      prev.map(exp => (exp.id === id ? { ...exp, [field]: value } : exp))
    );
  };

  const removeExperience = (id: string) => {
    setExperiences(prev => prev.filter(exp => exp.id !== id));
  };

  const addEducation = () => {
    setEducation(prev => [
      ...prev,
      {
        id: generateId(),
        institution: '',
        degree: '',
        field: '',
        location: '',
        graduationDate: '',
        gpa: '',
      },
    ]);
  };

  const updateEducation = (id: string, field: string, value: string) => {
    setEducation(prev =>
      prev.map(edu => (edu.id === id ? { ...edu, [field]: value } : edu))
    );
  };

  const removeEducation = (id: string) => {
    setEducation(prev => prev.filter(edu => edu.id !== id));
  };

  const handleNextTab = () => {
    if (activeTab === 'personal') {
      if (validateForm()) {
        setActiveTab('experience');
      } else {
        toast({
          title: "Form Validation Error",
          description: "Please correct the errors in the form before proceeding.",
          variant: "destructive",
        });
      }
    } else if (activeTab === 'experience') {
      setActiveTab('education');
    } else if (activeTab === 'education') {
      setActiveTab('skills');
    }
  };

  const resumeId = "resume-preview-content";
  const getResumeName = () => {
    const name = personalInfo.fullName.trim() || 'Resume';
    return `${name.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.pdf`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <ResumeHeader />
      
      <div className="container mx-auto my-6 px-4 flex-1 flex flex-col">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="outline" size="sm" asChild>
            <Link to="/">
              <ArrowLeft className="h-4 w-4 mr-1" /> Back to Home
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold">Build Your Professional Resume</h1>
            <p className="text-gray-600">
              Follow the steps below to create your standout resume
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-4 mb-6">
                <TabsTrigger value="personal">Personal</TabsTrigger>
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
              </TabsList>
              
              <TabsContent value="personal" className="space-y-6">
                <PersonalInfo 
                  formData={personalInfo} 
                  updateField={updatePersonalInfo}
                  errors={errors}
                />
                <div className="flex justify-end mt-6">
                  <Button onClick={handleNextTab}>
                    Next: Work Experience
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="experience">
                <Experience 
                  experiences={experiences}
                  addExperience={addExperience}
                  updateExperience={updateExperience}
                  removeExperience={removeExperience}
                />
                <div className="flex justify-end mt-6">
                  <Button onClick={handleNextTab}>
                    Next: Education
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="education">
                <Education
                  education={education}
                  addEducation={addEducation}
                  updateEducation={updateEducation}
                  removeEducation={removeEducation}
                />
                <div className="flex justify-end mt-6">
                  <Button onClick={handleNextTab}>
                    Next: Skills
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="skills">
                <Skills skills={skills} updateSkills={setSkills} />
              </TabsContent>
            </Tabs>
            
            <Separator className="my-6" />
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Choose Template</h3>
              <div className="grid grid-cols-3 gap-3">
                <button
                  onClick={() => setTemplate('modern')}
                  className={`p-3 border rounded-md text-center hover:bg-gray-50 transition-colors template-preview ${
                    template === 'modern' ? 'border-primary bg-gray-50' : 'border-gray-200'
                  }`}
                >
                  <div className="w-full h-24 bg-gray-100 mb-2 flex items-center justify-center text-xs border">Modern</div>
                  <span className="text-sm">Modern</span>
                </button>
                
                <button
                  onClick={() => setTemplate('classic')}
                  className={`p-3 border rounded-md text-center hover:bg-gray-50 transition-colors template-preview ${
                    template === 'classic' ? 'border-primary bg-gray-50' : 'border-gray-200'
                  }`}
                >
                  <div className="w-full h-24 bg-gray-100 mb-2 flex items-center justify-center text-xs border">Classic</div>
                  <span className="text-sm">Classic</span>
                </button>
                
                <button
                  onClick={() => setTemplate('creative')}
                  className={`p-3 border rounded-md text-center hover:bg-gray-50 transition-colors template-preview ${
                    template === 'creative' ? 'border-primary bg-gray-50' : 'border-gray-200'
                  }`}
                >
                  <div className="w-full h-24 bg-gray-100 mb-2 flex items-center justify-center text-xs border">Creative</div>
                  <span className="text-sm">Creative</span>
                </button>
              </div>
            </div>
            
            <div className="mt-8">
              <PDFExport 
                resumeId={resumeId}
                resumeName={getResumeName()}
              />
            </div>
          </div>
          
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-lg shadow-sm border p-4 h-[800px] overflow-y-auto">
              <h3 className="text-lg font-medium mb-4 px-2">Resume Preview</h3>
              <div id={resumeId} className="border rounded bg-white shadow-sm scale-90 origin-top-left min-h-[1000px] resume-preview">
                <ResumePreview
                  formData={personalInfo}
                  experiences={experiences}
                  education={education}
                  skills={skills}
                  template={template}
                />
              </div>
            </div>
            
            <ResumeTips />
          </div>
        </div>
      </div>
      
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">Resume Builder - Create professional resumes in minutes</p>
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Resume Builder. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ResumeBuilder;
