import SEO from '@/components/SEO';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Services() {
  const services = [
    {
      title: "CI/CD & Automatisation",
      description: "Mise en place de pipelines robustes pour accélérer vos déploiements",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      details: [
        "Configuration et optimisation de pipelines CI/CD (GitLab CI, GitHub Actions, Jenkins)",
        "Automatisation des tests (unitaires, intégration, end-to-end)",
        "Stratégies de déploiement (blue-green, canary, rolling updates)",
        "Gestion des artefacts et des versions",
        "Intégration de contrôles qualité automatisés"
      ]
    },
    {
      title: "Cloud & Conteneurs",
      description: "Expertise sur GCP, Kubernetes, Docker, gestion scalable et sécurisée",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
        </svg>
      ),
      details: [
        "Architecture et migration vers Google Cloud Platform",
        "Orchestration Kubernetes (GKE, clusters on-premise)",
        "Conteneurisation d'applications avec Docker",
        "Gestion des ressources et auto-scaling",
        "Mise en place de registries privés et sécurisés",
        "Optimisation des coûts cloud"
      ]
    },
    {
      title: "Observabilité & Monitoring",
      description: "Mise en place de métriques, alerting, dashboards",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      details: [
        "Stack de monitoring complète (Prometheus, Grafana, ELK)",
        "Collecte et analyse de logs centralisés",
        "Métriques applicatives et infrastructure",
        "Alerting intelligent et escalade",
        "Dashboards temps réel personnalisés",
        "Distributed tracing pour microservices"
      ]
    },
    {
      title: "Sécurité & Conformité",
      description: "Intégration de bonnes pratiques DevSecOps",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      details: [
        "Scan de sécurité des containers et images",
        "Politique de sécurité Kubernetes (RBAC, PSP, OPA)",
        "Chiffrement des données (transit et repos)",
        "Gestion des secrets (Vault, K8s secrets)",
        "Audit et conformité (SOC2, ISO27001)",
        "Backup et disaster recovery"
      ]
    }
  ];

  return (
    <>
      <SEO 
        title="Services DevOps - CI/CD, Cloud, Kubernetes"
        description="Découvrez nos services DevOps complets : CI/CD, automatisation, cloud GCP, Kubernetes, observabilité et sécurité. Solutions personnalisées pour votre infrastructure."
        canonical="/services"
      />
      <Navigation />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Services <span className="text-blue-400">DevOps</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              Des solutions complètes pour moderniser, automatiser et sécuriser vos infrastructures
            </p>
          </div>
        </section>

        {/* Services détaillés */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {services.map((service, index) => (
                <div key={service.title} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                  <div className="flex-1">
                    <div className="flex items-center mb-6">
                      <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mr-4 text-blue-600">
                        {service.icon}
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                    </div>
                    <p className="text-xl text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-3">
                      {service.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <svg className="w-6 h-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex-1">
                    <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-blue-600">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                        Pourquoi choisir notre approche ?
                      </h3>
                      <div className="space-y-4 text-gray-700">
                        {index === 0 && (
                          <>
                            <p>• <strong>Rapidité :</strong> Déploiements jusqu'à 10x plus rapides</p>
                            <p>• <strong>Fiabilité :</strong> Réduction drastique des erreurs humaines</p>
                            <p>• <strong>Qualité :</strong> Tests automatisés à chaque étape</p>
                          </>
                        )}
                        {index === 1 && (
                          <>
                            <p>• <strong>Scalabilité :</strong> Infrastructure qui grandit avec vos besoins</p>
                            <p>• <strong>Coûts optimisés :</strong> Pay-as-you-use, auto-scaling</p>
                            <p>• <strong>Haute disponibilité :</strong> 99.9% d'uptime garanti</p>
                          </>
                        )}
                        {index === 2 && (
                          <>
                            <p>• <strong>Proactivité :</strong> Détection des problèmes avant les utilisateurs</p>
                            <p>• <strong>Performance :</strong> Optimisation continue basée sur les données</p>
                            <p>• <strong>MTTR réduit :</strong> Résolution plus rapide des incidents</p>
                          </>
                        )}
                        {index === 3 && (
                          <>
                            <p>• <strong>Sécurité by design :</strong> Intégrée dès la conception</p>
                            <p>• <strong>Conformité :</strong> Respect des standards industriels</p>
                            <p>• <strong>Audit trail :</strong> Traçabilité complète des actions</p>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Méthodologie */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Notre méthodologie
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Une approche structurée pour garantir le succès de votre transformation DevOps
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Audit</h3>
                <p className="text-gray-600">Analyse approfondie de l'existant et identification des points d'amélioration</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Stratégie</h3>
                <p className="text-gray-600">Définition d'une roadmap personnalisée adaptée à vos objectifs</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Implémentation</h3>
                <p className="text-gray-600">Mise en œuvre progressive avec validation à chaque étape</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Accompagnement</h3>
                <p className="text-gray-600">Formation des équipes et support continu pour l'autonomie</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Discutons de votre projet
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Chaque infrastructure est unique. Contactez-moi pour une analyse personnalisée et un devis adapté à vos besoins.
            </p>
            <a
              href="mailto:villers@ghotatechsolutions.com"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center"
            >
              Demander un audit gratuit
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