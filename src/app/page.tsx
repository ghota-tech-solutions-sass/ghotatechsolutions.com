'use client';

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
      <Navigation />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-16" aria-label="Section d'accueil">
          {/* Animated Grid Background */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.08]" />
            {/* Scanning line effect */}
            <motion.div
              className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
              animate={{
                top: ["0%", "100%"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>

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

          {/* Animated connection nodes */}
          <svg className="absolute inset-0 w-full h-full z-[1] pointer-events-none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            {/* Connection lines */}
            <motion.line
              x1="10%" y1="20%" x2="25%" y2="35%"
              stroke="rgba(59, 130, 246, 0.2)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 1, 0] }}
              transition={{ duration: 4, repeat: Infinity, times: [0, 0.4, 0.6, 1] }}
            />
            <motion.line
              x1="25%" y1="35%" x2="40%" y2="25%"
              stroke="rgba(139, 92, 246, 0.2)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 1, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.5, times: [0, 0.4, 0.6, 1] }}
            />
            <motion.line
              x1="75%" y1="30%" x2="85%" y2="45%"
              stroke="rgba(16, 185, 129, 0.2)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 1, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1, times: [0, 0.4, 0.6, 1] }}
            />
            <motion.line
              x1="60%" y1="70%" x2="75%" y2="60%"
              stroke="rgba(59, 130, 246, 0.2)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 1, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1.5, times: [0, 0.4, 0.6, 1] }}
            />
            <motion.line
              x1="20%" y1="65%" x2="35%" y2="75%"
              stroke="rgba(236, 72, 153, 0.15)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 1, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 2, times: [0, 0.4, 0.6, 1] }}
            />

            {/* Nodes */}
            <motion.circle cx="10%" cy="20%" r="3" fill="#3b82f6" opacity="0.4"
              animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.circle cx="25%" cy="35%" r="4" fill="#8b5cf6" opacity="0.4"
              animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
            />
            <motion.circle cx="40%" cy="25%" r="3" fill="#10b981" opacity="0.4"
              animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.6, 0.4] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            />
            <motion.circle cx="75%" cy="30%" r="4" fill="#3b82f6" opacity="0.4"
              animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.3 }}
            />
            <motion.circle cx="85%" cy="45%" r="3" fill="#8b5cf6" opacity="0.4"
              animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 0.8 }}
            />
            <motion.circle cx="60%" cy="70%" r="4" fill="#10b981" opacity="0.4"
              animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.6, 0.4] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1.2 }}
            />
            <motion.circle cx="75%" cy="60%" r="3" fill="#ec4899" opacity="0.3"
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.6 }}
            />
            <motion.circle cx="20%" cy="65%" r="3" fill="#3b82f6" opacity="0.4"
              animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 1.5 }}
            />
            <motion.circle cx="35%" cy="75%" r="4" fill="#fbbf24" opacity="0.3"
              animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, delay: 2 }}
            />
          </svg>

          {/* Floating gradient orbs */}
          <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
            {floatingElements.map((el, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full blur-3xl"
                style={{
                  width: el.width,
                  height: el.height,
                  left: el.left,
                  top: el.top,
                  background: i % 3 === 0
                    ? 'rgba(59, 130, 246, 0.08)'
                    : i % 3 === 1
                      ? 'rgba(139, 92, 246, 0.08)'
                      : 'rgba(16, 185, 129, 0.06)',
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

          {/* Animated gradient overlay */}
          <motion.div
            className="absolute inset-0 z-[2] pointer-events-none"
            animate={{
              background: [
                "radial-gradient(ellipse 80% 50% at 20% 40%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
                "radial-gradient(ellipse 80% 50% at 80% 60%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)",
                "radial-gradient(ellipse 80% 50% at 50% 30%, rgba(16, 185, 129, 0.08) 0%, transparent 50%)",
                "radial-gradient(ellipse 80% 50% at 20% 40%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
              ]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 inline-block">
                  Expert DevOps &amp; Cloud freelance à Lyon
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
                  aria-label="Envoyer un email pour nous contacter"
                >
                  Contactez-nous
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/services"
                  className="glass text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-semibold transition-colors"
                  aria-label="Voir la liste de nos services DevOps"
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
        <section className="py-32 bg-slate-950 relative" aria-label="Aperçu des services">
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
                  title: "Déploiement d'IA",
                  desc: "Modèles IA & LLM en self-hosted ou cloud",
                  icon: (
                    <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
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
                <ScrollReveal key={index} delay={index * 0.1} width="100%" overflow="visible">
                  <motion.div
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                    className="group p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-colors duration-300 hover:shadow-2xl hover:shadow-blue-500/10 h-full flex flex-col"
                  >
                    <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500/10 transition-colors">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-400 leading-relaxed flex-grow">{service.desc}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section className="py-20 bg-slate-950 relative" aria-label="Références clients">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollReveal width="100%">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                  Ils m&apos;ont fait confiance
                </h2>
                <p className="text-gray-400">
                  Des entreprises de toutes tailles accompagnées dans leur transformation DevOps
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal width="100%">
              <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
                {[
                  { name: "HomeServe", color: "#e11d48" },
                  { name: "Bedrock (M6)", color: "#3b82f6" },
                  { name: "G&T EQUITY", color: "#22c55e" },
                  { name: "Les Mini Mondes", color: "#10b981" },
                  { name: "Journal du Coin", color: "#f59e0b" },
                  { name: "Festa Universal", color: "#a855f7" },
                  { name: "Lim Sas", color: "#8b5cf6" },
                  { name: "Syned", color: "#6366f1" },
                  { name: "KeyOpsTech", color: "#14b8a6" },
                  { name: "HEVA", color: "#ec4899" },
                  { name: "Cegid", color: "#0ea5e9" },
                ].map((client, index) => (
                  <motion.div
                    key={client.name}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div
                      className="px-6 py-3 rounded-lg border border-slate-800 bg-slate-900/50 hover:border-slate-700 transition-all duration-300"
                      style={{
                        boxShadow: `0 0 0 0 ${client.color}20`,
                      }}
                    >
                      <span
                        className="text-lg md:text-xl font-semibold text-gray-400 group-hover:text-gray-200 transition-colors"
                        style={{
                          textShadow: `0 0 0 ${client.color}`,
                        }}
                      >
                        {client.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-slate-900 relative overflow-hidden" aria-label="Appel à l'action">
          {/* Animated background grid */}
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />

          {/* Floating particles/nodes in background */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-blue-500/30 rounded-full"
                style={{
                  left: `${15 + i * 15}%`,
                  top: `${20 + (i % 3) * 25}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>

          {/* Animated connection lines in background */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <motion.line
              x1="10%" y1="30%" x2="30%" y2="50%"
              stroke="rgba(59, 130, 246, 0.15)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.line
              x1="70%" y1="20%" x2="90%" y2="40%"
              stroke="rgba(139, 92, 246, 0.15)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
            />
            <motion.line
              x1="80%" y1="60%" x2="95%" y2="80%"
              stroke="rgba(16, 185, 129, 0.15)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 1 }}
            />
          </svg>

          {/* Gradient overlay */}
          <motion.div
            animate={{
              background: [
                "radial-gradient(ellipse at 20% 50%, rgba(37, 99, 235, 0.15) 0%, transparent 50%)",
                "radial-gradient(ellipse at 80% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)",
                "radial-gradient(ellipse at 20% 50%, rgba(37, 99, 235, 0.15) 0%, transparent 50%)"
              ]
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute inset-0"
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollReveal width="100%">
              <div className="text-center">
                {/* DevOps Infinity Loop Illustration */}
                <div className="mb-12 flex justify-center">
                  <svg className="w-72 h-40 md:w-[420px] md:h-56 lg:w-[500px] lg:h-64" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Infinity loop path */}
                    <motion.path
                      d="M80 90 C80 50, 120 50, 160 90 C200 130, 240 130, 240 90 C240 50, 200 50, 160 90 C120 130, 80 130, 80 90"
                      stroke="url(#infinityGradient)"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                    />

                    {/* Animated dot traveling along the infinity path */}
                    <motion.circle
                      r="6"
                      fill="#3b82f6"
                      filter="url(#glow)"
                      animate={{
                        offsetDistance: ["0%", "100%"],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      style={{
                        offsetPath: "path('M80 90 C80 50, 120 50, 160 90 C200 130, 240 130, 240 90 C240 50, 200 50, 160 90 C120 130, 80 130, 80 90')",
                      }}
                    />

                    {/* DEV side icons */}
                    <g>
                      {/* Code icon */}
                      <rect x="45" y="75" width="30" height="30" rx="4" fill="rgba(59, 130, 246, 0.2)" stroke="rgba(59, 130, 246, 0.6)" strokeWidth="1.5" />
                      <path d="M55 85 L51 90 L55 95 M70 85 L74 90 L70 95" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <text x="60" y="120" fill="rgba(148, 163, 184, 0.8)" fontSize="10" textAnchor="middle" fontWeight="500">DEV</text>
                    </g>

                    {/* OPS side icons */}
                    <g>
                      {/* Server/Gear icon */}
                      <rect x="245" y="75" width="30" height="30" rx="4" fill="rgba(16, 185, 129, 0.2)" stroke="rgba(16, 185, 129, 0.6)" strokeWidth="1.5" />
                      <motion.g
                        animate={{ rotate: 360 }}
                        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                        style={{ transformOrigin: "260px 90px" }}
                      >
                        <circle cx="260" cy="90" r="8" fill="none" stroke="#10b981" strokeWidth="2" />
                        <circle cx="260" cy="90" r="3" fill="#10b981" />
                        {/* Gear teeth */}
                        <path d="M260 80 L260 82 M260 98 L260 100 M250 90 L252 90 M268 90 L270 90" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
                      </motion.g>
                      <text x="260" y="120" fill="rgba(148, 163, 184, 0.8)" fontSize="10" textAnchor="middle" fontWeight="500">OPS</text>
                    </g>

                    {/* Center icons - CI/CD pipeline steps */}
                    {/* Build */}
                    <motion.g
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                    >
                      <circle cx="120" cy="55" r="12" fill="rgba(251, 191, 36, 0.2)" stroke="rgba(251, 191, 36, 0.6)" strokeWidth="1.5" />
                      <path d="M116 55 L120 51 L124 55 L120 59 Z" fill="#fbbf24" />
                      <text x="120" y="38" fill="rgba(148, 163, 184, 0.6)" fontSize="8" textAnchor="middle">Build</text>
                    </motion.g>

                    {/* Test */}
                    <motion.g
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    >
                      <circle cx="160" cy="45" r="12" fill="rgba(139, 92, 246, 0.2)" stroke="rgba(139, 92, 246, 0.6)" strokeWidth="1.5" />
                      <path d="M156 45 L159 48 L165 42" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <text x="160" y="28" fill="rgba(148, 163, 184, 0.6)" fontSize="8" textAnchor="middle">Test</text>
                    </motion.g>

                    {/* Deploy */}
                    <motion.g
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    >
                      <circle cx="200" cy="55" r="12" fill="rgba(16, 185, 129, 0.2)" stroke="rgba(16, 185, 129, 0.6)" strokeWidth="1.5" />
                      <path d="M196 55 L200 51 L204 55 M200 51 L200 60" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <text x="200" y="38" fill="rgba(148, 163, 184, 0.6)" fontSize="8" textAnchor="middle">Deploy</text>
                    </motion.g>

                    {/* Monitor */}
                    <motion.g
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                    >
                      <circle cx="200" cy="125" r="12" fill="rgba(236, 72, 153, 0.2)" stroke="rgba(236, 72, 153, 0.6)" strokeWidth="1.5" />
                      <path d="M194 125 L198 121 L202 127 L206 123" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <text x="200" y="148" fill="rgba(148, 163, 184, 0.6)" fontSize="8" textAnchor="middle">Monitor</text>
                    </motion.g>

                    {/* Plan */}
                    <motion.g
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 2 }}
                    >
                      <circle cx="120" cy="125" r="12" fill="rgba(59, 130, 246, 0.2)" stroke="rgba(59, 130, 246, 0.6)" strokeWidth="1.5" />
                      <path d="M116 122 L124 122 M116 125 L122 125 M116 128 L120 128" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
                      <text x="120" y="148" fill="rgba(148, 163, 184, 0.6)" fontSize="8" textAnchor="middle">Plan</text>
                    </motion.g>

                    {/* Gradients and filters */}
                    <defs>
                      <linearGradient id="infinityGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="50%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#10b981" />
                      </linearGradient>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>
                  </svg>
                </div>

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
                  aria-label="Envoyer un email pour démarrer la conversation"
                >
                  Démarrer la conversation
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
