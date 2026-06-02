import { motion } from "motion/react";
import { useState } from "react";
import { TreePine, Heart, Leaf, Target } from "lucide-react";

export function About() {
  const [activeTab, setActiveTab] = useState<"who" | "mission" | "vision">("who");

  const tabContent = {
    who: {
      title: "Quem Somos",
      icon: <TreePine className="w-8 h-8 md:w-12 md:h-12 mb-4 text-brand-gold" />,
      text: "Somos uma comunidade cristã comprometida em viver o Evangelho de Jesus Cristo de forma autêntica e transformadora. Cremos que em Cristo encontramos restauração para a alma, direção para a vida e esperança para o futuro.",
    },
    mission: {
      title: "Nossa Missão & Propósito",
      icon: <Heart className="w-8 h-8 md:w-12 md:h-12 mb-4 text-brand-gold" />,
      text: "Acolher, ensinar, discipular e fortalecer pessoas para que vivam plenamente o propósito de Deus. Somos uma família espiritual que cresce na Palavra, persevera na oração, caminha em amor e produz frutos para o Reino de Deus. Assim como uma árvore saudável cresce porque está ligada às suas raízes, acreditamos que todo cristão floresce quando permanece ligado a Jesus Cristo. Existimos para glorificar a Deus, conectar pessoas a Cristo e transformar vidas.",
    },
    vision: {
      title: "Nossa Visão",
      icon: <Target className="w-8 h-8 md:w-12 md:h-12 mb-4 text-brand-gold" />,
      text: "Sonhamos com uma geração profundamente enraizada em Jesus Cristo, vivendo em santidade, amor e unidade, levando esperança às nações e refletindo a glória de Deus em cada área da vida.",
    },
  };

  return (
    <section id="about" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-green/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Leaf className="w-10 h-10 text-brand-green mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-green mb-4">
            Enraizados em Cristo
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto italic font-serif">
            "Quem permanece na Árvore de Jesus encontra raízes para suportar as
            tempestades e frutos para abençoar o mundo."
          </p>
        </motion.div>

        {/* Interactive Tabs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden"
        >
          <div className="flex flex-col md:flex-row border-b border-gray-100">
            {(Object.keys(tabContent) as Array<keyof typeof tabContent>).map(
              (key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex-1 py-6 px-4 text-lg font-medium transition-colors ${
                    activeTab === key
                      ? "bg-brand-green text-white"
                      : "bg-white text-gray-600 hover:bg-gray-50 hover:text-brand-green"
                  }`}
                >
                  {tabContent[key].title}
                </button>
              )
            )}
          </div>
          
          <div className="p-8 md:p-12 min-h-[300px] flex flex-col items-center justify-center text-center">
            {tabContent[activeTab].icon}
            <h3 className="text-2xl font-serif font-bold text-brand-green mb-6">
              {tabContent[activeTab].title}
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl">
              {tabContent[activeTab].text}
            </p>
          </div>
        </motion.div>

        {/* Lema */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-16 max-w-4xl text-center bg-brand-gold/10 px-6 py-8 rounded-2xl border border-brand-gold/20"
        >
          <p className="text-brand-green font-serif font-bold text-xl md:text-2xl uppercase tracking-wider">
            "Enraizados e conectados na presença de Cristo. Transformados pelo Amor. Frutificando para o Reino."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
