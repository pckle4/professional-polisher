
import React, { useState, useRef } from 'react';
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

// Generate a unique ID
const generateId = () => Math.random().toString(36).substring(2, 9);

const Index = () => {
  // Personal information form state
  const [personalInfo, setPersonalInfo] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
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
  
  // Form section handlers
  const updatePersonalInfo = (field: string, value: string) => {
    setPersonalInfo(prev => ({ ...prev, [field]: value }));
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

  const resumeId = "resume-preview-content";
  const getResumeName = () => {
    const name = personalInfo.fullName.trim() || 'Resume';
    return `${name.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.pdf`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <ResumeHeader />
      
      <div className="container mx-auto my-6 px-4 flex-1 flex flex-col">
        <h1 className="text-3xl font-bold text-center mb-6">Build Your Professional Resume</h1>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Create a standout resume in minutes with our easy-to-use builder.
          Fill in your details, choose a template, and download your professional resume.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <Tabs defaultValue="personal" className="w-full">
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
                />
              </TabsContent>
              
              <TabsContent value="experience">
                <Experience 
                  experiences={experiences}
                  addExperience={addExperience}
                  updateExperience={updateExperience}
                  removeExperience={removeExperience}
                />
              </TabsContent>
              
              <TabsContent value="education">
                <Education
                  education={education}
                  addEducation={addEducation}
                  updateEducation={updateEducation}
                  removeEducation={removeEducation}
                />
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

export default Index;
