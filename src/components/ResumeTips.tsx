
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const ResumeTips = () => {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="p-6 pb-2">
        <h3 className="text-lg font-semibold">Resume Writing Tips</h3>
        <p className="text-sm text-muted-foreground">
          Follow these guidelines to create an effective resume.
        </p>
      </div>
      <Accordion type="single" collapsible className="w-full px-6 pb-4">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-sm">
            Keep it concise and relevant
          </AccordionTrigger>
          <AccordionContent className="text-sm">
            <ul className="list-disc pl-6 space-y-1">
              <li>Limit your resume to 1-2 pages maximum</li>
              <li>Focus on achievements and relevant experience</li>
              <li>Avoid lengthy paragraphs - use bullet points</li>
              <li>Remove outdated information (over 10 years old)</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-sm">
            Use action verbs and quantify results
          </AccordionTrigger>
          <AccordionContent className="text-sm">
            <p className="mb-2">Strong action verbs to consider:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
              <span>• Achieved</span>
              <span>• Implemented</span>
              <span>• Developed</span>
              <span>• Coordinated</span>
              <span>• Launched</span>
              <span>• Increased</span>
            </div>
            <p className="mt-2">Always quantify your achievements when possible: "Increased sales by 20%" rather than "Increased sales"</p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-sm">
            Tailor for each application
          </AccordionTrigger>
          <AccordionContent className="text-sm">
            <ul className="list-disc pl-6 space-y-1">
              <li>Read the job description carefully</li>
              <li>Include relevant keywords from the job posting</li>
              <li>Highlight experiences that match the requirements</li>
              <li>Rearrange sections to emphasize relevant qualifications</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-sm">
            Proofread thoroughly
          </AccordionTrigger>
          <AccordionContent className="text-sm">
            <p>
              Always proofread your resume multiple times. Check for:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Spelling and grammar errors</li>
              <li>Consistent formatting (fonts, bullets, spacing)</li>
              <li>Accurate contact information</li>
              <li>Consistent verb tense (past tense for previous jobs)</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ResumeTips;
