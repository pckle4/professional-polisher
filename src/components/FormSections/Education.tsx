
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Plus, X } from 'lucide-react';

interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field: string;
  location: string;
  graduationDate: string;
  gpa?: string;
}

interface EducationProps {
  education: EducationItem[];
  addEducation: () => void;
  updateEducation: (id: string, field: string, value: string) => void;
  removeEducation: (id: string) => void;
}

const Education: React.FC<EducationProps> = ({
  education,
  addEducation,
  updateEducation,
  removeEducation,
}) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">Education</h2>
          <p className="text-sm text-gray-500">
            Add your educational background, starting with the most recent.
          </p>
        </div>
        <Button 
          onClick={addEducation} 
          variant="outline" 
          size="sm"
          className="flex items-center gap-1"
        >
          <Plus size={16} />
          <span>Add</span>
        </Button>
      </div>

      {education.length === 0 ? (
        <div className="text-center py-8 border border-dashed rounded-md bg-gray-50">
          <p className="text-gray-500">
            No education added yet. Click "Add" to include your educational background.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {education.map((edu) => (
            <div key={edu.id} className="p-4 border rounded-md relative bg-white">
              <Button
                onClick={() => removeEducation(edu.id)}
                variant="ghost"
                size="sm"
                className="absolute top-2 right-2 h-8 w-8 p-0"
              >
                <X size={16} />
              </Button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <Label htmlFor={`institution-${edu.id}`}>Institution</Label>
                  <Input
                    id={`institution-${edu.id}`}
                    value={edu.institution}
                    onChange={(e) => updateEducation(edu.id, 'institution', e.target.value)}
                    placeholder="University/College Name"
                  />
                </div>
                <div>
                  <Label htmlFor={`location-${edu.id}`}>Location</Label>
                  <Input
                    id={`location-${edu.id}`}
                    value={edu.location}
                    onChange={(e) => updateEducation(edu.id, 'location', e.target.value)}
                    placeholder="City, Country"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <Label htmlFor={`degree-${edu.id}`}>Degree</Label>
                  <Input
                    id={`degree-${edu.id}`}
                    value={edu.degree}
                    onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                    placeholder="Bachelor's, Master's, etc."
                  />
                </div>
                <div>
                  <Label htmlFor={`field-${edu.id}`}>Field of Study</Label>
                  <Input
                    id={`field-${edu.id}`}
                    value={edu.field}
                    onChange={(e) => updateEducation(edu.id, 'field', e.target.value)}
                    placeholder="Computer Science, Business, etc."
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor={`graduationDate-${edu.id}`}>Graduation Date</Label>
                  <Input
                    id={`graduationDate-${edu.id}`}
                    value={edu.graduationDate}
                    onChange={(e) => updateEducation(edu.id, 'graduationDate', e.target.value)}
                    placeholder="MM/YYYY or Expected MM/YYYY"
                  />
                </div>
                <div>
                  <Label htmlFor={`gpa-${edu.id}`}>GPA (Optional)</Label>
                  <Input
                    id={`gpa-${edu.id}`}
                    value={edu.gpa || ''}
                    onChange={(e) => updateEducation(edu.id, 'gpa', e.target.value)}
                    placeholder="3.8/4.0"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Education;
