import { useState, useEffect } from 'react';
import { LuArrowUp } from 'react-icons/lu';
import { sections } from '../data/mockData';

export default function Pagination() {
    const [activeSection, setActiveSection] = useState('welcome');

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            for (const section of sections) {
                const el = document.getElementById(section.id);
                if (el && scrollY >= el.offsetTop && scrollY < el.offsetTop + el.offsetHeight) {
                    setActiveSection(section.id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden md:flex flex-col items-center space-y-3">
            <div className="flex flex-col space-y-2 bg-neutral-800 dark:bg-neutral-900 rounded-lg p-2 shadow-lg border border-neutral-200 dark:border-neutral-700">
                {sections.map((section) => (
                    <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`
                        relative w-10 h-10 rounded-md font-bold text-sm transition-all duration-300 group
                        ${activeSection === section.id ? 'bg-green-zzz text-neutral-900 shadow-md'
                            : 'text-white hover:bg-neutral-700 dark:hover:bg-neutral-800'}`}
                        title={section.name} >
                        {section.label}

                        {/* Tooltip */}
                        <div className={`absolute right-full mr-3 top-1/2 transform -translate-y-1/2 
                        px-3 py-1 bg-neutral-900 text-white text-xs rounded-md whitespace-nowrap
                        opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100`}>
                            {section.name}
                            <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-neutral-900"></div>
                        </div>
                    </button>
                ))}
            </div>

            <button
                onClick={scrollToTop}
                className="bg-neutral-600 hover:bg-neutral-700 dark:bg-neutral-700 dark:hover:bg-neutral-600 text-white px-3 py-2 rounded-md font-bold text-xs transition-all duration-300 shadow-lg border border-neutral-200 dark:border-neutral-600 group"
                title="Retour en haut"
            >
                <div className="flex items-center space-x-1">
                    <LuArrowUp size={12} className="group-hover:scale-110 transition-transform duration-300" />
                    <span>TOP</span>
                </div>
            </button>
        </div>
    );
}