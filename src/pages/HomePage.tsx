
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger 
} from '@/components/ui/navigation-menu';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { ChevronRight, FileText, CheckCircle, Users, Star, ArrowRight } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header with Logo, Menu and Buttons */}
      <header className="w-full py-4 px-6 bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-2">
              <FileText className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold">ResumeBuilder</h1>
            </div>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Templates</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-3 gap-6 p-6 w-[600px]">
                      <div className="col-span-3">
                        <h3 className="font-medium text-lg mb-1">Professional Resume Templates</h3>
                        <p className="text-gray-500 text-sm mb-4">Choose from our professionally designed templates</p>
                      </div>
                      <Link to="/resume-builder" className="group p-3 rounded-md hover:bg-gray-50 transition-colors">
                        <div className="bg-gray-100 aspect-[3/4] mb-2 rounded overflow-hidden">
                          <div className="p-3 text-xs">Modern Template</div>
                        </div>
                        <div className="font-medium">Modern</div>
                        <div className="text-sm text-gray-500">Clean and minimalist design</div>
                      </Link>
                      <Link to="/resume-builder" className="group p-3 rounded-md hover:bg-gray-50 transition-colors">
                        <div className="bg-gray-100 aspect-[3/4] mb-2 rounded overflow-hidden">
                          <div className="p-3 text-xs">Classic Template</div>
                        </div>
                        <div className="font-medium">Classic</div>
                        <div className="text-sm text-gray-500">Traditional resume format</div>
                      </Link>
                      <Link to="/resume-builder" className="group p-3 rounded-md hover:bg-gray-50 transition-colors">
                        <div className="bg-gray-100 aspect-[3/4] mb-2 rounded overflow-hidden">
                          <div className="p-3 text-xs">Creative Template</div>
                        </div>
                        <div className="font-medium">Creative</div>
                        <div className="text-sm text-gray-500">Stand out with unique design</div>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-2 gap-4 p-4 w-[400px]">
                      <Link to="#resume-tips" className="group p-3 rounded-md hover:bg-gray-50 transition-colors">
                        <div className="font-medium">Resume Tips</div>
                        <div className="text-sm text-gray-500">Expert advice for your resume</div>
                      </Link>
                      <Link to="#faq" className="group p-3 rounded-md hover:bg-gray-50 transition-colors">
                        <div className="font-medium">FAQ</div>
                        <div className="text-sm text-gray-500">Frequently asked questions</div>
                      </Link>
                      <Link to="#examples" className="group p-3 rounded-md hover:bg-gray-50 transition-colors">
                        <div className="font-medium">Examples</div>
                        <div className="text-sm text-gray-500">Sample resumes by industry</div>
                      </Link>
                      <Link to="#career-resources" className="group p-3 rounded-md hover:bg-gray-50 transition-colors">
                        <div className="font-medium">Career Resources</div>
                        <div className="text-sm text-gray-500">Tools for job seekers</div>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="#pricing" className="px-4 py-2 text-sm inline-block">
                    Pricing
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button size="sm" className="px-4">
              Register
            </Button>
          </div>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Create a professional resume in minutes
              </h1>
              <p className="text-lg text-gray-600">
                Easy-to-use resume builder with professional templates designed to land your dream job
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="px-6">
                  Create Resume <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  View Templates
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="bg-white p-6 rounded-lg shadow-lg border">
                  <div className="aspect-[3/4] bg-gray-100 rounded flex items-center justify-center text-gray-500">
                    Resume Preview Image
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-primary text-white px-4 py-2 rounded-md">
                  Professional Templates
                </div>
                <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-md">
                  Free Download
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Grid Section */}
      <section className="py-20" id="features">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Resume Builder</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our powerful and easy-to-use resume builder helps you create a professional resume that stands out
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
              <p className="text-gray-600">
                Intuitive interface that guides you through each step of the resume creation process
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Star className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional Templates</h3>
              <p className="text-gray-600">
                Choose from a variety of professionally designed templates to make your resume stand out
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <FileText className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-time Preview</h3>
              <p className="text-gray-600">
                See changes to your resume in real-time as you make them
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Users className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Industry Specific</h3>
              <p className="text-gray-600">
                Tailored content suggestions based on your industry and job title
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <FileText className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">PDF Export</h3>
              <p className="text-gray-600">
                Download your completed resume as a professional PDF file
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Tips</h3>
              <p className="text-gray-600">
                Get expert advice and tips to make your resume more effective
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild>
              <Link to="/resume-builder">
                Create Your Resume Now <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials Slider Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Thousands of job seekers have successfully created resumes with our platform
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
                <div>
                  <h3 className="text-xl font-semibold">Sarah Johnson</h3>
                  <p className="text-gray-600">Software Developer</p>
                </div>
              </div>
              <p className="text-lg text-gray-700 italic">
                "I was able to create a professional resume in less than 30 minutes. The templates are beautiful and the interface is so easy to use. I got called for an interview within a week of submitting my new resume!"
              </p>
              <div className="flex mt-6">
                <Star className="text-yellow-400 h-5 w-5" />
                <Star className="text-yellow-400 h-5 w-5" />
                <Star className="text-yellow-400 h-5 w-5" />
                <Star className="text-yellow-400 h-5 w-5" />
                <Star className="text-yellow-400 h-5 w-5" />
              </div>
            </div>
            
            <div className="flex justify-center mt-6 gap-2">
              <Button variant="outline" size="sm" className="rounded-full w-10 h-10 p-0">1</Button>
              <Button variant="outline" size="sm" className="rounded-full w-10 h-10 p-0">2</Button>
              <Button variant="outline" size="sm" className="rounded-full w-10 h-10 p-0">3</Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20" id="faq">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our resume builder
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg p-2">
                <AccordionTrigger className="text-left font-medium px-4">
                  Is this resume builder really free?
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 pt-2 text-gray-600">
                  Yes, our basic resume builder is completely free to use. You can create, edit, and download your resume as a PDF at no cost. We also offer premium features for advanced users.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border rounded-lg p-2">
                <AccordionTrigger className="text-left font-medium px-4">
                  How long does it take to create a resume?
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 pt-2 text-gray-600">
                  Most users complete their resume in 15-30 minutes. Our step-by-step process guides you through each section, making it quick and easy to create a professional resume.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border rounded-lg p-2">
                <AccordionTrigger className="text-left font-medium px-4">
                  Can I create multiple resumes?
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 pt-2 text-gray-600">
                  Yes, you can create multiple resumes for different job applications. This allows you to tailor your resume to specific positions and industries.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="border rounded-lg p-2">
                <AccordionTrigger className="text-left font-medium px-4">
                  Are the resume templates ATS-friendly?
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 pt-2 text-gray-600">
                  Yes, all our templates are designed to be ATS (Applicant Tracking System) friendly. They use standard fonts, proper headings, and clean formatting to ensure your resume gets past automated screening systems.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5" className="border rounded-lg p-2">
                <AccordionTrigger className="text-left font-medium px-4">
                  Can I download my resume in other formats?
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 pt-2 text-gray-600">
                  Currently, we support PDF downloads for all users. Premium users can also access additional formats like DOCX and TXT.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Create Your Professional Resume?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of successful job seekers who have created winning resumes with our platform
          </p>
          <Button asChild size="lg" variant="secondary" className="px-8">
            <Link to="/resume-builder">
              Build Your Resume Now
            </Link>
          </Button>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <FileText className="h-6 w-6" />
                <h3 className="text-xl font-bold">ResumeBuilder</h3>
              </div>
              <p className="text-gray-400">
                Create professional resumes in minutes with our easy-to-use builder.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/resume-builder" className="text-gray-400 hover:text-white transition-colors">Resume Builder</Link></li>
                <li><Link to="#templates" className="text-gray-400 hover:text-white transition-colors">Templates</Link></li>
                <li><Link to="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Resume Examples</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Resume Tips</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Career Blog</Link></li>
                <li><Link to="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">support@resumebuilder.com</li>
                <li className="text-gray-400">1-800-RESUME</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Resume Builder. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link to="#" className="text-gray-400 hover:text-white transition-colors">Terms</Link>
              <Link to="#" className="text-gray-400 hover:text-white transition-colors">Privacy</Link>
              <Link to="#" className="text-gray-400 hover:text-white transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
