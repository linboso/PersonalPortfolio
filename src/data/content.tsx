
import { Code, Globe, Layers } from 'lucide-react';
import React from 'react';

export const projects = [
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
          { icon: React.createElement('div', {dangerouslySetInnerHTML: {__html: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12V8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v4"/><path d="M4 12v4a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-4"/><path d="M4 12h16"/></svg>'}}), title: "Data Mining", desc: "Processed 10GB+ of Uber Movement & OpenStreetMap data using Python Pandas & GeoPandas." },
          { icon: React.createElement('div', {dangerouslySetInnerHTML: {__html: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 10 10H12V2z"/><path d="M22 12a10 10 0 0 0-10-10v10z"/></svg>'}}), title: "Graph Analysis", desc: "Built a network graph of 500+ traffic nodes to calculate 'Islands of Accessibility'." },
          { icon: React.createElement('div', {dangerouslySetInnerHTML: {__html: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>'}}), title: "Visualization", desc: "Rendered using Mapbox GL JS with custom shaders for flow animation." }
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
        src: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjZ5ZnJ6ZnJ6ZnJ6ZnJ6ZnJ6ZnJ6ZnJ6ZnJ6ZnJ6ZnJ6eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7TKSjRrfIPjeiVyM/giphy.gif"
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
  
  export const experiments = [
    { title: "Lidar Point Cloud", desc: "WebGL 點雲渲染測試", icon: React.createElement(Globe, { size: 16 }) },
    { title: "GeoJSON Parser", desc: "高效能向量解析器", icon: React.createElement(Layers, { size: 16 }) },
    { title: "Shader Terrain", desc: "GLSL 地形生成", icon: React.createElement(Code, { size: 16 }) },
  ];
  
  export const activities = [
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

  export const publications = [
    {
      title: "FOSS4G 2024",
      journal: "Optimizing Vector Tiles for Real-time Data Viz",
      description: "Speaker",
      location: "Seoul, Korea"
    },
    {
      title: "IEEE Vis '23",
      journal: "Visualizing Urban Noise Pollution",
      description: "Primary Researcher",
      location: "Melbourne, Australia"
    }
  ];
