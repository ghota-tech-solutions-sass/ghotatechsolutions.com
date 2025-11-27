import SEO from '@/components/SEO';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function About() {
  const skills = [
    { name: "Google Cloud Platform", level: 95 },
    { name: "Kubernetes", level: 90 },
    { name: "Docker", level: 95 },
    { name: "CI/CD (GitLab, GitHub)", level: 90 },
    { name: "Terraform", level: 85 },
    { name: "Prometheus & Grafana", level: 88 },
    { name: "Python & Bash", level: 85 },
    { name: "DevSecOps", level: 80 }
  ];

  const experiences = [
    {
      title: "Fondateur",
      company: "Ghota Tech Solutions",
      period: "2024 - Présent",
      description: "Création de ma société de conseil DevOps pour accompagner les entreprises dans leur transformation numérique."
    },
    {
      title: "Ingénieur DevOps Senior",
      company: "Expérience Corporate",
      period: "2018 - 2024",
      description: "Plus de 6 ans d'expérience en entreprise avec des projets d'envergure sur des infrastructures critiques."
    }
  ];

  return (
    <>
      <SEO 
        title="À propos - Mickaël Villers, Expert DevOps"
        description="Découvrez le parcours de Mickaël Villers, fondateur de Ghota Tech Solutions. +10 ans d'expérience en DevOps, Cloud GCP, Kubernetes et automatisation."
        canonical="/a-propos"
      />
      <Navigation />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Mickaël <span className="text-blue-400">Villers</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-6">
                  Ingénieur DevOps & Fondateur de Ghota Tech Solutions
                </p>
                <p className="text-lg text-gray-400 mb-8">
                  Avec plus de 10 ans d'expérience en IT et plusieurs années spécialisé en DevOps, 
                  j'accompagne les entreprises dans la modernisation et la sécurisation de leurs infrastructures.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="mailto:villers@ghotatechsolutions.com"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                  >
                    Me contacter
                  </a>
                  <a
                    href="https://fr.linkedin.com/in/mickaël-villers-1b1a6496"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                  >
                    LinkedIn
                    <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-80 h-80 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                  <div className="text-8xl font-bold text-white">MV</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Mon expertise
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Des compétences techniques solides acquises au fil des années
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div key={skill.name} className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-lg font-medium text-gray-900">{skill.name}</span>
                    <span className="text-sm text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-blue-600 h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Parcours */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Mon parcours
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Une évolution naturelle vers l'expertise DevOps
              </p>
            </div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full mt-2 mr-6"></div>
                  <div className="flex-1">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{exp.title}</h3>
                      <div className="text-blue-600 font-medium mb-2">{exp.company}</div>
                      <div className="text-gray-600 text-sm mb-4">{exp.period}</div>
                      <p className="text-gray-700">{exp.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Valeurs */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Mes valeurs
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ce qui guide mon approche et mes relations client
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Excellence</h3>
                <p className="text-gray-600">
                  Recherche constante de la qualité et de l'amélioration continue dans chaque projet.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Collaboration</h3>
                <p className="text-gray-600">
                  Travail en étroite collaboration avec vos équipes pour un transfert de compétences optimal.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
                <p className="text-gray-600">
                  Veille technologique constante pour vous proposer les meilleures solutions du marché.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Points forts */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Pourquoi me faire confiance ?
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">+10</div>
                <div className="text-lg">Années d'expérience IT</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">100%</div>
                <div className="text-lg">Solutions personnalisées</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-lg">Support disponible</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">ROI</div>
                <div className="text-lg">Orienté résultats</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Travaillons ensemble
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Je suis toujours intéressé par de nouveaux défis techniques. 
              N'hésitez pas à me contacter pour discuter de votre projet.
            </p>
            <a
              href="mailto:villers@ghotatechsolutions.com"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center"
            >
              Discutons de votre projet
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}