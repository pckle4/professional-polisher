
import React from 'react';

interface ResumePreviewProps {
  formData: {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    website: string;
    summary: string;
  };
  experiences: {
    id: string;
    company: string;
    position: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
  }[];
  education: {
    id: string;
    institution: string;
    degree: string;
    field: string;
    location: string;
    graduationDate: string;
    gpa?: string;
  }[];
  skills: string[];
  template: 'modern' | 'classic' | 'creative';
}

const ResumePreview: React.FC<ResumePreviewProps> = ({
  formData,
  experiences,
  education,
  skills,
  template = 'modern'
}) => {
  // Different styling based on template
  const getTemplateStyles = () => {
    switch (template) {
      case 'modern':
        return {
          container: 'bg-white shadow-lg border border-gray-200',
          header: 'border-b border-gray-300 pb-4 mb-6',
          name: 'text-2xl font-bold text-gray-800',
          section: 'mb-6',
          sectionTitle: 'text-lg font-semibold text-gray-800 border-b border-gray-200 pb-1 mb-3',
          experienceTitle: 'font-semibold',
          contactLine: 'flex gap-4 text-sm text-gray-600 mt-2',
        };
      case 'classic':
        return {
          container: 'bg-white shadow-lg border border-gray-200',
          header: 'text-center border-b border-gray-300 pb-4 mb-6',
          name: 'text-2xl font-bold uppercase tracking-wider text-gray-800',
          section: 'mb-6',
          sectionTitle: 'text-lg font-semibold uppercase text-gray-800 mb-3',
          experienceTitle: 'font-semibold',
          contactLine: 'flex justify-center gap-4 text-sm text-gray-600 mt-2',
        };
      case 'creative':
        return {
          container: 'bg-white shadow-lg border border-gray-200',
          header: 'bg-blue-600 text-white p-6 mb-6',
          name: 'text-3xl font-bold',
          section: 'mb-6',
          sectionTitle: 'text-lg font-semibold text-blue-600 mb-3',
          experienceTitle: 'font-semibold',
          contactLine: 'flex gap-4 text-sm mt-2',
        };
      default:
        return {
          container: 'bg-white shadow-lg border border-gray-200',
          header: 'border-b border-gray-300 pb-4 mb-6',
          name: 'text-2xl font-bold text-gray-800',
          section: 'mb-6',
          sectionTitle: 'text-lg font-semibold text-gray-800 border-b border-gray-200 pb-1 mb-3',
          experienceTitle: 'font-semibold',
          contactLine: 'flex gap-4 text-sm text-gray-600 mt-2',
        };
    }
  };

  const styles = getTemplateStyles();

  return (
    <div className={`p-8 w-full h-full ${styles.container}`}>
      {/* Header */}
      <header className={styles.header}>
        <h1 className={styles.name}>{formData.fullName || 'Your Name'}</h1>
        
        <div className={styles.contactLine}>
          {formData.email && <span>{formData.email}</span>}
          {formData.phone && <span>{formData.phone}</span>}
          {formData.location && <span>{formData.location}</span>}
          {formData.website && <span>{formData.website}</span>}
        </div>
      </header>

      {/* Summary */}
      {formData.summary && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Professional Summary</h2>
          <p className="text-sm text-gray-700">{formData.summary}</p>
        </section>
      )}

      {/* Experience */}
      {experiences.length > 0 && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Experience</h2>
          {experiences.map((exp) => (
            <div key={exp.id} className="mb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className={styles.experienceTitle}>{exp.position}</h3>
                  <p className="text-sm">{exp.company}{exp.location ? `, ${exp.location}` : ''}</p>
                </div>
                <p className="text-sm text-gray-600">
                  {exp.startDate} - {exp.endDate}
                </p>
              </div>
              <p className="text-sm mt-2">{exp.description}</p>
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Education</h2>
          {education.map((edu) => (
            <div key={edu.id} className="mb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className={styles.experienceTitle}>{edu.degree} in {edu.field}</h3>
                  <p className="text-sm">{edu.institution}{edu.location ? `, ${edu.location}` : ''}</p>
                </div>
                <p className="text-sm text-gray-600">{edu.graduationDate}</p>
              </div>
              {edu.gpa && <p className="text-sm mt-1">GPA: {edu.gpa}</p>}
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span key={index} className="text-sm bg-gray-100 px-2 py-1 rounded">
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ResumePreview;
