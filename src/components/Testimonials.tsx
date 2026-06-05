import { useEffect, useState } from "react";
import { db, auth } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  orderBy,
  serverTimestamp
} from "firebase/firestore";

export function Testemunhos() {
  const [mensagem, setMensagem] = useState("");
  const [lista, setLista] = useState<any[]>([]);
  const user = auth.currentUser;

  // ✅ Buscar testemunhos aprovados
  useEffect(() => {
    const buscar = async () => {
      const q = query(
        collection(db, "testemunhos"),
        where("aprovado", "==", true),
        orderBy("data", "desc")
      );

      const snapshot = await getDocs(q);
      const dados: any[] = [];

      snapshot.forEach((docItem) => {
        dados.push({ id: docItem.id, ...docItem.data() });
      });

      setLista(dados);
    };

    buscar();
  }, []);

  // ✅ Enviar testemunho
  const enviar = async () => {
    if (!user) {
      alert("Precisa estar logado para enviar testemunho.");
      return;
    }

    if (!mensagem.trim()) {
      alert("Escreva um testemunho.");
      return;
    }

    await addDoc(collection(db, "testemunhos"), {
      nome: user.email,
      mensagem: mensagem,
      aprovado: false,
      data: serverTimestamp(),
      userId: user.uid
    });

    alert("Testemunho enviado para aprovação!");
    setMensagem("");
  };

  return (
    <section className="py-16">
      <h2 className="text-2xl font-bold mb-6">Testemunhos</h2>

      {user && (
        <div className="mb-6">
          <textarea
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            placeholder="Escreva seu testemunho..."
            className="w-full border p-3 rounded"
          />
          <button
            onClick={enviar}
            className="bg-green-600 text-white px-4 py-2 mt-2 rounded"
          >
            Enviar Testemunho
          </button>
        </div>
      )}

      <div className="space-y-4">
        {lista.map((t) => (
          <div key={t.id} className="p-4 border rounded bg-white">
            <strong>{t.nome}</strong>
            <p>{t.mensagem}</p>
          </div>
        ))}
      </div>
    </section>
  );
}