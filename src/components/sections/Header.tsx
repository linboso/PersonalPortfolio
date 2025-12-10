import { Github, Mail, User } from 'lucide-react';
import { Button } from '../ui/button';

interface HeaderProps {
  onShowAbout: () => void;
}

function Header({ onShowAbout }: HeaderProps) {
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