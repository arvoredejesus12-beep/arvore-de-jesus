import { motion } from "motion/react";
import { Image as ImageIcon, PlayCircle } from "lucide-react";

export function Gallery() {
  const items = [
    { type: "image", src: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&auto=format&fit=crop", title: "Culto Jovem" },
    { type: "video", src: "https://images.unsplash.com/photo-1445445290350-18a3b86e0b5b?w=800&auto=format&fit=crop", title: "Cantata de Natal" },
    { type: "image", src: "https://images.unsplash.com/photo-1510254580392-7592cf7d8531?w=800&auto=format&fit=crop", title: "Batismos nas Águas" },
    { type: "image", src: "https://images.unsplash.com/photo-1525039239850-7cb52c422830?w=800&auto=format&fit=crop", title: "Ação Social" },
    { type: "video", src: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=800&auto=format&fit=crop", title: "Palavra do Pastor" },
    { type: "image", src: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=800&auto=format&fit=crop", title: "Congresso de Mulheres" },
  ];

  return (
    <section className="py-24 bg-white" id="galeria">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-green mb-4">Mural Espiritual & Galeria</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Relembrando momentos onde a glória de Deus desceu sobre nós.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group rounded-2xl overflow-hidden aspect-video bg-gray-100 cursor-pointer"
            >
              <img src={item.src} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center">
                {item.type === "video" ? <PlayCircle className="w-12 h-12 text-white mb-2" /> : <ImageIcon className="w-12 h-12 text-white mb-2" />}
                <p className="text-white font-bold text-lg px-4 text-center">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
           <button className="bg-transparent border-2 border-brand-green text-brand-green font-bold py-3 px-8 rounded-full hover:bg-brand-green hover:text-white transition-colors">
              Ver Toda A Galeria
           </button>
        </div>
      </div>
    </section>
  );
}
