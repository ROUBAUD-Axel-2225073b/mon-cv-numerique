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

export const Projets = [
  {
    id: 1,
    title: "crousgame",
    subtitle: "Projet universitaire unity",
    description: "C'est un jeux 3D ou il faut recuperer des cookies et arrivé au point final pour terminé le jeux.",
    image: "",
    category: "Jeu vidéo",
    date: "08/10/2024",
    status: "Terminé",
    tags: ["Unity", "C#"],
    links: {
      // demo: "#",
      github: "https://github.com/Noobos100/crousgame",
      external: "#"
    }
  },
  {
    id: 2,
    title: "Site Web Ananta France",
    subtitle: "C'est un projet Fan basé sur le jeux Ananta",
    description: "Le but de ce site est de relayé l'actualité du jeux pour la communauté francophone faite en collaboration avec 2 personnes et voir plus encore une fois que le jeux sera sortie.",
    image: "https://media.discordapp.net/attachments/1227164039789150218/1414260118211657852/image.png?ex=68beebdf&is=68bd9a5f&hm=e4809749cce94404ad1651e8159c038c382902014c7e6ae3c5ae376a5b0624d0&=&format=webp&quality=lossless",
    category: ["Jeu vidéo", "Site Web"],
    date: "01/09/2025",
    status: "En cours",
    tags: ["Figma", "React", "TypeScript","Css"], 
    links: {
      // demo: "#",
      github: "#",
      external: "https://www.figma.com/design/DE8nxEjDuIDbGto0znV5xG/Ananta-France?node-id=0-1&t=r5V34VbL9bkzMWMC-1"
    }
  },
  {
    id: 3,
    title: "Portfolio",
    subtitle: "Mon portfolio personnel",
    description: "Un site vitrine présentant mes projets et compétences.",
    image: "https://media.discordapp.net/attachments/1227164039789150218/1414258449440833628/image.png?ex=68beea51&is=68bd98d1&hm=0a43293094f7159febc60ae54397ea6a9b4c168516e43308397ebb3a5b5b0f09&=&format=webp&quality=lossless&width=1872&height=826",
    category: ["Site Web"],
    date: "01/09/2025",
    status: "En cours",
    tags: ["React", "TypeScript","TailwindCSS"],
    links: {
      demo: "http://localhost:5173/cv.pdf",
      github: "https://github.com/ROUBAUD-Axel-2225073b/mon-cv-numerique",
      external: "#"
    }
  }
];