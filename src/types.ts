export interface ProjectDetail {
  tagline: string;
  overview: string;
  problem: string;
  approach: {
    icon: React.ReactNode;
    title: string;
    desc: string;
  }[];
  outcome: string;
}

export interface ProjectMedia {
  type: string;
  src: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  year: string;
  status: string;
  media?: ProjectMedia | null;
  details?: ProjectDetail;
}

export interface Experiment {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export interface Activity {
  title: string;
  role: string;
  date: string;
  location: string;
  desc: string;
}

export interface Publication {
  title: string;
  journal: string;
  description: string;
  location: string;
}
