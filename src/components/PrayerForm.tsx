import { motion } from "motion/react";
import { Send, MessageSquareHeart, Shield } from "lucide-react";
import React, { useState } from "react";

export function PrayerForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isConfidential, setIsConfidential] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="prayer" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <MessageSquareHeart className="w-12 h-12 text-brand-gold mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-green mb-4">
            Pedidos de Oração & Aconselhamento
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Não precisas carregar os teus fardos sozinho. Partilha connosco a tua necessidade e o nosso ministério estará orando por ti.
          </p>
          <p className="text-brand-gold font-serif italic text-lg">
            "Clama a mim, e responder-te-ei, e anunciar-te-ei coisas grandes e firmes que não sabes." — Jeremias 33:3
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gray-50 p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100"
        >
          {success ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-brand-green mb-2">Pedido Enviado com Sucesso!</h3>
              <p className="text-gray-600">O Pastor e a equipa de intercessão estarão a orar por ti. Deus te abençoe.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nome Completo</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-shadow"
                    placeholder="O teu nome"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Telefone / WhatsApp</label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-shadow"
                    placeholder="+244 9XX XXX XXX"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">E-mail (Opcional)</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-shadow"
                  placeholder="teu.email@exemplo.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Pedido de Oração / Mensagem de Aconselhamento</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-shadow resize-none"
                  placeholder="Como podemos orar por ti hoje?"
                ></textarea>
              </div>

              <div className="flex items-center space-x-3 bg-white p-4 rounded-xl border border-gray-200">
                <input
                  type="checkbox"
                  id="confidential"
                  className="w-5 h-5 text-brand-green border-gray-300 rounded focus:ring-brand-gold"
                  checked={isConfidential}
                  onChange={(e) => setIsConfidential(e.target.checked)}
                />
                <label htmlFor="confidential" className="flex items-center text-sm font-medium text-gray-700 cursor-pointer">
                  <Shield className="w-4 h-4 text-brand-gold mr-2" />
                  Pedido Confidencial (Apenas o Pastor terá acesso)
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-brand-green hover:bg-emerald-900 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-md flex items-center justify-center ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:-translate-y-1 hover:shadow-lg'}`}
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Enviar Pedido
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
