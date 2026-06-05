import { motion } from "motion/react";
import { db, auth } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { Users } from "lucide-react";
import { useState, useEffect } from "react";

export function MembersArea() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState<any>(null);
  const [role, setRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // ✅ Detectar usuário e buscar role
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          console.log("Documento encontrado:", data);
          setRole(data.role?.trim().toLowerCase());
        } else {
          console.log("Documento NÃO encontrado");
          setRole(null);
        }
      } else {
        setRole(null);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // ✅ Login
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

  // ✅ Logout
  const handleLogout = async () => {
    await signOut(auth);
  };

  if (loading) {
    return <div className="text-center py-10">Carregando...</div>;
  }

  return (
    <section className="py-24 bg-brand-green">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 text-center text-white shadow-2xl"
        >
          <div className="w-20 h-20 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Users className="w-10 h-10 text-brand-gold" />
          </div>

          <h2 className="text-3xl font-bold mb-4">
            Área do Membro
          </h2>

          {user ? (
            <>
              {role === "admin" && (
                <div className="mt-6 p-6 bg-yellow-400 text-black rounded-xl font-bold">
                  👑 Você está logado como ADMIN
                </div>
              )}

              <div className="mt-6 p-6 bg-white/10 rounded-xl">
                <h3 className="text-xl font-bold mb-2">Conteúdo Exclusivo</h3>
                <p>Bem-vindo à plataforma privada.</p>
              </div>

              <div className="mt-4 font-bold">
                ✅ Bem-vindo, {user.email}
              </div>

              <button
                onClick={handleLogout}
                className="mt-6 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg"
              >
                Sair
              </button>
            </>
          ) : (
            <form onSubmit={handleLogin} className="space-y-4 mt-6 max-w-md mx-auto">
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="O teu e-mail"
                className="w-full px-4 py-3 rounded-xl border"
              />

              <input
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Palavra-passe"
                className="w-full px-4 py-3 rounded-xl border"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-gold text-brand-green font-bold py-3 rounded-xl"
              >
                {isSubmitting ? "Entrando..." : "Entrar na Plataforma"}
              </button>

              {successMsg && (
                <div className="mt-3 text-sm text-yellow-300">
                  {successMsg}
                </div>
              )}
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}