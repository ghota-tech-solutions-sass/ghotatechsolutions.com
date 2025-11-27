'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import { ScrollReveal } from '@/components/ScrollReveal';
import { motion } from 'framer-motion';

export default function About() {
  const skills = [
    { name: "Google Cloud Platform (GCP)", level: 95, color: "from-blue-500 to-blue-600" },
    { name: "Amazon Web Services (AWS)", level: 85, color: "from-orange-500 to-yellow-500" },
    { name: "Kubernetes", level: 92, color: "from-indigo-500 to-indigo-600" },
    { name: "Docker", level: 95, color: "from-blue-400 to-cyan-500" },
    { name: "Terraform / Terragrunt", level: 90, color: "from-violet-500 to-purple-600" },
    { name: "GitHub Actions / GitLab CI", level: 92, color: "from-gray-500 to-gray-700" },
    { name: "Helm / Skaffold", level: 88, color: "from-blue-600 to-indigo-600" },
    { name: "Prometheus & Grafana", level: 85, color: "from-orange-500 to-red-500" },
    { name: "PHP / Node.js / TypeScript / Go", level: 80, color: "from-green-500 to-emerald-500" },
    { name: "FinOps & Optimisation Cloud", level: 88, color: "from-emerald-500 to-teal-500" }
  ];

  const experiences = [
    {
      title: "Fondateur",
      company: "Ghota Tech Solutions",
      period: "2025 - Présent",
      description: "Création de ma société de conseil DevOps pour accompagner les entreprises dans leur transformation numérique."
    },
    {
      title: "Ingénieur DevOps",
      company: "HomeServe France",
      period: "Mai 2023 - Présent",
      description: "Maintenance CI/CD et infrastructure cloud. Réduction significative des coûts cloud (FinOps). Migration de GitLab vers GitHub avec réécriture de 100+ pipelines. Développement d'outils internes et renforcement de la sécurité."
    },
    {
      title: "DevOps Engineer",
      company: "Bedrock Streaming",
      period: "Janv. 2020 - Avr. 2023",
      description: "Accompagnement des équipes sur AWS et Kubernetes. Migration Jenkins vers GitHub Actions. Développement d'une solution de Pre-scaling K8s, authentification SQL sans mot de passe, gestion des secrets, chart Helm commun. Optimisation des coûts et tests de charge."
    },
    {
      title: "Missions Freelance",
      company: "Les Mini Mondes, Journal du Coin, LIM SAS, Syned",
      period: "2020 - 2023",
      description: "Migrations vers Google Cloud, mise en place d'infrastructure as code avec Terraform, déploiements Kubernetes, CI/CD et monitoring pour divers clients."
    },
    {
      title: "Développeur Web / Ops",
      company: "KeyOpsTech",
      period: "Avr. 2018 - Janv. 2020",
      description: "Développement back-office Symfony, migration vers GCP/GKE, mise en place des pipelines de déploiement et système de preview des branches."
    },
    {
      title: "Développeur Web",
      company: "HEVA, Cegid Group, Epitech/Epiweb",
      period: "2014 - 2018",
      description: "Développement web (PHP, AngularJS, React), mise en place de déploiement continu, contribution à des projets d'envergure dans le médical et l'ERP."
    }
  ];

  const values = [
    {
      title: "Excellence",
      description: "Recherche constante de la qualité et de l'amélioration continue dans chaque projet.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Collaboration",
      description: "Travail en étroite collaboration avec vos équipes pour un transfert de compétences optimal.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Innovation",
      description: "Veille technologique constante pour vous proposer les meilleures solutions du marché.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    }
  ];

  const stats = [
    { value: "+10", label: "Années d'expérience IT" },
    { value: "100%", label: "Solutions personnalisées" },
    { value: "24/7", label: "Support disponible" },
    { value: "ROI", label: "Orienté résultats" }
  ];

  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-slate-950">
        {/* Hero Section */}
        <section className="relative py-32 pt-40 overflow-hidden">
          <AnimatedBackground showScanLine />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal width="100%">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                    Mickaël <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Villers</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-300 mb-6">
                    Ingénieur DevOps & Fondateur de Ghota Tech Solutions
                  </p>
                  <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                    Avec plus de 10 ans d&apos;expérience en IT dont 6+ ans spécialisé en DevOps,
                    j&apos;accompagne les entreprises dans leur transformation cloud, l&apos;optimisation de leurs infrastructures
                    et la mise en place de pratiques CI/CD modernes. Expert GCP, AWS, Kubernetes et Terraform.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="mailto:contact@ghotatechsolutions.com"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-colors inline-flex items-center justify-center hover:shadow-lg hover:shadow-blue-500/25"
                    >
                      Me contacter
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="https://fr.linkedin.com/in/mickaël-villers-1b1a6496"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-6 py-3 rounded-full font-semibold transition-colors inline-flex items-center justify-center"
                    >
                      LinkedIn
                      <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </motion.a>
                  </div>
                </motion.div>
              </ScrollReveal>

              <ScrollReveal width="100%">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex justify-center"
                >
                  <div className="relative">
                    <motion.div
                      animate={{
                        boxShadow: [
                          "0 0 60px rgba(59, 130, 246, 0.3)",
                          "0 0 80px rgba(139, 92, 246, 0.3)",
                          "0 0 60px rgba(59, 130, 246, 0.3)"
                        ]
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="w-72 h-72 md:w-80 md:h-80 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-full flex items-center justify-center"
                    >
                      <span className="text-7xl md:text-8xl font-bold text-white">MV</span>
                    </motion.div>
                    {/* Decorative rings */}
                    <div className="absolute inset-0 border-2 border-blue-500/20 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
                    <div className="absolute -inset-4 border border-indigo-500/10 rounded-full" />
                  </div>
                </motion.div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Expertise */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollReveal width="100%">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                  Mon expertise
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Des compétences techniques solides acquises au fil des années
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <ScrollReveal key={skill.name} delay={index * 0.1} width="100%">
                  <div className="mb-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-lg font-medium text-white">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden">
                      <motion.div
                        className={`h-3 rounded-full bg-gradient-to-r ${skill.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Parcours */}
        <section className="py-20 relative overflow-hidden">
          <AnimatedBackground showNodes={false} showScanLine={false} />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollReveal width="100%">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                  Mon parcours
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Une évolution naturelle vers l&apos;expertise DevOps
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-8 max-w-3xl mx-auto">
              {experiences.map((exp, index) => (
                <ScrollReveal key={index} delay={index * 0.2} width="100%" overflow="visible">
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="flex"
                  >
                    <div className="flex-shrink-0 w-4 h-4 bg-blue-500 rounded-full mt-2 mr-6 relative">
                      <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-50" />
                    </div>
                    <div className="flex-1">
                      <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-colors">
                        <h3 className="text-xl font-semibold text-white mb-2">{exp.title}</h3>
                        <div className="text-blue-400 font-medium mb-2">{exp.company}</div>
                        <div className="text-gray-500 text-sm mb-4">{exp.period}</div>
                        <p className="text-gray-400">{exp.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Valeurs */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollReveal width="100%">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                  Mes valeurs
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Ce qui guide mon approche et mes relations client
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <ScrollReveal key={value.title} delay={index * 0.15} width="100%" overflow="visible">
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="text-center p-8 bg-slate-900 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white"
                    >
                      {value.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                    <p className="text-gray-400">
                      {value.description}
                    </p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Points forts */}
        <section className="py-20 relative overflow-hidden">
          <AnimatedBackground showGrid={false} />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollReveal width="100%">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                  Pourquoi me faire confiance ?
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <ScrollReveal key={stat.label} delay={index * 0.1} width="100%">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ type: "spring", delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mb-2"
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-gray-400">{stat.label}</div>
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
                Travaillons ensemble
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                Je suis toujours intéressé par de nouveaux défis techniques.
                N&apos;hésitez pas à me contacter pour discuter de votre projet.
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:contact@ghotatechsolutions.com"
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-full text-lg font-semibold transition-colors inline-flex items-center hover:shadow-lg hover:shadow-blue-500/25"
              >
                Discutons de votre projet
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
