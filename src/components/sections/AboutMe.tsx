export default function AboutMe() {
    return (
        <section id="about" className="py-20 bg-white dark:bg-neutral-900 relative overflow-hidden">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 mb-4 group/badge">
                        <div className="w-2 h-2 bg-green-zzz rounded-full shadow-md animate-pulse"></div>
                        <span className="text-xs sm:text-sm font-semibold text-neutral-600 dark:text-neutral-400 uppercase tracking-widest">
                            Découvrir
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
                        À propos de moi
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-green-zzz to-transparent mx-auto rounded-full"></div>
                </div>

                <div className="space-y-20">
                    {/* Présentation personnelle - Centrée */}
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="prose prose-lg max-w-none">
                            <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                J'ai <span className="font-semibold text-green-zzz">20 ans</span> et j'ai obtenu un
                                <span className="font-semibold text-neutral-900 dark:text-white"> BUT informatique parcours création d'application</span> à
                                l'IUT d'Aix-en-Provence.
                            </p>

                            <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                Passionné par l'informatique depuis le collège, j'ai voulu continuer ce cursus pour
                                découvrir de nouvelles technologies et créer de nouvelles choses comme des
                                <span className="font-semibold text-neutral-900 dark:text-white"> applications et des sites web</span>.
                            </p>

                            <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                J'ai intégré un <span className="font-semibold text-neutral-900 dark:text-white">Mastère Expert en Architecture et Développement Logiciel</span> et
                                je suis actuellement à la recherche d'une <span className="font-semibold text-green-zzz">alternance</span> avec
                                1/3 du temps à l'école, 2/3 du temps en entreprise, avec des périodes allant de 6 à 24 semaines
                                sans interruption en entreprise.
                            </p>
                        </div>

                        {/* Call to action */}
                        <div className="pt-8 flex justify-center">
                            <div className="inline-flex items-center gap-3 px-6 py-3 bg-neutral-50 dark:bg-neutral-800 rounded-full border border-neutral-200 dark:border-neutral-700 group hover:border-green-zzz/50 transition-all duration-300">
                                <div className="w-3 h-3 bg-green-zzz rounded-full animate-pulse"></div>
                                <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                                    Ouvert aux opportunités d'alternance
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Section Formations et Expériences côte à côte */}
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Timeline des formations */}
                        <div className="relative">
                            <div className="text-center mb-8">
                                <h3 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
                                    Formations
                                </h3>
                                <div className="w-16 h-0.5 bg-gradient-to-r from-green-zzz to-transparent mx-auto rounded-full"></div>
                            </div>

                            <div className="relative space-y-8">
                                {/* Ligne verticale */}
                                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-zzz via-neutral-300 to-neutral-200 dark:via-neutral-600 dark:to-neutral-700"></div>

                                {/* Formation actuelle */}
                                <div className="relative flex items-start gap-6 group">
                                    <div className="relative z-10">
                                        <div className="w-12 h-12 bg-green-zzz rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                            <div className="w-3 h-3 bg-neutral-900 rounded-full animate-pulse"></div>
                                        </div>
                                    </div>
                                    <div className="flex-1 pb-8">
                                        <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-sm border border-neutral-100 dark:border-neutral-700 group-hover:shadow-md transition-shadow duration-300">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="px-3 py-1 bg-green-zzz text-neutral-900 text-xs font-semibold rounded-full">
                                                    En cours
                                                </span>
                                                <span className="text-sm text-neutral-500 dark:text-neutral-400">2025</span>
                                            </div>
                                            <h4 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                                                Mastère Expert en Architecture et Développement Logiciel
                                            </h4>
                                            <p className="text-xs text-neutral-500 dark:text-neutral-400">
                                                École l'Esimed Technopôle de Château Gombert
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* BUT Informatique */}
                                <div className="relative flex items-start gap-6 group">
                                    <div className="relative z-10">
                                        <div className="w-12 h-12 bg-neutral-100 dark:bg-neutral-700 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 border-2 border-green-zzz/30">
                                            <div className="w-2 h-2 bg-green-zzz rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="flex-1 pb-8">
                                        <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-sm border border-neutral-100 dark:border-neutral-700 group-hover:shadow-md transition-shadow duration-300">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="px-3 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 text-xs font-semibold rounded-full">
                                                    Obtenu
                                                </span>
                                                <span className="text-sm text-neutral-500 dark:text-neutral-400">2022-2025</span>
                                            </div>
                                            <h4 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                                                BUT Informatique
                                            </h4>
                                            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                                                Parcours Réalisations d'applications
                                            </p>
                                            <p className="text-xs text-neutral-500 dark:text-neutral-400">
                                                IUT d'Aix-en-Provence (13)
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Baccalauréat */}
                                <div className="relative flex items-start gap-6 group">
                                    <div className="relative z-10">
                                        <div className="w-12 h-12 bg-neutral-100 dark:bg-neutral-700 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                            <div className="w-2 h-2 bg-neutral-400 dark:bg-neutral-500 rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-sm border border-neutral-100 dark:border-neutral-700 group-hover:shadow-md transition-shadow duration-300">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="px-3 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 text-xs font-semibold rounded-full">
                                                    Obtenu
                                                </span>
                                                <span className="text-sm text-neutral-500 dark:text-neutral-400">2022</span>
                                            </div>
                                            <h4 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                                                Baccalauréat STI2D
                                            </h4>
                                            <p className="text-xs text-neutral-500 dark:text-neutral-400">
                                                Lycée polyvalent Antonin Artaud - Marseille (13)
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section Expérience Professionnelle */}
                        <div className="relative">
                            <div className="text-center mb-8">
                                <h3 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
                                    Expérience Professionnelle
                                </h3>
                                <div className="w-16 h-0.5 bg-gradient-to-r from-green-zzz to-transparent mx-auto rounded-full"></div>
                            </div>

                            <div className="space-y-6">
                                {/* Stage PostLab */}
                                <div className="group">
                                    <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-sm border border-neutral-100 dark:border-neutral-700 group-hover:shadow-lg transition-all duration-300">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-3 h-3 bg-green-zzz rounded-full animate-pulse"></div>
                                                <span className="px-3 py-1 bg-green-zzz/10 text-green-zzz text-xs font-semibold rounded-full">
                                                    Stage récent
                                                </span>
                                            </div>
                                            <span className="text-sm text-neutral-500 dark:text-neutral-400 font-medium">
                                                02/2025 - 06/2025
                                            </span>
                                        </div>

                                        <h4 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                                            Stage chez PostLab
                                        </h4>

                                        <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
                                            Développement d'une application web en <span className="font-semibold text-neutral-900 dark:text-white">Symfony</span> pour
                                            former des formateurs
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-3 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 text-xs rounded-full">
                                                Symfony
                                            </span>
                                            <span className="px-3 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 text-xs rounded-full">
                                                PHP
                                            </span>
                                            <span className="px-3 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 text-xs rounded-full">
                                                Bootstrap
                                            </span>
                                            <span className="px-3 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 text-xs rounded-full">
                                                Formation
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Stage Rubambelle */}
                                <div className="group">
                                    <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-sm border border-neutral-100 dark:border-neutral-700 group-hover:shadow-lg transition-all duration-300">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-3 h-3 bg-neutral-400 dark:bg-neutral-500 rounded-full"></div>
                                                <span className="px-3 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 text-xs font-semibold rounded-full">
                                                    Terminé
                                                </span>
                                            </div>
                                            <span className="text-sm text-neutral-500 dark:text-neutral-400 font-medium">
                                                04/2024 - 06/2024
                                            </span>
                                        </div>

                                        <h4 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                                            Stage chez Rubambelle
                                        </h4>

                                        <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
                                            Création d'une boutique en ligne en utilisant <span className="font-semibold text-neutral-900 dark:text-white">WordPress</span> et
                                            <span className="font-semibold text-neutral-900 dark:text-white"> PHP/JS</span>
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-3 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 text-xs rounded-full">
                                                WordPress
                                            </span>
                                            <span className="px-3 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 text-xs rounded-full">
                                                PHP
                                            </span>
                                            <span className="px-3 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 text-xs rounded-full">
                                                JavaScript
                                            </span>
                                            <span className="px-3 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 text-xs rounded-full">
                                                E-commerce
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}