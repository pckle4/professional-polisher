
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface PersonalInfoProps {
  formData: {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    website: string;
    summary: string;
  };
  updateField: (field: string, value: string) => void;
  errors?: {
    fullName?: string;
    email?: string;
    phone?: string;
    website?: string;
    summary?: string;
  };
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ formData, updateField, errors = {} }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Personal Information</h2>
      <p className="text-sm text-gray-500">
        Enter your personal details to help employers contact you.
      </p>
      
      <div className="space-y-4">
        <div>
          <Label htmlFor="fullName" className="text-sm font-medium">
            Full Name*
          </Label>
          <Input
            id="fullName"
            value={formData.fullName}
            onChange={(e) => updateField('fullName', e.target.value)}
            placeholder="John Doe"
            className={`mt-1 ${errors.fullName ? 'border-red-500' : ''}`}
            required
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="email" className="text-sm font-medium">
              Email*
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => updateField('email', e.target.value)}
              placeholder="johndoe@example.com"
              className={`mt-1 ${errors.email ? 'border-red-500' : ''}`}
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          
          <div>
            <Label htmlFor="phone" className="text-sm font-medium">
              Phone
            </Label>
            <Input
              id="phone"
              value={formData.phone}
              onChange={(e) => updateField('phone', e.target.value)}
              placeholder="(123) 456-7890"
              className={`mt-1 ${errors.phone ? 'border-red-500' : ''}`}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="location" className="text-sm font-medium">
              Location
            </Label>
            <Input
              id="location"
              value={formData.location}
              onChange={(e) => updateField('location', e.target.value)}
              placeholder="City, State"
              className="mt-1"
            />
          </div>
          
          <div>
            <Label htmlFor="website" className="text-sm font-medium">
              Website/LinkedIn
            </Label>
            <Input
              id="website"
              value={formData.website}
              onChange={(e) => updateField('website', e.target.value)}
              placeholder="linkedin.com/in/johndoe"
              className={`mt-1 ${errors.website ? 'border-red-500' : ''}`}
            />
            {errors.website && (
              <p className="text-red-500 text-sm mt-1">{errors.website}</p>
            )}
          </div>
        </div>
        
        <div>
          <Label htmlFor="summary" className="text-sm font-medium">
            Professional Summary
          </Label>
          <Textarea
            id="summary"
            value={formData.summary}
            onChange={(e) => updateField('summary', e.target.value)}
            placeholder="Briefly describe your professional background and key qualifications (2-3 sentences)"
            className={`mt-1 resize-none ${errors.summary ? 'border-red-500' : ''}`}
            rows={4}
          />
          {errors.summary && (
            <p className="text-red-500 text-sm mt-1">{errors.summary}</p>
          )}
          <p className="text-xs text-gray-500 mt-1">
            {formData.summary.length}/500 characters
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
