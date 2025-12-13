
import { Code, Globe, Layers } from 'lucide-react';
import React from 'react';

export const projects = [
    {
      id: "stdb",
      title: "Spatio-Temporal Database",
      category: "AI Infra",
      description : "Develops an open-source, high-performance spatiotemporal database for GeoAI, standardizing data formats and offering scalable querying to overcome the performance and cost limitations of traditional and commercial systems.",
      tech: ["Docker", "Kubernetes","Helm", "Python", "React", "Deck.gl"],
      year: "2024-Present",
      status: "Research",
      media: {
        type: 'gif',
        src: "projects/STDB_v2+speed+x1.15+cut_01.gif"
      },
      // details: {
      //   tagline: "Decoding the Invisible Mobility Patterns of Taipei City",
      //   overview: "Urban Flux is a data visualization project that challenges the traditional administrative boundaries of a city. By analyzing over 5 million anonymized commuter trips from Uber Movement data, this project reveals how citizens actually use the city, as opposed to how urban planners designed it.",
      //   problem: "Traditional static maps fail to capture the temporal pulse of a city. Transit accessibility is often calculated by distance, ignoring real-world congestion and transfer times.",
      //   approach: [
      //     { icon: React.createElement('div', {dangerouslySetInnerHTML: {__html: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12V8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v4"/><path d="M4 12v4a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-4"/><path d="M4 12h16"/></svg>'}}), title: "Data Mining", desc: "Processed 10GB+ of Uber Movement & OpenStreetMap data using Python Pandas & GeoPandas." },
      //     { icon: React.createElement('div', {dangerouslySetInnerHTML: {__html: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 10 10H12V2z"/><path d="M22 12a10 10 0 0 0-10-10v10z"/></svg>'}}), title: "Graph Analysis", desc: "Built a network graph of 500+ traffic nodes to calculate 'Islands of Accessibility'." },
      //     { icon: React.createElement('div', {dangerouslySetInnerHTML: {__html: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>'}}), title: "Visualization", desc: "Rendered using Mapbox GL JS with custom shaders for flow animation." }
      //   ],
      //   outcome: "The research identified 3 major 'transit deserts' in Taipei where commute times are 2x the city average, despite geographic proximity to the center."
      // },
      href: "https://www.csltaipeitech.com/en/project/spatial-temporal-database"
    },
    {
      id: "city-ai",
      title: "CityAI",
      category: "AI & LLM",
      description: "City AI helps public understand urban issues and city dynamics through natural language question answering.",
      tech: ["LangGraph", "LLM", "Python", "React", "Deck.gl"],
      year: "2024",
      status: "Exhibited",
      media: {
        type: 'gif',
        src: "https://iantsern-twuk.github.io/portfolio/project/city-ai/featured_hu6098002986204726821.webp"
      },
      href: "https://www.csltaipeitech.com/en/project/cityai-t-ai-1"
    },
    {
      id: "h-abm",
      title: "Hsinchu ABM",
      category: "Dashboard",
      description: "Collaborating with Hsinchu City, this project uses generative AI and agent-based modeling at NTHU/NYCU to create a 3D platform that simulates and visualizes pedestrian behavior, supporting data-driven decisions for urban safety and mobility improvements.",
      tech: ["React", "Deck.gl", "Docker", "PostgreSQL"],
      year: "2024",
      status: "Published",
      media: {
        type: 'image',
        src: "projects/h-abm.png"
      },
      href: "https://www.csltaipeitech.com/en/project/cityai-t-ai-1-rrnj3-lt8r7"
    },
    {
      id: "insight-navigator",
      title: "Insight Navigator",
      category: "AI & LLM",
      description: "Leverage LLMs and embedding models to analyze citizen complaints, offering insights into community concerns.",
      tech: ["LangChain", "LLM", "React", "Python", "Docker", "Milvus"],
      year: "2024",
      status: "Published",
      media: {
        type: 'gif',
        src: "https://images.squarespace-cdn.com/content/v1/6233bcb85cbc9844aba9dd8b/2fada40c-d21a-46e2-a2dc-ac9eebf202c2/Data_01.gif?format=2500w"
      },
      href: "https://www.csltaipeitech.com/en/project/insight-navigator"
    },
    {
      id: "urban-mobility-simulator",
      title: "Urban Mobility Simulator",
      category: "AI & LLM",
      description: "Utilize large language models to create synthetic profiles, enabling insights into how individuals shape urban dynamics.",
      tech: ["LLM", "React", "Python", "Deck.gl", "PostgreSQL", "MongoDB"],
      year: "2023-2024",
      status: "Published",
      media: {
        type: 'gif',
        src: "https://images.squarespace-cdn.com/content/v1/6233bcb85cbc9844aba9dd8b/22652e29-dcca-46d7-8563-8f1ed9167686/Data_ABM_mid_v2.gif?format=2500w"
      },
      href: "https://www.csltaipeitech.com/en/project/urban-mobility-simulator"
    },
    {
      id: "city-design-power-ondex",
      title: "City Design Power Index",
      category: "Dashboard",
      description: "This AI-driven platform analyzes global city data to provide an interactive urban design index, offering real-time insights and optimization recommendations to enhance design quality, brand identity, and sustainable, livable futures.",
      tech: ["React", "Python", "Deck.gl", "D3.js", "PostgreSQL"],
      year: "2023",
      status: "Published",
      media: {
        type: 'image',
        src: "https://images.squarespace-cdn.com/content/v1/6233bcb85cbc9844aba9dd8b/7ae2036a-a96d-4099-b358-4c6bd9f1b348/DSC04833_V.jpg?format=2500w"
      },
      href: "https://www.csltaipeitech.com/en/project/city-design-power-index"
    }
    
  ];
  
  export const experiments = [
    { title: "Lidar Point Cloud", desc: "WebGL 點雲渲染測試", icon: React.createElement(Globe, { size: 16 }) },
    { title: "GeoJSON Parser", desc: "高效能向量解析器", icon: React.createElement(Layers, { size: 16 }) },
    { title: "Shader Terrain", desc: "GLSL 地形生成", icon: React.createElement(Code, { size: 16 }) },
  ];
  
  export const activities = [
    {
      title: "City Science Summit Concepción | Cities in Transition",
      role: "Exhibitor",
      date: "Oct 2025",
      location: "Concepcion ,Chile",
      desc: "Presented 'CityAI' to 200+ attendees."
    },
    {
      title: "Microsoft DevDays 2025",
      role: "Speaker",
      date: "Sep 2025",
      location: "Taipei, Taiwan",
      desc: "Developed a flood prediction model using satellite imagery."
    },
    {
      title: "National Science and Technology Council",
      role: "Exhibitor",
      date: "Oct 2024",
      location: "Taipei, Taiwan",
      desc: "Monthly mapping parties and technical workshops."
    }
  ];

  export const publications = [
    {
      title: "1st ACM GeoGenAgent '25 International Workshop",
      journal: "Democratizing Multi-Granularity Spatio-Temporal Intelligence with Multi-Agent Systems",
      description: "Author",
      location: "USA",
      link: "https://dl.acm.org/doi/10.1145/3764915.3770718"
    },
  ];
