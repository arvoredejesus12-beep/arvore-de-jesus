import { motion, AnimatePresence } from "motion/react";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { Users, Lock, X, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export function MembersArea() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [showSignup, setShowSignup] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState<any>(null);
  const [role, setRole] = useState<string | null>(null);
 useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
    setUser(currentUser);

    if (currentUser) {
      const docRef = doc(db, "usuarios", currentUser.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setRole(docSnap.data().role);
      }
    }
  });

  return () => unsubscribe();
}, []);

  const handleLogin = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMsg("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setSuccessMsg("Login realizado com sucesso!");
    } catch (error: any) {
      setSuccessMsg("Erro ao entrar: " + error.message);
    }

    setIsSubmitting(false);
  };

  const handleSignup = (e: any) => {
    e.preventDefault();
    setIsSigningUp(true);
    setTimeout(() => {
      setIsSigningUp(false);
      setShowSignup(false);
      setSuccessMsg(
        "Pedido de acesso criado com sucesso. A secretaria enviará o teu acesso por e-mail após validar os dados de membro."
      );
      setTimeout(() => setSuccessMsg(""), 8000);
    }, 1500);
  };

  const handleLogout = async () => {
    await signOut(auth);
  };
  return (
    <section id="members" className="py-24 bg-brand-green relative overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-50"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl"
        >
          <div className="w-20 h-20 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Users className="w-10 h-10 text-brand-gold" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            Área do Membro
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Conteúdo exclusivo para os membros da comunidade Árvore de Jesus. Estudos bíblicos, materiais de discipulado e acompanhamento pastoral.
          </p>
         {user && (
  <>
    <div className="mt-6 p-6 bg-white/10 rounded-xl">
      <h3 className="text-xl font-bold mb-2">Conteúdo Exclusivo</h3>
      <p>Bem-vindo à plataforma de estudos bíblicos.</p>
    </div>

    <div className="mb-6 text-brand-gold font-bold">
      ✅ Bem-vindo, {user.email}
      <div>
        <button
          onClick={handleLogout}
          className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
        >
          Sair
        </button>
      </div>
    </div>
  </>
)}
{!user && (
  <form className="max-w-md mx-auto space-y-4" onSubmit={handleLogin}>
    <div>
      <input
        required
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="O teu e-mail"
        className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold placeholder-gray-400 transition-all"
      />
    </div>

    <div className="relative">
      <input
        required
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Palavra-passe"
        className="w-full px-5 py-4 pl-12 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold placeholder-gray-400 transition-all"
      />
      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
    </div>

    <button
      type="submit"
      disabled={isSubmitting}
      className="w-full bg-brand-gold hover:bg-yellow-500 text-brand-green font-bold text-lg py-4 rounded-xl shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all mt-4 hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] flex items-center justify-center disabled:opacity-70"
    >
      {isSubmitting ? (
        <div className="w-5 h-5 border-2 border-brand-green border-t-transparent rounded-full animate-spin"></div>
      ) : (
        "Entrar na Plataforma"
      )}
    </button>

    {successMsg && (
      <div className="mt-4 p-4 rounded-xl bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-sm animate-pulse">
        {successMsg}
      </div>
    )}

    <div className="pt-4 text-sm text-gray-400 flex justify-between items-center">
      <a href="#" className="hover:text-brand-gold transition-colors">
        Esqueceste a senha?
      </a>
      <button
        type="button"
        onClick={() => setShowSignup(true)}
        className="hover:text-brand-gold transition-colors font-medium"
      >
        Criar Conta
      </button>
    </div>
  </form>
)}
        </motion.div>

        <AnimatePresence>
          {showSignup && (
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
                  onClick={() => setShowSignup(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-brand-green transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                
                <h3 className="text-2xl font-serif font-bold text-brand-green mb-2">Solicitar Acesso</h3>
                <p className="text-gray-600 mb-6 text-sm">Se já és membro da igreja, preenche os dados para receberes acesso à plataforma exclusiva.</p>
                
                <form onSubmit={handleSignup} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-brand-gold outline-none text-gray-800" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                    <input required type="email" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-brand-gold outline-none text-gray-800" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Número de Membro (Opcional)</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-brand-gold outline-none text-gray-800" />
                  </div>
                  <button 
                    type="submit" 
                    disabled={isSigningUp}
                    className="w-full bg-brand-green hover:bg-emerald-900 text-white font-bold py-4 rounded-xl flex items-center justify-center transition-colors shadow-md disabled:opacity-70 mt-4"
                  >
                    {isSigningUp ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> : <><CheckCircle className="w-5 h-5 mr-2" /> Pedir Acesso</>}
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
