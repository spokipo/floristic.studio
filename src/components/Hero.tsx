import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[100dvh] overflow-hidden flex flex-col md:flex-row">
      
      {/* Mobile/Tablet Background Image Layer (Edge-to-Edge) */}
      <div className="absolute inset-0 md:relative md:w-1/2 md:h-full md:order-2 h-3/5 w-full">
        <img
          src="https://images.unsplash.com/photo-1787478183469-58b5cd041ddd?q=80&w=816&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Floral Studio Odesa"
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle gradient overlay for text readability on mobile */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-[#FAF7F2]/40 to-transparent md:hidden" />
      </div>

      {/* Typography & CTA Layer */}
      <div className="relative z-10 h-full w-full md:w-1/2 flex flex-col justify-end md:justify-center px-6 pb-16 md:px-12 lg:px-24 md:pb-0 pt-32 md:pt-0 md:order-1 flex-1">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl mx-auto md:mx-0 w-full text-center md:text-left flex flex-col items-center md:items-start"
        >
          <div className="mb-4">
            <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-[#1A1A1A]/60 hidden md:block">
              Odesa • Floral Atelier
            </span>
          </div>
          
          <h1 className="font-normal text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] text-[#1A1A1A] tracking-tight leading-[1.05] mb-6 md:mb-8">
            Мистецтво квітів <br className="hidden md:block" /> 
            <span className="font-light">в Одесі</span>
          </h1>

          <p className="text-base md:text-lg text-[#1A1A1A]/80 font-light leading-relaxed tracking-wide mb-10 max-w-md">
            Вишукані авторські букети, натхненні естетикою французького саду. Бездоганний смак та любов до кожної деталі.
          </p>

          <a
            href="/catalog"
            className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#1A1A1A] text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors hover:bg-black w-full sm:w-auto"
          >
            <span>Каталог</span>
            <ArrowRight strokeWidth={1.5} className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
        
      </div>
    </section>
  );
};
