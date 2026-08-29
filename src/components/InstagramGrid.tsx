import React from 'react';
import { motion } from 'framer-motion';

export const InstagramGrid: React.FC = () => {
  const posts = [
    'https://images.unsplash.com/photo-1787478183469-58b5cd041ddd?q=80&w=816&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1787478183473-642d987ecbd1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1787478183492-e4b0dbd5e997?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1787469240874-301e3c6e25eb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Nnx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1787477756692-707848ce1e99?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1787468542287-b9b1e651898a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OXx8fGVufDB8fHx8fA%3D%3D',
  ];

  return (
    <section className="py-16 sm:py-24 border-t border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <p className="text-[10px] sm:text-xs uppercase tracking-widest font-medium text-[#1A1A1A]/50 mb-4">
            Атмосфера
          </p>
          <h2 className="font-normal text-4xl sm:text-5xl text-[#1A1A1A] mb-4">
            Слідкуйте за нами
          </h2>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-widest font-medium text-[#1A1A1A]/50 hover:text-[#1A1A1A] transition-colors"
          >
            @floralstudio.odesa
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {posts.map((image, idx) => (
            <motion.a
              key={idx}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group relative aspect-square overflow-hidden block"
            >
              <img
                src={image}
                alt="Instagram post"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </motion.a>
          ))}
        </div>
        
      </div>
    </section>
  );
};
