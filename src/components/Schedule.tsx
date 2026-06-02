import { motion, AnimatePresence } from "motion/react";
import { Calendar, Clock, MapPin, Youtube, Facebook, Radio, UserPlus, X, Send } from "lucide-react";
import { useState } from "react";

export function Schedule() {
  const [registeredEvent, setRegisteredEvent] = useState<string | null>(null);
  const [selectedEventModal, setSelectedEventModal] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const events = [
    {
      day: "Domingo",
      title: "Culto de Celebração e Adoração",
      time: "09:00",
      location: "Sede Principal & Transmissão Ao Vivo",
      requiresRegistration: false,
    },
    {
      day: "Terça-feira",
      title: "Culto de Ensino da Palavra",
      time: "18:30",
      location: "Sede Principal",
      requiresRegistration: false,
    },
    {
      day: "Quinta-feira",
      title: "Campanha de Libertação e Cura",
      time: "18:00",
      location: "Sede Principal",
      requiresRegistration: false,
    },
    {
      day: "Sábado",
      title: "Encontro de Jovens Sementes",
      time: "16:00",
      location: "Salão Anexo",
      requiresRegistration: true,
    },
    {
      day: "Sábado",
      title: "Congresso de Liderança Cristã",
      time: "14:00",
      location: "Sede Principal",
      requiresRegistration: true,
    }
  ];

  const handleRegister = (title: string) => {
    setRegisteredEvent(title);
    setTimeout(() => setRegisteredEvent(null), 3000);
  };

  return (
    <section id="schedule" className="py-24 bg-brand-green relative text-white">
      {/* Background pattern overlay (subtle) */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Calendar className="w-12 h-12 text-brand-gold mx-auto mb-4" />
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-white mb-6">
            Agenda e Eventos
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
            Participa nas nossas atividades e cultos. Alguns eventos especiais requerem inscrição prévia para melhor organização.
          </p>
          <p className="text-brand-gold font-serif italic max-w-lg mx-auto">
            "Não deixemos de congregar-nos, como é costume de alguns; antes, façamos admoestações e tanto mais quanto vedes que o Dia se aproxima." — Hebreus 10:25
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Schedule List */}
          <div className="lg:col-span-2 space-y-6">
            {events.map((event, index) => (
              <motion.div
                key={`${event.day}-${index}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between hover:bg-white/15 transition-colors"
              >
                <div className="mb-4 sm:mb-0">
                  <h3 className="text-brand-gold font-bold text-xl mb-1 flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    {event.day}
                  </h3>
                  <p className="text-white text-lg font-medium">{event.title}</p>
                </div>
                <div className="flex flex-col items-start sm:items-end w-full sm:w-auto">
                  <p className="flex items-center text-gray-300 mb-1">
                    <Clock className="w-4 h-4 mr-2" />
                    {event.time}
                  </p>
                  <p className="flex items-center text-gray-300 text-sm mb-3">
                    <MapPin className="w-4 h-4 mr-2" />
                    {event.location}
                  </p>
                  {event.requiresRegistration && (
                    registeredEvent === event.title ? (
                      <span className="text-green-400 font-bold text-sm bg-green-900/40 px-4 py-2 rounded-lg border border-green-500/50">
                        Inscrição Realizada!
                      </span>
                    ) : (
                      <button 
                        onClick={() => setSelectedEventModal(event.title)}
                        className="bg-brand-gold text-brand-green hover:bg-yellow-400 font-bold text-sm px-4 py-2 rounded-lg shadow-md transition-colors flex items-center"
                      >
                        <UserPlus className="w-4 h-4 mr-2" />
                        Inscrever-me
                      </button>
                    )
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Broadcasts panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl p-8 text-center flex flex-col justify-center"
          >
            <Radio className="w-16 h-16 text-red-500 mx-auto mb-4 animate-pulse" />
            <h3 className="text-2xl font-bold text-brand-green mb-4">
              Transmissões Ao Vivo
            </h3>
            <p className="text-gray-600 mb-8">
              Acompanha os nossos cultos de domingo e eventos especiais diretamente da tua casa. A distância não impede a adoração.
            </p>
            
            <div className="space-y-4">
              <a
                href="#"
                className="flex items-center justify-center w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <Youtube className="w-6 h-6 mr-3" />
                Assistir no YouTube
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <Facebook className="w-6 h-6 mr-3" />
                Assistir no Facebook
              </a>
            </div>
          </motion.div>
        </div>

        <AnimatePresence>
          {selectedEventModal && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 text-left"
            >
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-white rounded-3xl p-8 max-w-md w-full relative shadow-2xl"
              >
                <button 
                  onClick={() => setSelectedEventModal(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-brand-green transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                
                <h3 className="text-2xl font-serif font-bold text-brand-green mb-2">Inscrição no Evento</h3>
                <p className="text-gray-600 mb-6 font-medium text-brand-gold">{selectedEventModal}</p>
                
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    setIsSubmitting(true);
                    setTimeout(() => {
                        setIsSubmitting(false);
                        setRegisteredEvent(selectedEventModal);
                        setSelectedEventModal(null);
                    }, 1500);
                  }} 
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-brand-gold outline-none text-gray-800" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp</label>
                    <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-brand-gold outline-none text-gray-800" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Número de Acompanhantes</label>
                    <input type="number" min="0" defaultValue="0" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-brand-gold outline-none text-gray-800" />
                  </div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-brand-green hover:bg-emerald-900 text-white font-bold py-4 rounded-xl flex items-center justify-center transition-colors shadow-md disabled:opacity-70 mt-4"
                  >
                    {isSubmitting ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> : <><Send className="w-5 h-5 mr-2" /> Confirmar Inscrição</>}
                  </button>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
