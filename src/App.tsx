import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ArrowLeft, ArrowUpRight, BookOpen, Calendar, Code, Cpu, Database, FileText, Github, Globe, ImageIcon, Layers, Mail, MapPin, Network, PlayCircle, Scan, Terminal, User, X } from 'lucide-react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Separator } from './components/ui/separator';
import { cn } from './lib/utils';

function App() {
  const [activeSection, setActiveSection] = useState('projects');
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAbout, setShowAbout] = useState(false);
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const [mapStats, setMapStats] = useState({ lat: 0, lng: 0, zoom: 13 });
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  // 動態載入 Leaflet
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    link.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
    link.crossOrigin = '';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    script.integrity = 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=';
    script.crossOrigin = '';
    script.async = true;
    script.onload = () => setIsMapLoaded(true);
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  // 初始化地圖
  useEffect(() => {
    if (!isMapLoaded || mapInstanceRef.current || !mapContainerRef.current) return;

    const L = window.L;
    const initialLat = 25.0330;
    const initialLng = 121.5654;

    const map = L.map(mapContainerRef.current, {
      center: [initialLat, initialLng],
      zoom: 14,
      zoomControl: false,
      attributionControl: false,
      scrollWheelZoom: false,
      dragging: true,
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      maxZoom: 20,
      subdomains: 'abcd'
    }).addTo(map);

    const icon = L.divIcon({
      className: 'custom-div-icon',
      html: "<div style='background-color: #4ade80; width: 12px; height: 12px; border-radius: 50%; box-shadow: 0 0 15px #4ade80; animation: pulse 2s infinite;'></div>",
      iconSize: [12, 12],
      iconAnchor: [6, 6]
    });
    L.marker([initialLat, initialLng], { icon: icon }).addTo(map);

    const updateStats = () => {
      const center = map.getCenter();
      setMapStats({
        lat: center.lat.toFixed(5),
        lng: center.lng.toFixed(5),
        zoom: map.getZoom().toFixed(1)
      });
    };
    
    updateStats();
    map.on('move', updateStats);
    map.on('zoom', updateStats);
    mapInstanceRef.current = map;

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [isMapLoaded]);

  // CSS Styles
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes pulse {
        0% { transform: scale(1); opacity: 1; box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.7); }
        70% { transform: scale(1); opacity: 1; box-shadow: 0 0 0 10px rgba(74, 222, 128, 0); }
        100% { transform: scale(1); opacity: 1; box-shadow: 0 0 0 0 rgba(74, 222, 128, 0); }
      }
      .scrollbar-hide::-webkit-scrollbar { display: none; }
      .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const handleProjectClick = (project) => {
    if (project.details) {
      setSelectedProject(project);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBackClick = () => {
    setSelectedProject(null);
  };

  // Data
  const projects = [
    {
      id: "urban-flux",
      title: "Urban Flux",
      category: "Geospatial Analysis",
      description: "利用 GIS 結合 Uber Movement 數據，視覺化城市通勤的「隱形邊界」，探討交通可及性與房價的關聯。",
      tech: ["QGIS", "Mapbox GL", "Python", "React"],
      year: "2024",
      status: "Research",
      media: {
        type: 'youtube',
        src: "https://www.youtube.com/embed/S2q860Tf9j8?si=DemoVideoID" 
      },
      details: {
        tagline: "Decoding the Invisible Mobility Patterns of Taipei City",
        overview: "Urban Flux is a data visualization project that challenges the traditional administrative boundaries of a city. By analyzing over 5 million anonymized commuter trips from Uber Movement data, this project reveals how citizens actually use the city, as opposed to how urban planners designed it.",
        problem: "Traditional static maps fail to capture the temporal pulse of a city. Transit accessibility is often calculated by distance, ignoring real-world congestion and transfer times.",
        approach: [
          { icon: <Database size={16}/>, title: "Data Mining", desc: "Processed 10GB+ of Uber Movement & OpenStreetMap data using Python Pandas & GeoPandas." },
          { icon: <Network size={16}/>, title: "Graph Analysis", desc: "Built a network graph of 500+ traffic nodes to calculate 'Islands of Accessibility'." },
          { icon: <Cpu size={16}/>, title: "Visualization", desc: "Rendered using Mapbox GL JS with custom shaders for flow animation." }
        ],
        outcome: "The research identified 3 major 'transit deserts' in Taipei where commute times are 2x the city average, despite geographic proximity to the center."
      }
    },
    {
      id: "neural-topography",
      title: "Neural Topography",
      category: "Generative Map Art",
      description: "訓練 StyleGAN 模型學習古地圖紋理，並生成不存在的虛構地形，探索機器對地理空間的想像。",
      tech: ["PyTorch", "GDAL", "Leaflet", "RunwayML"],
      year: "2023",
      status: "Exhibited",
      media: {
        type: 'gif',
        src: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjZ5ZnJ6ZnJ6ZnJ6ZnJ6ZnJ6ZnJ6ZnJ6ZnJ6ZnJ6ZnJ6ZnJ6eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7TKSjRrfIPjeiVyM/giphy.gif"
      }
    },
    {
      id: "bio-rhythms",
      title: "Bio-Rhythms",
      category: "Wearable Technology",
      description: "透過導電織物監測穿戴者的壓力指數，並透過周圍環境燈光的變化來調節情緒的互動裝置。",
      tech: ["E-Textiles", "IoT", "React Native", "Node.js"],
      year: "2023",
      status: "Published",
      media: null
    }
  ];

  const experiments = [
    { title: "Lidar Point Cloud", desc: "WebGL 點雲渲染測試", icon: <Globe size={16}/> },
    { title: "GeoJSON Parser", desc: "高效能向量解析器", icon: <Layers size={16}/> },
    { title: "Shader Terrain", desc: "GLSL 地形生成", icon: <Code size={16}/> },
  ];

  const activities = [
    {
      title: "g0v Summit 2024",
      role: "Speaker",
      date: "May 2024",
      location: "Taipei",
      desc: "Presented 'Open Map Data for Disaster Relief' to 200+ attendees."
    },
    {
      title: "NASA Space Apps Challenge",
      role: "First Prize Winner",
      date: "Oct 2023",
      location: "Global / Virtual",
      desc: "Developed a flood prediction model using satellite imagery."
    },
    {
      title: "OpenStreetMap Taiwan Meetup",
      role: "Organizer",
      date: "2022 - Present",
      location: "Taipei",
      desc: "Monthly mapping parties and technical workshops."
    }
  ];

  return (
    <div className="min-h-screen bg-[#05040a] text-neutral-200 font-mono selection:bg-purple-600 selection:text-green-300 relative">
      
      {/* Map Background */}
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

      {/* Overlays */}
      <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none bg-gradient-to-t from-[#0e0b16] via-[#0e0b16]/70 to-transparent mix-blend-multiply" />
      <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15" />
      
      {/* HUD Stats */}
      <div className="fixed bottom-6 left-6 z-40 hidden md:block font-mono text-xs text-orange-500 tracking-widest bg-black/70 p-2 backdrop-blur-md border-l-2 border-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.3)]">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Globe size={12} className="animate-spin-slow" />
            <span>LAT: {mapStats.lat}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={12} />
            <span>LNG: {mapStats.lng}</span>
          </div>
          <div className="flex items-center gap-2">
            <Scan size={12} />
            <span>ZOOM: {mapStats.zoom}</span>
          </div>
        </div>
      </div>

      {/* About Me / ID Card Modal (Using Card Component) */}
      {showAbout && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <Card className="w-full max-w-2xl border-purple-500/50 shadow-[0_0_50px_rgba(168,85,247,0.2)] overflow-hidden flex flex-col md:flex-row bg-neutral-900">
            
            {/* ID Photo Section */}
            <div className="w-full md:w-1/3 bg-purple-900/10 border-r border-purple-500/30 p-6 flex flex-col items-center justify-center relative">
               <div className="absolute top-2 left-2 text-[10px] text-orange-500 font-mono tracking-widest">PERSONNEL_FILE: 01</div>
               <div className="w-32 h-32 bg-neutral-800 border-2 border-green-400 rounded-sm mb-4 flex items-center justify-center overflow-hidden grayscale contrast-125">
                  <User size={48} className="text-neutral-600" />
               </div>
               <h3 className="text-white font-bold text-lg text-center">YOUR NAME</h3>
               <Badge variant="secondary" className="mt-2 font-mono">ACCESS GRANTED</Badge>
            </div>

            {/* Bio Content */}
            <div className="w-full md:w-2/3 p-8 relative">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setShowAbout(false)}
                className="absolute top-2 right-2 hover:bg-red-900/20 hover:text-red-400"
              >
                <X size={20} />
              </Button>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-purple-400 text-xs font-bold uppercase tracking-widest mb-2 pb-1">Biographical Data</h4>
                  <Separator className="mb-2 bg-purple-900/50" />
                  <p className="text-neutral-300 text-sm leading-relaxed">
                    I am a [Background, e.g., Geographer turned Developer] obsessed with the hidden layers of our cities. 
                    My journey began with [Origin Story], leading me to explore how code can reveal the invisible narratives of urban life.
                    I am specifically interested in [Specific Interest] and aim to contribute to the [Target Lab Group] at MIT.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-purple-400 text-xs font-bold uppercase tracking-widest mb-2 pb-1">Core Competencies</h4>
                  <Separator className="mb-2 bg-purple-900/50" />
                  <div className="flex flex-wrap gap-2 text-xs font-mono">
                    {['Spatial Analysis', 'React/Three.js', 'Python', 'Rapid Prototyping', 'Urban Sensing'].map(skill => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <Button variant="eva" className="w-full md:w-auto gap-2">
                    <FileText size={16} /> DOWNLOAD C.V.
                  </Button>
                  <p className="text-[10px] text-neutral-500 mt-2 text-center md:text-left">
                    * PDF Format. Last Updated: DEC 2025
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative Line */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-green-500 to-orange-500"></div>
          </Card>
        </div>
      )}

      {/* Main Layout */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Sidebar */}
        <div className="lg:col-span-4 lg:sticky lg:top-24 h-fit space-y-8 hidden lg:block">
          <header className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
              YOUR NAME
              <span className="text-green-400">.</span>
            </h1>
            <p className="text-lg text-purple-300">
              GIS Researcher & <br/>
              Creative Technologist
            </p>
            <div className="flex gap-4 pt-2">
              <Button variant="outline" size="icon" className="rounded-full">
                <Github size={20} />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Mail size={20} />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full text-green-400 border-green-500/50 hover:bg-green-500 hover:text-black" onClick={() => setShowAbout(true)} title="View Pilot Profile">
                <User size={20} />
              </Button>
            </div>
          </header>

          <nav className="flex flex-col space-y-2">
            {['Philosophy', 'GIS Projects', 'Lab Experiments', 'Activities', 'Publications'].map((item) => (
              <Button 
                key={item}
                variant="ghost"
                onClick={() => {
                  setActiveSection(item);
                  setSelectedProject(null);
                }}
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

          <div className="text-xs text-neutral-600 pt-12 border-t border-purple-900/30 mt-8">
            <p className="flex items-center gap-1"><span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span> SYSTEM: ONLINE</p>
            <p className="mt-2">DESIGNED FOR MIT MEDIA LAB.</p>
            <p>THEME: EVA-01 TEST TYPE</p>
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:col-span-8 space-y-20 min-h-screen">
          
          {selectedProject ? (
            /* Detail View */
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-500">
              <Button 
                variant="ghost" 
                className="group gap-2 text-green-400 mb-8 pl-0 hover:bg-transparent hover:text-white"
                onClick={handleBackClick}
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                BACK TO OVERVIEW
              </Button>

              <Card className="border-green-500/30 shadow-2xl shadow-green-900/20 overflow-hidden">
                <CardHeader>
                    <div className="mb-4">
                        <Badge variant="outline" className="text-orange-500 border-orange-500/50 rounded-sm">
                            PROJECT FILE: {selectedProject.id.toUpperCase()}
                        </Badge>
                    </div>
                    <CardTitle className="text-4xl md:text-5xl mb-2">{selectedProject.title}</CardTitle>
                    <p className="text-xl text-purple-200 font-light border-l-4 border-green-500 pl-4 italic">
                    "{selectedProject.details.tagline}"
                    </p>
                </CardHeader>
                
                <CardContent className="space-y-8">
                    {/* Media */}
                    {selectedProject.media && (
                    <div className="border border-purple-900/50 bg-black overflow-hidden relative shadow-lg rounded-md">
                        {selectedProject.media.type === 'youtube' ? (
                        <div className="aspect-video w-full">
                            <iframe 
                            src={selectedProject.media.src} 
                            title="Project Demo" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                            className="w-full h-full border-0"
                            ></iframe>
                        </div>
                        ) : null}
                    </div>
                    )}

                    {/* Meta Grid */}
                    <div className="grid md:grid-cols-3 gap-8 border-y border-purple-900/30 py-6">
                        <div>
                            <span className="text-neutral-500 uppercase text-xs block mb-1">Role</span>
                            <span className="text-white">Lead Researcher</span>
                        </div>
                        <div>
                            <span className="text-neutral-500 uppercase text-xs block mb-1">Timeline</span>
                            <span className="text-white">Jan 2024 - Present</span>
                        </div>
                        <div>
                            <span className="text-neutral-500 uppercase text-xs block mb-1">Tech Stack</span>
                            <div className="flex flex-wrap gap-1">
                                {selectedProject.tech.map(t => <span key={t} className="text-green-400 font-mono">{t}</span>)}
                            </div>
                        </div>
                    </div>

                    {/* Details */}
                    <div className="space-y-8 text-neutral-300 leading-relaxed">
                    <section>
                        <h3 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                        <Terminal size={18} className="text-purple-500" /> The Challenge
                        </h3>
                        <p>{selectedProject.details.problem}</p>
                    </section>

                    <section>
                        <h3 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                        <Code size={18} className="text-purple-500" /> Methodology
                        </h3>
                        <div className="grid gap-4">
                        {selectedProject.details.approach.map((step, i) => (
                            <Card key={i} className="bg-black/40 border-l-2 border-l-purple-600 border-t-0 border-r-0 border-b-0 rounded-none hover:border-l-green-500 transition-colors">
                                <CardContent className="p-4">
                                    <div className="flex items-center gap-2 text-white font-medium mb-1">
                                        {step.icon} {step.title}
                                    </div>
                                    <p className="text-sm text-neutral-400">{step.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                        </div>
                    </section>

                    <section>
                        <h3 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                        <ArrowUpRight size={18} className="text-purple-500" /> Key Outcomes
                        </h3>
                        <p>{selectedProject.details.outcome}</p>
                    </section>
                    </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            /* Standard View */
            <>
              {/* Statement */}
              <section className="space-y-6">
                <div className="flex items-center gap-2 text-purple-400 mb-4 border-b border-purple-900/50 pb-2">
                  <Terminal size={16} />
                  <span className="text-sm tracking-widest uppercase font-bold">Statement</span>
                </div>
                <Card className="bg-transparent border-0 shadow-none backdrop-blur-none">
                    <CardContent className="p-0">
                        <p className="text-xl md:text-2xl leading-relaxed text-neutral-300 font-light backdrop-blur-sm">
                        I view the world through layers of <span className="text-white font-medium border-b-2 border-green-500">spatial data</span>.
                        My work explores how Geographic Information Systems (GIS) can transcend pure analysis to become a medium for storytelling and urban empathy.
                        </p>
                        <p className="text-neutral-400 mt-4">
                        Currently focusing on Urban Informatics and Interactive Cartography.
                        Seeking to join the [Specific Group Name] group at MIT Media Lab.
                        </p>
                    </CardContent>
                </Card>
              </section>

              {/* Projects */}
              <section>
                <div className="flex items-center gap-2 text-purple-400 mb-8 border-b border-purple-900/50 pb-2">
                  <Layers size={16} />
                  <span className="text-sm tracking-widest uppercase font-bold">Selected Works</span>
                </div>
                
                <div className="grid gap-8">
                  {projects.map((project, idx) => (
                    <Card 
                        key={idx} 
                        className="group relative border-purple-900/30 hover:border-green-500/50 transition-all duration-300 overflow-hidden"
                    >
                      {/* Decorative corner */}
                      <div className="absolute top-0 right-0 w-8 h-8 bg-purple-900/10 group-hover:bg-green-500/20 transition-colors -skew-x-12 translate-x-4 -translate-y-4"></div>
                      
                      <CardHeader>
                        <div className="flex justify-between items-start">
                            <Badge variant="secondary" className="font-bold tracking-wider">{project.category}</Badge>
                            <span className="font-mono text-xs text-purple-300">{project.year} // <span className="text-orange-400">{project.status}</span></span>
                        </div>
                        <CardTitle 
                            className="text-2xl mt-2 group-hover:text-purple-400 transition-colors cursor-pointer"
                            onClick={() => handleProjectClick(project)}
                        >
                            {project.title}
                        </CardTitle>
                      </CardHeader>

                      <CardContent>
                        {/* Media Preview */}
                        {project.media && (
                          <div 
                            className="mb-4 border border-purple-900/50 bg-black/50 overflow-hidden relative group-hover:border-green-500/30 transition-colors cursor-pointer rounded-md"
                            onClick={() => handleProjectClick(project)}
                          >
                            {project.media.type === 'youtube' ? (
                              <div className="aspect-video w-full bg-black flex items-center justify-center group/play">
                                 <div className="absolute inset-0 z-10 bg-transparent"></div>
                                 <iframe 
                                  src={project.media.src} 
                                  title="YouTube video player" 
                                  className="w-full h-full border-0 pointer-events-none opacity-80"
                                ></iframe>
                                <PlayCircle size={48} className="absolute text-white/80 group-hover/play:text-green-400 z-20 transition-colors" />
                              </div>
                            ) : project.media.type === 'gif' ? (
                              <div className="w-full relative">
                                <img 
                                  src={project.media.src} 
                                  alt={project.title} 
                                  className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                />
                                <div className="absolute bottom-2 right-2 text-xs text-white bg-black/70 px-2 py-1 flex items-center gap-1 rounded">
                                  <ImageIcon size={10} /> GIF PREVIEW
                                </div>
                              </div>
                            ) : null}
                          </div>
                        )}

                        <CardDescription className="text-neutral-400 leading-relaxed text-base">
                          {project.description}
                        </CardDescription>
                      </CardContent>
                      
                      <CardFooter className="flex-col items-start gap-4">
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((t, i) => (
                            <Badge key={i} variant="outline" className="font-mono text-xs border-purple-500/30">
                              {t}
                            </Badge>
                          ))}
                        </div>

                        <div className="py-2 w-full">
                          {project.details ? (
                             <Button variant="ghost" className="w-full justify-between group/btn pl-0 hover:bg-transparent hover:text-green-400" onClick={() => handleProjectClick(project)}>
                                <span className="flex items-center gap-2"><PlayCircle size={14} /> View Case Study</span>
                                <ArrowUpRight size={14} className="opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                             </Button>
                          ) : (
                             <Button variant="ghost" className="w-full justify-between group/btn pl-0 hover:bg-transparent hover:text-green-400">
                                <span className="flex items-center gap-2">View Visualization</span>
                                <ArrowUpRight size={14} />
                             </Button>
                          )}
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Experiments */}
              <section>
                <div className="flex items-center gap-2 text-purple-400 mb-8 border-b border-purple-900/50 pb-2">
                  <Code size={16} />
                  <span className="text-sm tracking-widest uppercase font-bold">The Playground</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {experiments.map((exp, idx) => (
                    <Card key={idx} className="bg-neutral-900/60 hover:bg-purple-900/20 hover:border-green-500/30 transition-all cursor-pointer backdrop-blur-sm group">
                      <CardContent className="flex items-start gap-4 p-4">
                        <div className="p-2 bg-neutral-950 text-purple-500 group-hover:text-green-400 transition-colors rounded border border-purple-900/50">
                            {exp.icon}
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-sm group-hover:text-green-300 transition-colors">{exp.title}</h4>
                            <p className="text-neutral-500 text-xs mt-1">{exp.desc}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  <Card className="border-dashed border-neutral-800 bg-transparent hover:border-green-500/50 hover:bg-green-900/5 transition-all cursor-pointer flex items-center justify-center">
                    <CardContent className="p-4 text-neutral-600 text-sm font-mono hover:text-green-400">
                        + View Github Archive
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Activities */}
              <section>
                <div className="flex items-center gap-2 text-purple-400 mb-8 border-b border-purple-900/50 pb-2">
                  <Calendar size={16} />
                  <span className="text-sm tracking-widest uppercase font-bold">Activities</span>
                </div>
                <div className="space-y-6 relative border-l border-purple-900/30 ml-3">
                  {activities.map((act, idx) => (
                    <div key={idx} className="relative pl-8 group">
                      <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 bg-neutral-900 border border-purple-500 rounded-full group-hover:bg-green-500 group-hover:border-green-400 transition-colors"></div>
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                        <h4 className="text-white font-bold group-hover:text-green-300 transition-colors">{act.title}</h4>
                        <span className="text-xs text-orange-500 font-mono">{act.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-purple-300 mb-2">
                        <Badge variant="secondary" className="px-1.5 py-0.5 rounded border-purple-900/50">{act.role}</Badge>
                        <span>•</span>
                        <span>{act.location}</span>
                      </div>
                      <p className="text-sm text-neutral-400 leading-relaxed">{act.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Publications */}
              <section>
                <div className="flex items-center gap-2 text-purple-400 mb-8 border-b border-purple-900/50 pb-2">
                  <BookOpen size={16} />
                  <span className="text-sm tracking-widest uppercase font-bold">Research</span>
                </div>
                <ul className="space-y-6 border-l border-purple-900/50 pl-6">
                  <li className="relative group">
                    <div className="absolute -left-[29px] top-1 w-3 h-3 bg-neutral-900 rounded-full border border-purple-600 group-hover:bg-green-500 group-hover:border-green-400 transition-colors"></div>
                    <h4 className="text-white font-medium group-hover:text-purple-300 transition-colors">FOSS4G 2024</h4>
                    <p className="text-sm text-neutral-400 mt-1 italic">"Optimizing Vector Tiles for Real-time Data Viz"</p>
                    <p className="text-xs text-neutral-500 mt-1">Speaker • Seoul, Korea</p>
                  </li>
                  <li className="relative group">
                    <div className="absolute -left-[29px] top-1 w-3 h-3 bg-neutral-900 rounded-full border border-purple-600 group-hover:bg-green-500 group-hover:border-green-400 transition-colors"></div>
                    <h4 className="text-white font-medium group-hover:text-purple-300 transition-colors">IEEE Vis '23</h4>
                    <p className="text-sm text-neutral-400 mt-1 italic">"Visualizing Urban Noise Pollution"</p>
                    <p className="text-xs text-neutral-500 mt-1">Primary Researcher • Melbourne, Australia</p>
                  </li>
                </ul>
              </section>

              <footer className="pt-20 pb-12 border-t border-purple-900/30">
                <div className="flex justify-between items-end">
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-2">Let's Map the Future.</h2>
                      <p className="text-neutral-500">Open for collaborations and coffee.</p>
                    </div>
                    <Button variant="eva" className="gap-2 shadow-lg shadow-purple-900/20">
                      Contact Me
                    </Button>
                </div>
              </footer>
            </>
          )}

        </div>
      </div>
    </div>
  );
};

export default App
