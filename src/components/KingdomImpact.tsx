import { motion } from "motion/react";
import { Users, BookOpen, Heart, Activity } from "lucide-react";
import { useEffect, useState } from "react";

export function KingdomImpact() {
  const stats = [
    { label: "Pessoas Salvas", value: 1250, icon: <Heart className="w-8 h-8 text-brand-gold" /> },
    { label: "Cursos Concluídos", value: 3400, icon: <BookOpen className="w-8 h-8 text-brand-gold" /> },
    { label: "Membros Ativos", value: 850, icon: <Users className="w-8 h-8 text-brand-gold" /> },
    { label: "Projetos Sociais", value: 12, icon: <Activity className="w-8 h-8 text-brand-gold" /> },
  ];

  return (
    <section className="py-24 bg-brand-green text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Impacto do Reino</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
            Não procuramos números, mas vidas transformadas. Cada número representa uma alma, uma família restaurada e uma semente do Reino.
          </p>
          <p className="italic text-brand-gold font-serif">
            "Assim resplandeça a vossa luz diante dos homens, para que vejam as vossas boas obras e glorifiquem a vosso Pai, que está nos céus." — Mateus 5:16
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-white/10 rounded-3xl border border-white/20 backdrop-blur-sm"
            >
              <div className="mx-auto w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold font-mono text-brand-gold mb-2">+{stat.value}</div>
              <div className="text-sm md:text-base font-medium text-gray-200">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
