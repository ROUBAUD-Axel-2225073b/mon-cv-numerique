import { Projets } from "../../data/mockData";

export default function Project() {
    return (
        <section id="projects" className="min-h-screen bg-neutral-50 flex flex-col items-center justify-center  transition-colors duration-300">
            <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
                <h2 className="text-3xl font-extrabold text-center text-neutral-900 mb-8">Projets</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Projets.map((project) => (
                        <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover"/>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2 text-neutral-900">{project.title}</h3>
                                <p className="text-neutral-700 mb-4">{project.description}</p>
                                <a href={project.links.external} target="_blank" rel="noopener noreferrer" className="text-green-zzz font-semibold hover:underline">
                                    Voir le projet
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
    
        </section>
    )
}