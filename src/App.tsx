import { useState, useRef } from 'react';
import './App.css';
import { useLeafletMap } from './hooks/useLeafletMap';
import { projects, experiments, activities, publications } from './data/content';
import Header from './components/sections/Header';
import Statement from './components/sections/Statement';
import ProjectList from './components/sections/ProjectList';
import ProjectDetail from './components/sections/ProjectDetail';
import Experiments from './components/sections/Experiments';
import Activities from './components/sections/Activities';
import Publications from './components/sections/Publications';
import Footer from './components/sections/Footer';
import AboutModal from './components/sections/AboutModal';
import HUD from './components/sections/HUD';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAbout, setShowAbout] = useState(false);
  const [activeSection, setActiveSection] = useState('About Me');
  const mapContainerRef = useRef(null);

  const { isMapLoaded, mapStats } = useLeafletMap(mapContainerRef, showAbout, selectedProject);

  const handleProjectClick = (project) => {
    if (project.details) {
      setSelectedProject(project);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBackClick = () => {
    setSelectedProject(null);
  };

  const handleNavClick = (section: string) => {
    setActiveSection(section);
    setSelectedProject(null); // Deselect project when changing sections
  }

  return (
    <div className="min-h-screen bg-[#05040a] text-neutral-200 font-mono selection:bg-purple-600 selection:text-green-300 relative">
      <div 
        ref={mapContainerRef} 
        className="fixed top-0 left-0 w-full h-full z-0 grayscale-[20%] contrast-110 transition-opacity duration-1000"
        style={{ 
          background: '#0a0a0a',
          opacity: isMapLoaded ? (selectedProject || showAbout ? 0.3 : 0.85) : 0 
        }} 
      />
      
      {!isMapLoaded && (
        <div className="fixed inset-0 flex items-center justify-center z-0 bg-neutral-950">
           <span className="text-purple-500 text-xs animate-pulse">SYSTEM INITIALIZING...</span>
        </div>
      )}

      <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none bg-gradient-to-t from-[#0e0b16] via-[#0e0b16]/70 to-transparent mix-blend-multiply" />
      <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15" />
      
      <HUD mapStats={mapStats} />

      {/* <AboutModal showAbout={showAbout} onClose={() => setShowAbout(false)} /> */}

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        <Header 
          onShowAbout={() => setShowAbout(true)}
          activeSection={activeSection}
          onNavClick={handleNavClick}
          selectedProject={selectedProject}
        />

        <div className="lg:col-span-8 space-y-20 min-h-screen">
          {selectedProject ? (
            <ProjectDetail project={selectedProject} onBack={handleBackClick} />
          ) : (
            <>
              {activeSection === 'About Me' && (
                <>
                  <Statement />
                  <Activities activities={activities} />
                  <Publications publications={publications} />
                </>
              )}
              {activeSection === 'Projects' && (
                <ProjectList projects={projects} onProjectClick={handleProjectClick} />
              )}
              {/* {activeSection === 'Activities' && (
              )} */}

              {/* <Footer /> */}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;