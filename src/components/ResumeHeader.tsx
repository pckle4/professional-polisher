
import React from 'react';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { FileDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const ResumeHeader = () => {
  return (
    <header className="w-full py-4 px-6 bg-white shadow-sm border-b border-gray-100 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <Link to="/" className="text-2xl font-bold">ResumeBuilder</Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Templates</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid grid-cols-2 gap-2 p-4 w-[400px]">
                  <Link to="/resume-builder" className="group block p-2 rounded hover:bg-gray-50">
                    <div className="font-medium">Modern</div>
                    <div className="text-sm text-gray-500">Clean and minimalist design</div>
                  </Link>
                  <Link to="/resume-builder" className="group block p-2 rounded hover:bg-gray-50">
                    <div className="font-medium">Classic</div>
                    <div className="text-sm text-gray-500">Traditional resume format</div>
                  </Link>
                  <Link to="/resume-builder" className="group block p-2 rounded hover:bg-gray-50">
                    <div className="font-medium">Creative</div>
                    <div className="text-sm text-gray-500">Stand out with unique design</div>
                  </Link>
                  <Link to="/resume-builder" className="group block p-2 rounded hover:bg-gray-50">
                    <div className="font-medium">Professional</div>
                    <div className="text-sm text-gray-500">Business-oriented style</div>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Tips</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="p-4 w-[320px]">
                  <h4 className="font-medium mb-2">Resume Tips</h4>
                  <ul className="text-sm space-y-1 text-gray-500">
                    <li>• Keep it concise (1-2 pages)</li>
                    <li>• Use action verbs (achieved, implemented)</li>
                    <li>• Quantify achievements when possible</li>
                    <li>• Tailor to each job application</li>
                    <li>• Proofread carefully</li>
                  </ul>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/" className="block px-4 py-2 text-sm">
                Home
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <Button variant="outline" size="sm" className="flex items-center gap-2">
        <FileDown size={16} />
        <span>Download PDF</span>
      </Button>
    </header>
  );
};

export default ResumeHeader;
