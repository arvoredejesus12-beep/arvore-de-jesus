import { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  updateDoc,
  doc,
  query,
  where,
  orderBy
} from "firebase/firestore";

export function AdminPanel() {
  const [pendentes, setPendentes] = useState<any[]>([]);

  // ✅ Buscar testemunhos pendentes
  useEffect(() => {
    const buscarPendentes = async () => {
      const q = query(
        collection(db, "testemunhos"),
        where("aprovado", "==", false),
        orderBy("data", "desc")
      );

      const snapshot = await getDocs(q);
      const lista: any[] = [];

      snapshot.forEach((docItem) => {
        lista.push({ id: docItem.id, ...docItem.data() });
      });

      setPendentes(lista);
    };

    buscarPendentes();
  }, []);

  // ✅ Aprovar testemunho
  const aprovar = async (id: string) => {
    await updateDoc(doc(db, "testemunhos", id), {
      aprovado: true
    });

    setPendentes((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="mt-10 p-6 bg-yellow-100 rounded">
      <h2 className="text-xl font-bold mb-4">Painel Admin</h2>

      {pendentes.length === 0 && (
        <p>Nenhum testemunho pendente.</p>
      )}

      {pendentes.map((t) => (
        <div key={t.id} className="mb-4 p-4 border rounded bg-white">
          <strong>{t.nome}</strong>
          <p>{t.mensagem}</p>

          <button
            onClick={() => aprovar(t.id)}
            className="bg-green-600 text-white px-3 py-1 rounded mt-2"
          >
            Aprovar
          </button>
        </div>
      ))}
    </div>
  );
}