import { motion, AnimatePresence } from "motion/react";
import { BookOpen, Heart, GraduationCap, Flame, Droplets, Link as LinkIcon, Edit, UserPlus, FileText, X, Send } from "lucide-react";
import { useState } from "react";

export function Courses() {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleEnroll = (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setSelectedCourse(null);
      }, 3000);
    }, 1500);
  };

  const courses = [
    {
      id: 1,
      title: "Fundamentos da Fé",
      description: "Mergulha nos princípios básicos do Evangelho e constrói uma base sólida na Palavra de Deus.",
      icon: <BookOpen className="w-10 h-10 text-brand-gold mb-6" />,
      features: ["Apostilas PDF", "Vídeos Curtos"]
    },
    {
      id: 2,
      title: "Vida de Oração",
      description: "Aprenda a orar de forma eficaz, íntima e poderosa de acordo com a vontade de Deus.",
      icon: <Flame className="w-10 h-10 text-brand-gold mb-6" />,
      features: ["Mentores", "Salas de Oração"]
    },
    {
      id: 3,
      title: "Leitura Bíblica",
      description: "Crie um forte hábito de entender a Palavra no contexto histórico e espiritual perfeito.",
      icon: <BookOpen className="w-10 h-10 text-brand-gold mb-6" />,
      features: ["Planos de Leitura", "Testes"]
    },
    {
      id: 4,
      title: "Evangelismo",
      description: "Aprenda métodos modernos e bíblicos para alcançar vidas fora das paredes da igreja.",
      icon: <LinkIcon className="w-10 h-10 text-brand-gold mb-6" />,
      features: ["Práticas de Rua", "Testemunhos"]
    },
    {
      id: 5,
      title: "Batismo (Iniciantes)",
      description: "Preparação completa para o novo convertido entender a importância do batismo nas águas e nova vida.",
      icon: <Droplets className="w-10 h-10 text-brand-gold mb-6" />,
      features: ["Mentoria", "Entrevista"]
    },
    {
      id: 6,
      title: "Liderança Cristã",
      description: "Desenvolva o teu chamado espiritual, prepara-te para liderar células, pequenos grupos e ministérios.",
      icon: <GraduationCap className="w-10 h-10 text-brand-gold mb-6" />,
      features: ["Formação Exclusiva", "Certificado"]
    }
  ];

  return (
    <section id="courses" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-green mb-6">Escola de Discípulos Online</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Nossos cursos combinam vídeos, textos (PDFs), exercícios e avaliações. Ao concluí-los, receberás um Certificado Digital automatizado da Academia Árvore de Jesus.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-bold text-brand-gold">
            <span className="bg-brand-gold/10 px-4 py-2 rounded-full flex items-center"><UserPlus className="w-4 h-4 mr-2" /> Jovens</span>
            <span className="bg-brand-gold/10 px-4 py-2 rounded-full flex items-center"><Heart className="w-4 h-4 mr-2" /> Mulheres</span>
            <span className="bg-brand-gold/10 px-4 py-2 rounded-full flex items-center"><Edit className="w-4 h-4 mr-2" /> Homens</span>
            <span className="bg-brand-gold/10 px-4 py-2 rounded-full flex items-center"><GraduationCap className="w-4 h-4 mr-2" /> Líderes e Pastores</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-gray-50 border border-gray-100 rounded-3xl p-8 hover:shadow-xl transition-all flex flex-col h-full"
            >
              {course.icon}
              <h3 className="text-2xl font-serif font-bold text-brand-green mb-4">{course.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow leading-relaxed">{course.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                 {course.features.map(f => (
                   <span key={f} className="text-xs font-bold text-brand-green bg-brand-green/10 px-2 py-1 rounded">
                     {f}
                   </span>
                 ))}
                 <span className="text-xs font-bold text-blue-600 bg-blue-100 flex items-center px-2 py-1 rounded">
                   <FileText className="w-3 h-3 mr-1" /> Certificado
                 </span>
              </div>

              <button
                onClick={() => setSelectedCourse(course.title)}
                className="mt-auto block w-full text-center bg-brand-green hover:bg-emerald-900 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-1"
              >
                Cadastrar e Acessar Turma
              </button>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedCourse && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            >
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-white rounded-3xl p-8 max-w-md w-full relative shadow-2xl"
              >
                <button 
                  onClick={() => setSelectedCourse(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-brand-green transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                
                {success ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <GraduationCap className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-brand-green mb-2">Matrícula Realizada!</h3>
                    <p className="text-gray-600">Verifica o teu e-mail para obteres o acesso à plataforma e aos materiais do curso "<strong>{selectedCourse}</strong>".</p>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-serif font-bold text-brand-green mb-2">Inscrição no Curso</h3>
                    <p className="text-gray-600 mb-6 font-medium text-brand-gold">{selectedCourse}</p>
                    
                    <form onSubmit={handleEnroll} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                        <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-brand-gold outline-none" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp</label>
                        <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-brand-gold outline-none" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">E-mail (Para receber acesso)</label>
                        <input required type="email" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-brand-gold outline-none" />
                      </div>
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-brand-gold hover:bg-yellow-400 text-brand-green font-bold py-4 rounded-xl flex items-center justify-center transition-colors shadow-md disabled:opacity-70 mt-4"
                      >
                        {isSubmitting ? <div className="w-5 h-5 border-2 border-brand-green border-t-transparent rounded-full animate-spin"></div> : <><FileText className="w-5 h-5 mr-2" /> Confirmar Matrícula</>}
                      </button>
                    </form>
                  </>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
