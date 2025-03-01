
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Plus, X } from 'lucide-react';

interface SkillsProps {
  skills: string[];
  updateSkills: (newSkills: string[]) => void;
}

const Skills: React.FC<SkillsProps> = ({ skills, updateSkills }) => {
  const [newSkill, setNewSkill] = useState('');

  const handleAddSkill = () => {
    if (newSkill.trim() !== '' && !skills.includes(newSkill.trim())) {
      updateSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    updateSkills(skills.filter(skill => skill !== skillToRemove));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddSkill();
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold">Skills</h2>
        <p className="text-sm text-gray-500">
          Add your key skills and competencies.
        </p>
      </div>

      <div className="flex gap-2">
        <div className="flex-1">
          <Label htmlFor="newSkill" className="sr-only">
            Add Skill
          </Label>
          <Input
            id="newSkill"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Add a skill (e.g., JavaScript, Project Management)"
          />
        </div>
        <Button onClick={handleAddSkill} type="button" variant="outline">
          <Plus size={16} />
          <span className="ml-1">Add</span>
        </Button>
      </div>

      {skills.length > 0 ? (
        <div className="flex flex-wrap gap-2 mt-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-100 px-3 py-1 rounded-full flex items-center gap-1 text-sm"
            >
              <span>{skill}</span>
              <button
                onClick={() => handleRemoveSkill(skill)}
                type="button"
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={14} />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-6 border border-dashed rounded-md bg-gray-50 mt-4">
          <p className="text-gray-500">
            No skills added yet. Add your skills to highlight your expertise.
          </p>
        </div>
      )}
    </div>
  );
};

export default Skills;
