'use client';

import SEO from '@/components/SEO';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ScrollReveal } from '@/components/ScrollReveal';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Home() {
  const [floatingElements, setFloatingElements] = useState<Array<{
    width: number;
    height: number;
    left: string;
    top: string;
    duration: number;
    y: number;
    x: number;
  }>>([]);

  useEffect(() => {
    setFloatingElements([...Array(5)].map(() => ({
      width: Math.random() * 300 + 100,
      height: Math.random() * 300 + 100,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: Math.random() * 10 + 10,
      y: Math.random() * 100 - 50,
      x: Math.random() * 100 - 50,
    })));
  }, []);

  return (
    <>
      <SEO />
      <Navigation />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-16">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/50 to-slate-950 z-10" />
            <motion.img
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.4 }}
              transition={{ duration: 1.5 }}
              src="/hero-bg.png"
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            {floatingElements.map((el, i) => (
              <motion.div
                key={i}
                className="absolute bg-blue-500/10 rounded-full blur-3xl"
                style={{
                  width: el.width,
                  height: el.height,
                  left: el.left,
                  top: el.top,
                }}
                animate={{
                  y: [0, el.y],
                  x: [0, el.x],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: el.duration,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            ))}
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 inline-block">
                  Ghota Tech Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
                Votre partenaire DevOps pour des infrastructures <span className="text-white font-medium">fiables</span>, <span className="text-white font-medium">scalables</span> et <span className="text-white font-medium">optimisées</span>.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:contact@ghotatechsolutions.com"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors hover:shadow-lg hover:shadow-blue-500/25"
                >
                  Contactez-nous
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/services"
                  className="glass text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-semibold transition-colors"
                >
                  Découvrir nos services
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-400"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </motion.div>
        </section>

        {/* Services aperçu */}
        <section className="py-32 bg-slate-950 relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollReveal width="100%">
              <div className="text-center mb-20">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                  Expertise DevOps complète
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Des solutions personnalisées pour moderniser et optimiser vos infrastructures
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "CI/CD & Automatisation",
                  desc: "Pipelines robustes pour accélérer vos déploiements",
                  icon: (
                    <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )
                },
                {
                  title: "Cloud & Conteneurs",
                  desc: "Expertise GCP, Kubernetes, Docker",
                  icon: (
                    <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                    </svg>
                  )
                },
                {
                  title: "Observabilité",
                  desc: "Métriques, alerting, dashboards",
                  icon: (
                    <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  )
                },
                {
                  title: "Sécurité",
                  desc: "Bonnes pratiques DevSecOps",
                  icon: (
                    <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  )
                }
              ].map((service, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                    className="group p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-colors duration-300 hover:shadow-2xl hover:shadow-blue-500/10 h-full"
                  >
                    <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500/10 transition-colors">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{service.desc}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-slate-900 relative overflow-hidden">
          <motion.div
            animate={{
              background: [
                "linear-gradient(to right, rgba(37, 99, 235, 0.1), rgba(79, 70, 229, 0.1))",
                "linear-gradient(to right, rgba(79, 70, 229, 0.1), rgba(37, 99, 235, 0.1))"
              ]
            }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
            className="absolute inset-0"
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <ScrollReveal>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
                Prêt à moderniser votre infrastructure ?
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Contactez-nous pour discuter de vos besoins et découvrir comment Ghota Tech Solutions peut vous accompagner dans votre transformation DevOps.
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:contact@ghotatechsolutions.com"
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-full text-lg font-semibold transition-colors hover:shadow-lg hover:shadow-blue-500/25 inline-flex items-center"
              >
                Démarrer la conversation
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
