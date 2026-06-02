import { motion } from "motion/react";
import { HeartHandshake, Copy, CheckCircle2, Globe, ShieldCheck, Smartphone } from "lucide-react";
import { useState } from "react";

export function Donations() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"nacional" | "internacional" | "digital">("nacional");

  const ibanNacional = "AO06 0000 0000 0000 0000 0000 0";
  const ibaInternacional = "PT50 0000 0000 0000 0000 0000 0";

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="donations" className="py-24 bg-gray-50 border-t border-gray-200 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-brand-gold/5 rounded-l-full blur-3xl transform translate-x-1/2"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <HeartHandshake className="w-16 h-16 text-brand-gold mx-auto mb-4" />
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-green mb-6">
            Doações e Expansão do Reino
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            "Deus ama a quem dá com alegria." — 2 Coríntios 9:7
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Causes Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Onde a tua semente é plantada:</h3>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start">
              <div className="bg-brand-green/10 p-3 rounded-full mr-4">
                <Globe className="w-6 h-6 text-brand-green" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-brand-green mb-1">Missões e Evangelismo</h4>
                <p className="text-gray-600">Apoio a missionários e projetos de expansão do Evangelho de Cristo em várias regiões.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start">
              <div className="bg-brand-gold/20 p-3 rounded-full mr-4">
                <HeartHandshake className="w-6 h-6 text-brand-gold" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-brand-green mb-1">Ação Social</h4>
                <p className="text-gray-600">Distribuição de cestas básicas, roupas e acompanhamento a famílias vulneráveis.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <ShieldCheck className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-brand-green mb-1">Manutenção da Igreja</h4>
                <p className="text-gray-600">Investimento na infraestrutura, equipamentos para transmissões online e logística dos cultos.</p>
              </div>
            </div>
          </motion.div>

          {/* Action Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
          >
            <div className="flex border-b border-gray-200">
              <button
                onClick={() => setActiveTab("nacional")}
                className={`flex-1 py-4 px-2 text-center font-bold text-sm transition-colors ${activeTab === "nacional" ? "bg-brand-green text-white" : "bg-gray-50 text-gray-500 hover:bg-gray-100"}`}
              >
                Angola (Nacional)
              </button>
              <button
                onClick={() => setActiveTab("internacional")}
                className={`flex-1 py-4 px-2 text-center font-bold text-sm transition-colors ${activeTab === "internacional" ? "bg-brand-green text-white" : "bg-gray-50 text-gray-500 hover:bg-gray-100"}`}
              >
                Internacional
              </button>
              <button
                onClick={() => setActiveTab("digital")}
                className={`flex-1 py-4 px-2 text-center font-bold text-sm transition-colors ${activeTab === "digital" ? "bg-brand-green text-white" : "bg-gray-50 text-gray-500 hover:bg-gray-100"}`}
              >
                Digitais
              </button>
            </div>

            <div className="p-8">
              {activeTab === "nacional" && (
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Transferência Bancária (Angola)</h3>
                  <div className="bg-gray-50 border-2 border-brand-green/20 border-dashed rounded-2xl p-6 mb-6">
                    <p className="text-sm text-gray-500 mb-2 font-medium uppercase tracking-wider">IBAN BAI</p>
                    <div className="text-xl md:text-2xl font-mono font-bold text-brand-green mb-4 break-all">
                      {ibanNacional}
                    </div>
                    <button
                      onClick={() => handleCopy(ibanNacional)}
                      className={`w-full py-3 px-4 rounded-xl flex items-center justify-center font-bold transition-all ${
                        copied ? "bg-green-100 text-green-700 border border-green-200" : "bg-brand-green text-brand-white hover:bg-emerald-900 shadow-md hover:shadow-lg"
                      }`}
                    >
                      {copied ? <><CheckCircle2 className="w-5 h-5 mr-2" /> Copiado!</> : <><Copy className="w-5 h-5 mr-2" /> Copiar IBAN</>}
                    </button>
                  </div>
                  <p className="text-sm text-gray-500">Titular: Igreja Árvore de Jesus</p>
                </div>
              )}

              {activeTab === "internacional" && (
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Remessas / Transferências Internacionais</h3>
                  <div className="bg-gray-50 border-2 border-blue-200 border-dashed rounded-2xl p-6 mb-6">
                    <p className="text-sm text-gray-500 mb-2 font-medium uppercase tracking-wider">IBAN Internacional</p>
                    <div className="text-xl md:text-2xl font-mono font-bold text-blue-700 mb-4 break-all">
                      {ibaInternacional}
                    </div>
                    <p className="text-xs text-gray-400 mb-4">SWIFT/BIC: AJESUSAOXXX</p>
                    <button
                      onClick={() => handleCopy(ibaInternacional)}
                      className={`w-full py-3 px-4 rounded-xl flex items-center justify-center font-bold transition-all ${
                        copied ? "bg-green-100 text-green-700 border border-green-200" : "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg"
                      }`}
                    >
                      {copied ? <><CheckCircle2 className="w-5 h-5 mr-2" /> Copiado!</> : <><Copy className="w-5 h-5 mr-2" /> Copiar IBAN</>}
                    </button>
                  </div>
                </div>
              )}

              {activeTab === "digital" && (
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Pagamentos Digitais</h3>
                  <div className="grid grid-cols-1 gap-4">
                    <a href="#" className="flex items-center justify-center w-full py-4 border border-gray-200 rounded-xl hover:border-brand-gold hover:bg-brand-gold/5 transition-all group">
                      <Smartphone className="w-6 h-6 mr-3 text-gray-400 group-hover:text-brand-gold" />
                      <span className="font-bold text-gray-700 group-hover:text-brand-green">Multicaixa Express (Referência)</span>
                    </a>
                    <a href="#" className="flex items-center justify-center w-full py-4 border border-gray-200 rounded-xl hover:border-brand-gold hover:bg-brand-gold/5 transition-all group">
                      <Globe className="w-6 h-6 mr-3 text-gray-400 group-hover:text-brand-gold" />
                      <span className="font-bold text-gray-700 group-hover:text-brand-green">PayPal / Cartão de Crédito</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
            
          </motion.div>

        </div>
      </div>
    </section>
  );
}
