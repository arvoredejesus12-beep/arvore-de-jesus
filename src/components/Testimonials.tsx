import { motion } from "motion/react";
import { Quote, Send } from "lucide-react";
import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

export function Testimonials() {
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [testemunhos, setTestemunhos] = useState<any[]>([]);

  // ✅ Buscar testemunhos do banco
  useEffect(() => {
    const fetchTestemunhos = async () => {
      const querySnapshot = await getDocs(collection(db, "testemunhos"));
      const lista = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setTestemunhos(lista);
    };

    fetchTestemunhos();
  }, []);

  // ✅ Salvar novo testemunho
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await addDoc(collection(db, "testemunhos"), {
        nome,
        mensagem,
        data: new Date()
      });

      setSuccess(true);
      setNome("");
      setMensagem("");

      setTimeout(() => {
        setSuccess(false);
        setShowForm(false);
      }, 4000);

    } catch (error) {
      console.error("Erro ao salvar:", error);
    }

    setIsSubmitting(false);
  };

  return (
    <section id="testimonials" className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-green mb-6">
            Testemunhos Vivos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça as histórias de transformação.
          </p>
        </div>

        {/* ✅ Mostrar testemunhos do banco */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testemunhos.map((item) => (
            <motion.div
              key={item.id}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100"
            >
              <Quote className="w-10 h-10 text-brand-gold mb-4" />
              <p className="italic mb-6">"{item.mensagem}"</p>
              <p className="font-bold text-brand-green">{item.nome}</p>
            </motion.div>
          ))}
        </div>

        {/* ✅ Formulário */}
        <div className="text-center">
          {!showForm ? (
            <button
              onClick={() => setShowForm(true)}
              className="bg-brand-gold text-brand-green font-bold py-4 px-10 rounded-full"
            >
              Pretendo Contar o meu Testemunho
            </button>
          ) : (
            <div className="bg-white p-8 rounded-3xl max-w-2xl mx-auto text-left">
              {success ? (
                <div className="text-center py-8">
                  <h3 className="text-2xl font-bold text-brand-green mb-2">
                    Testemunho recebido!
                  </h3>
                  <p>Obrigado por partilhar.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">

                  <div>
                    <label className="block mb-2">Teu Nome</label>
                    <input
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      required
                      type="text"
                      className="w-full px-4 py-3 border rounded-xl"
                    />
                  </div>

                  <div>
                    <label className="block mb-2">Teu Testemunho</label>
                    <textarea
                      value={mensagem}
                      onChange={(e) => setMensagem(e.target.value)}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border rounded-xl"
                    />
                  </div>

                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="bg-brand-green text-white px-8 py-3 rounded-xl"
                  >
                    {isSubmitting ? "Enviando..." : "Enviar Testemunho"}
                  </button>

                </form>
              )}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}