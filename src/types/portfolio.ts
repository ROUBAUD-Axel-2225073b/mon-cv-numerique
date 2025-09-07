export interface NavItem {
  label: string;
  href: string;
}

export interface Section {
  id: string;
  label: string;
  name: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tag: string[];
  icon: string[];
  imageUrl: string;
  projectUrl: string;
}