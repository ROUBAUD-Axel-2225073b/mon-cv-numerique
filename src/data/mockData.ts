import type { NavItem, Section } from '../types';

// Route navigation
export const navItems: NavItem[] = [
  { label: 'Accueil', href: '#welcome' },
  { label: 'À propos', href: '#about' },
  { label: 'Projets', href: '#projects' },
  { label: 'Contact', href: '#contact' },
  { label: 'CV', href: '/cv.pdf' },
];

export const sections: Section[] = [
  { id: 'welcome', label: '1', name: 'Accueil' },
  { id: 'about', label: '2', name: 'À propos' },
  { id: 'projects', label: '3', name: 'Projets' },
  { id: 'contact', label: '4', name: 'Contact' },
];


