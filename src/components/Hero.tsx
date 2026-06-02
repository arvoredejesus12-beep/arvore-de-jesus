import { motion } from "motion/react";
import bgImage from "../assets/images/arvore_divina_1780242317391.png";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 drop-shadow-xl"
        >
          Junta-te a Nós na <span className="text-brand-gold">Árvore de Jesus</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-xl md:leading-relaxed text-gray-100 mb-10 max-w-3xl mx-auto drop-shadow-lg"
        >
          Um lugar de restauração, intimidade com Deus, amor e transformação
          através de Jesus Cristo. Mais do que uma comunidade, somos uma família
          espiritual conectada à verdadeira Fonte da Vida.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="bg-brand-green/80 backdrop-blur-sm border border-brand-gold/30 p-6 md:p-8 rounded-2xl mb-12 max-w-4xl mx-auto shadow-2xl"
        >
          <p className="text-white font-serif text-lg md:text-xl italic leading-relaxed">
            "Permanecei em mim, e eu permanecerei em vós. Como o ramo não pode
            dar fruto por si mesmo, se não permanecer na videira, assim nem vós
            o podeis dar, se não permanecerdes em mim."
          </p>
          <span className="block mt-4 text-brand-gold font-bold">— João 15:4</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <a
            href="#members"
            className="inline-block bg-brand-gold hover:bg-yellow-400 text-brand-green font-bold text-lg px-8 py-4 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-all hover:shadow-[0_0_30px_rgba(212,175,55,0.8)] hover:-translate-y-1"
          >
            Quero fazer parte da comunidade
          </a>
          <a
            href="#prayer"
            className="inline-block bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-lg px-8 py-4 rounded-full backdrop-blur-sm transition-all hover:-translate-y-1"
          >
            Pedido de Oração
          </a>
        </motion.div>
      </div>
    </section>
  );
}
