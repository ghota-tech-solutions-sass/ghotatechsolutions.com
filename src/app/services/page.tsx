'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import { ScrollReveal } from '@/components/ScrollReveal';
import { motion } from 'framer-motion';

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
      ],
      benefits: [
        { label: "Rapidité", value: "Déploiements jusqu'à 10x plus rapides" },
        { label: "Fiabilité", value: "Réduction drastique des erreurs humaines" },
        { label: "Qualité", value: "Tests automatisés à chaque étape" }
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
      ],
      benefits: [
        { label: "Scalabilité", value: "Infrastructure qui grandit avec vos besoins" },
        { label: "Coûts optimisés", value: "Pay-as-you-use, auto-scaling" },
        { label: "Haute disponibilité", value: "99.9% d'uptime garanti" }
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
      ],
      benefits: [
        { label: "Proactivité", value: "Détection des problèmes avant les utilisateurs" },
        { label: "Performance", value: "Optimisation continue basée sur les données" },
        { label: "MTTR réduit", value: "Résolution plus rapide des incidents" }
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
      ],
      benefits: [
        { label: "Sécurité by design", value: "Intégrée dès la conception" },
        { label: "Conformité", value: "Respect des standards industriels" },
        { label: "Audit trail", value: "Traçabilité complète des actions" }
      ]
    }
  ];

  const methodology = [
    { step: 1, title: "Audit", desc: "Analyse approfondie de l'existant et identification des points d'amélioration" },
    { step: 2, title: "Stratégie", desc: "Définition d'une roadmap personnalisée adaptée à vos objectifs" },
    { step: 3, title: "Implémentation", desc: "Mise en œuvre progressive avec validation à chaque étape" },
    { step: 4, title: "Accompagnement", desc: "Formation des équipes et support continu pour l'autonomie" }
  ];

  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-slate-950">
        {/* Hero Section */}
        <section className="relative py-32 pt-40 overflow-hidden">
          <AnimatedBackground showScanLine />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <ScrollReveal width="100%">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-6xl font-bold mb-6 text-white"
              >
                Services <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">DevOps</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto"
              >
                Des solutions complètes pour moderniser, automatiser et sécuriser vos infrastructures
              </motion.p>
            </ScrollReveal>
          </div>
        </section>

        {/* Services détaillés */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="space-y-32">
              {services.map((service, index) => (
                <ScrollReveal key={service.title} width="100%" overflow="visible">
                  <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                    <div className="flex-1">
                      <div className="flex items-center mb-6">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="w-20 h-20 bg-slate-800 rounded-2xl flex items-center justify-center mr-4 text-blue-400 border border-slate-700"
                        >
                          {service.icon}
                        </motion.div>
                        <h2 className="text-3xl font-bold text-white">{service.title}</h2>
                      </div>
                      <p className="text-xl text-gray-400 mb-6">{service.description}</p>
                      <ul className="space-y-3">
                        {service.details.map((detail, detailIndex) => (
                          <motion.li
                            key={detailIndex}
                            className="flex items-start"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: detailIndex * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <svg className="w-6 h-6 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-300">{detail}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex-1 w-full">
                      <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-blue-500/50 transition-colors"
                      >
                        <h3 className="text-2xl font-semibold text-white mb-6">
                          Pourquoi choisir notre approche ?
                        </h3>
                        <div className="space-y-4">
                          {service.benefits.map((benefit, i) => (
                            <div key={i} className="flex items-start">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3" />
                              <div>
                                <span className="text-white font-medium">{benefit.label} :</span>
                                <span className="text-gray-400 ml-2">{benefit.value}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Méthodologie */}
        <section className="py-20 relative overflow-hidden">
          <AnimatedBackground showNodes={false} showScanLine={false} />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollReveal width="100%">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                  Notre méthodologie
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Une approche structurée pour garantir le succès de votre transformation DevOps
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {methodology.map((item, index) => (
                <ScrollReveal key={item.step} delay={index * 0.15} width="100%" overflow="visible">
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="text-center"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl font-bold shadow-lg shadow-blue-500/25"
                    >
                      {item.step}
                    </motion.div>
                    <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20" />
          <AnimatedBackground showGrid={false} showNodes={false} />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <ScrollReveal width="100%">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Discutons de votre projet
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                Chaque infrastructure est unique. Contactez-moi pour une analyse personnalisée et un devis adapté à vos besoins.
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:contact@ghotatechsolutions.com"
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-full text-lg font-semibold transition-colors inline-flex items-center hover:shadow-lg hover:shadow-blue-500/25"
              >
                Demander un audit gratuit
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
