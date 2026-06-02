import { motion } from "motion/react";
import { UserCircle } from "lucide-react";

export function Welcome() {
  return (
    <section id="welcome" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
        >
          {/* Image Placeholder */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-brand-gold overflow-hidden bg-gray-100 flex items-center justify-center shadow-xl">
                {/* Fallback to icon if no image */}
                <UserCircle className="w-32 h-32 text-gray-400" strokeWidth={1} />
              </div>
              <div className="absolute -bottom-4 right-4 bg-brand-green text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                Pr. João Zolana
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-2/3">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-green mb-6">
              Boas-Vindas à Nova Família
            </h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                É com grande alegria no coração que te dou as boas-vindas a este
                espaço, não apenas como um site, mas como uma família espiritual
                em Cristo Jesus.
              </p>
              <p>
                Aqui, acreditamos que cada vida é uma semente plantada por Deus,
                chamada a crescer, florescer e dar frutos através da presença de
                Jesus Cristo. A nossa missão é simples e profunda: levar-te a uma
                experiência real com Deus, onde há restauração, esperança e
                transformação.
              </p>
              <p>
                Que ao entrares nesta comunidade, tu sejas enraizado na presença
                de Cristo, fortalecido no amor de Deus e guiado pelo Espírito
                Santo em cada passo da tua caminhada.
              </p>
              <p className="font-semibold text-brand-green">
                Não estás aqui por acaso — Deus tem um propósito para a tua vida.
              </p>
              <p className="pt-4 font-serif italic text-xl text-gray-500">
                Com amor em Cristo,
                <br />
                <span className="text-brand-gold font-bold not-italic">
                  Pr. João Zolana de Cristo
                </span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
