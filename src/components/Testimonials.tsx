import { motion } from "motion/react";
import { Quote, Send } from "lucide-react";
import React, { useState } from "react";

export function Testimonials() {
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setShowForm(false);
      }, 4000);
    }, 1500);
  };

  const testimonials = [
    {
      name: "Maria de Lurdes",
      text: "Através desta comunidade encontrei a paz que não podia encontrar. Os cultos e as orações renovaram a minha mente."
    },
    {
      name: "João Silva",
      text: "Fazer os cursos da Árvore de Jesus mudou o meu casamento e a minha postura como líder e pai na minha família."
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-green mb-6">Testemunhos Vivos</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A fé cresce quando ouvimos o que Deus tem feito. Conheça as histórias de transformação e sinta-se à vontade para partilhar as tuas bênçãos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 relative group hover:shadow-lg transition-shadow"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-brand-gold/20 group-hover:text-brand-gold/40 transition-colors" />
              <p className="text-gray-700 italic text-lg mb-8 leading-relaxed relative z-10">"{item.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold font-serif">
                  {item.name.charAt(0)}
                </div>
                <p className="font-bold text-brand-green">{item.name}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          {!showForm ? (
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setShowForm(true)}
              className="bg-brand-gold text-brand-green font-bold text-lg py-4 px-10 rounded-full shadow-lg transition-all hover:shadow-[0_0_20px_rgba(212,175,55,0.5)]"
            >
              Pretendo Contar o meu Testemunho
            </motion.button>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl max-w-2xl mx-auto text-left border border-gray-100"
            >
              {success ? (
                <div className="text-center py-8">
                   <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                     <Send className="w-10 h-10" />
                   </div>
                   <h3 className="text-2xl font-bold text-brand-green mb-2">Testemunho recebido!</h3>
                   <p className="text-gray-600">Obrigado por edificar a nossa fé com a tua história. Deus te abençoe abundantemente.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-serif font-bold text-brand-green border-b border-gray-100 pb-4 mb-6">O que Deus fez na tua vida?</h3>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Teu Nome</label>
                    <input required type="text" placeholder="Nome completo ou inicial" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-shadow" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Teu Testemunho</label>
                    <textarea required rows={5} placeholder="Partilha a tua bênção ou milagre connosco..." className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none resize-none transition-shadow"></textarea>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-end gap-4 pt-4">
                    <button type="button" onClick={() => setShowForm(false)} className="px-6 py-3 text-gray-500 hover:bg-gray-100 rounded-xl transition-colors font-medium">Cancelar</button>
                    <button disabled={isSubmitting} type="submit" className="bg-brand-green hover:bg-emerald-900 text-white px-8 py-3 rounded-xl font-bold flex items-center justify-center disabled:opacity-70 transition-all shadow-md">
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <><Send className="w-5 h-5 mr-3" /> Enviar Testemunho</>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
