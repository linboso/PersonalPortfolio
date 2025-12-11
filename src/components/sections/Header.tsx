import { Github, Mail, User } from 'lucide-react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';



interface HeaderProps {
  onShowAbout: () => void;
  activeSection: string;
  onNavClick: (section: string) => void;
  selectedProject: any;
}

function Header({ onShowAbout, activeSection, onNavClick, selectedProject }: HeaderProps) {

  return (
    <div className="lg:col-span-4 lg:sticky lg:top-24 h-fit space-y-8 hidden lg:block">
      <header className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
          Po-Han Lin
          <span className="text-green-400">.</span>
        </h1>
        <p className="text-lg text-purple-300">
          Researcher & <br />
          Software Engineer
        </p>
        <div className="flex gap-4 pt-2">
          <Button variant="outline" size="icon" className="rounded-full">
            <Github size={20} />
          </Button>

          <Button variant="outline" size="icon" className="rounded-full">
            <Mail size={20} />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="rounded-full text-green-400 border-green-500/50 hover:bg-green-500 hover:text-black"
            onClick={onShowAbout}
            title="View Pilot Profile"
          >
            <User size={20} />
          </Button>
        </div>
      </header>

      <nav className="flex flex-col space-y-2">
        {['About Me', 'Projects'].map((item) => (
          <Button 
            key={item}
            variant="ghost"
            onClick={() => onNavClick(item)}
            className={cn(
              "justify-start w-full font-bold tracking-widest uppercase border-l-2 rounded-none px-4",
              activeSection === item && !selectedProject
                ? 'border-green-400 text-green-400 bg-purple-900/20'
                : 'border-transparent text-neutral-400 hover:border-green-400/50'
            )}
          >
            {item}
          </Button>
        ))}
      </nav>

      {/* <div className="text-xs text-neutral-600 pt-12 border-t border-purple-900/30 mt-8">
        <p className="flex items-center gap-1">
          <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span> linboso0@gmail.com
        </p>
        <p className="flex items-center gap-1">
          <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span> linboso@main.ntut.edu.tw
        </p>
      </div> */}
    </div>
  );
}

export default Header;