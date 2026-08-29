import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_V5rFe8Dl.mjs';
import 'piccolore';
import { b as openBookingModal, $ as $$Layout } from '../chunks/Layout_DS5UQ-FI.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { ArrowRight, Camera } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
export { renderers } from '../renderers.mjs';

const BookingTriggerButton = ({
  shootType = "flowers",
  className = "",
  id,
  children
}) => {
  return /* @__PURE__ */ jsx(
    "button",
    {
      id,
      type: "button",
      onClick: () => openBookingModal(shootType),
      className,
      children: children || /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("span", { children: "Записатися" }),
        /* @__PURE__ */ jsx(ArrowRight, { strokeWidth: 1.5, className: "w-3.5 h-3.5" })
      ] })
    }
  );
};

const FloatingBookingButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const heroBtn = document.getElementById("hero-booking-btn");
    if (heroBtn && "IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(!entry.isIntersecting);
        },
        { threshold: 0.1 }
      );
      observer.observe(heroBtn);
      return () => observer.disconnect();
    } else {
      const handleScroll = () => {
        setIsVisible(window.scrollY > 400);
      };
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);
  return /* @__PURE__ */ jsx(AnimatePresence, { children: isVisible && /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 24, scale: 0.95 },
      animate: { opacity: 1, y: 0, scale: 1 },
      exit: { opacity: 0, y: 24, scale: 0.95 },
      transition: { duration: 0.3, ease: "easeOut" },
      className: "fixed bottom-6 right-6 z-40",
      children: /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => openBookingModal("flowers"),
          className: "group flex items-center gap-3 px-6 py-3.5 bg-[#1A1A1A] text-white text-xs uppercase tracking-[0.2em] font-medium shadow-2xl hover:bg-black transition-all hover:scale-105 active:scale-95",
          "aria-label": "Записатися в простір",
          children: [
            /* @__PURE__ */ jsx(Camera, { strokeWidth: 1.5, className: "w-4 h-4 text-white/80 group-hover:text-white transition-colors" }),
            /* @__PURE__ */ jsx("span", { children: "Записатися" })
          ]
        }
      )
    }
  ) });
};

const $$Prostir = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u041F\u0440\u043E\u0441\u0442\u0456\u0440 \u2014 \u0424\u043E\u0442\u043E\u0441\u0442\u0443\u0434\u0456\u044F \u043F\u0440\u0438 \u043C\u0430\u0439\u0441\u0442\u0435\u0440\u043D\u0456 | Floral Studio \u041E\u0434\u0435\u0441\u0430", "description": "\u0424\u043E\u0442\u043E\u0441\u0442\u0443\u0434\u0456\u044F \u0437 \u043D\u0430\u0442\u0443\u0440\u0430\u043B\u044C\u043D\u0438\u043C \u0441\u0432\u0456\u0442\u043B\u043E\u043C \u043F\u0440\u0438 \u043A\u0432\u0456\u0442\u043A\u043E\u0432\u0456\u0439 \u043C\u0430\u0439\u0441\u0442\u0435\u0440\u043D\u0456 \u0432 \u041E\u0434\u0435\u0441\u0456. \u0424\u043E\u0442\u043E\u0441\u0435\u0441\u0456\u0457 \u0437 \u043A\u0432\u0456\u0442\u0430\u043C\u0438 \u0442\u0430 \u0431\u0435\u0437, \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u043D\u0430 \u0437\u0439\u043E\u043C\u043A\u0430 \u0434\u043B\u044F \u0431\u0440\u0435\u043D\u0434\u0456\u0432. \u0417\u0430\u043F\u0438\u0448\u0456\u0442\u044C\u0441\u044F \u043E\u043D\u043B\u0430\u0439\u043D." }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative w-full h-[70dvh] md:h-[80dvh] overflow-hidden"> <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80" alt="Простір — фотостудія Floral Studio" class="w-full h-full object-cover object-center"> <div class="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-[#FAF7F2]/30 to-transparent"></div> <div class="absolute bottom-0 left-0 right-0 px-6 pb-12 md:pb-20 lg:px-8"> <div class="max-w-7xl mx-auto"> <p class="text-[10px] uppercase tracking-[0.3em] font-medium text-[#1A1A1A]/60 mb-4">
Floral Studio • Photo Space
</p> <h1 class="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-[#1A1A1A] tracking-tight leading-[1.05] mb-6">
Простір
</h1> <p class="text-base md:text-lg text-[#1A1A1A]/80 font-light leading-relaxed max-w-lg mb-8">
Фотостудія з натуральним світлом при квітковій майстерні. Для портретів, контенту та особливих моментів.
</p> <!-- Hero CTA Button with id for scroll observer --> ${renderComponent($$result2, "BookingTriggerButton", BookingTriggerButton, { "client:load": true, "id": "hero-booking-btn", "className": "inline-flex items-center gap-3 px-10 py-5 bg-[#1A1A1A] text-white text-xs uppercase tracking-[0.2em] font-medium transition-all hover:bg-black hover:scale-105 active:scale-95", "client:component-hydration": "load", "client:component-path": "C:/Users/Leonid/Desktop/Floristic/src/components/BookingTriggerButton", "client:component-export": "BookingTriggerButton" }, { "default": ($$result3) => renderTemplate` <span>Записатися</span> ` })} </div> </div> </section>  <section class="py-16 sm:py-24 bg-[#FAF7F2]"> <div class="max-w-7xl mx-auto px-6 lg:px-8"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"> <div class="space-y-6"> <h2 class="font-serif text-3xl sm:text-4xl text-[#1A1A1A] font-normal leading-tight">
Світло, квіти та натхнення
</h2> <div class="space-y-4 text-sm text-[#1A1A1A]/70 font-light leading-relaxed"> <p>
Наш простір — це 60 м² натурального світла, високих стель та чистої естетики. Студія розташована прямо при квітковій майстерні, тому у вас є унікальна можливість фотографуватися серед свіжих авторських композицій.
</p> <p>
Великі панорамні вікна, мінімалістичний інтер'єр у теплих тонах та продумане зонування створюють ідеальні умови для портретної, сімейної або предметної зйомки.
</p> </div> <div class="border-y border-[#1A1A1A]/10 py-6 my-8 space-y-3 text-sm font-light text-[#1A1A1A]/70"> <div class="flex justify-between"> <span>Площа</span> <span class="text-[#1A1A1A]">60 м²</span> </div> <div class="flex justify-between"> <span>Висота стель</span> <span class="text-[#1A1A1A]">3.2 м</span> </div> <div class="flex justify-between"> <span>Світло</span> <span class="text-[#1A1A1A]">Натуральне + LED-панелі</span> </div> <div class="flex justify-between"> <span>Години роботи</span> <span class="text-[#1A1A1A]">09:00 — 19:00</span> </div> </div> </div> <div> <img src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80" alt="Інтер'єр фотостудії" class="w-full aspect-[4/5] object-cover"> </div> </div> </div> </section>  <section class="py-16 sm:py-24 bg-white"> <div class="max-w-7xl mx-auto px-6 lg:px-8"> <div class="text-center max-w-2xl mx-auto mb-16"> <h2 class="font-serif text-3xl sm:text-4xl text-[#1A1A1A] font-normal mb-4">
Формати зйомки
</h2> <p class="text-sm font-light text-[#1A1A1A]/60">
Оберіть формат або зв'яжіться з нами для індивідуального сет-дизайну
</p> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"> <!-- Card 1 --> <div class="group flex flex-col justify-between"> <div> <div class="overflow-hidden mb-6"> <img src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=800&q=80" alt="Фотосесія з квітами" class="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"> </div> <h3 class="font-serif text-2xl text-[#1A1A1A] mb-2">З квітами</h3> <p class="text-sm font-light text-[#1A1A1A]/70 mb-4 leading-relaxed">
Фотосесія з авторською флористичною декорацією. Ми підберемо квіти під вашу кольорову гаму та настрій.
</p> <div class="text-xs uppercase tracking-widest text-[#1A1A1A]/50 mb-6">від 2 500 ₴ / 1 год</div> </div> ${renderComponent($$result2, "BookingTriggerButton", BookingTriggerButton, { "client:visible": true, "shootType": "flowers", "className": "w-full py-3.5 border border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-colors text-xs uppercase tracking-widest font-medium text-center", "client:component-hydration": "visible", "client:component-path": "C:/Users/Leonid/Desktop/Floristic/src/components/BookingTriggerButton", "client:component-export": "BookingTriggerButton" }, { "default": ($$result3) => renderTemplate`
Обрати цей формат
` })} </div> <!-- Card 2 --> <div class="group flex flex-col justify-between"> <div> <div class="overflow-hidden mb-6"> <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80" alt="Зйомка у чистому просторі" class="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"> </div> <h3 class="font-serif text-2xl text-[#1A1A1A] mb-2">Без квітів</h3> <p class="text-sm font-light text-[#1A1A1A]/70 mb-4 leading-relaxed">
Чистий мінімалістичний простір із натуральним світлом. Для портретів, сімейних та корпоративних зйомок.
</p> <div class="text-xs uppercase tracking-widest text-[#1A1A1A]/50 mb-6">від 1 200 ₴ / 1 год</div> </div> ${renderComponent($$result2, "BookingTriggerButton", BookingTriggerButton, { "client:visible": true, "shootType": "no_flowers", "className": "w-full py-3.5 border border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-colors text-xs uppercase tracking-widest font-medium text-center", "client:component-hydration": "visible", "client:component-path": "C:/Users/Leonid/Desktop/Floristic/src/components/BookingTriggerButton", "client:component-export": "BookingTriggerButton" }, { "default": ($$result3) => renderTemplate`
Обрати цей формат
` })} </div> <!-- Card 3 --> <div class="group flex flex-col justify-between"> <div> <div class="overflow-hidden mb-6"> <img src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=800&q=80" alt="Контент-зйомка для брендів" class="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"> </div> <h3 class="font-serif text-2xl text-[#1A1A1A] mb-2">Контент-зйомка</h3> <p class="text-sm font-light text-[#1A1A1A]/70 mb-4 leading-relaxed">
Предметна та флет-лей зйомка для блогерів, брендів та онлайн-магазинів. Ідеальний фон і реквізит.
</p> <div class="text-xs uppercase tracking-widest text-[#1A1A1A]/50 mb-6">від 800 ₴ / 30 хв</div> </div> ${renderComponent($$result2, "BookingTriggerButton", BookingTriggerButton, { "client:visible": true, "shootType": "content", "className": "w-full py-3.5 border border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-colors text-xs uppercase tracking-widest font-medium text-center", "client:component-hydration": "visible", "client:component-path": "C:/Users/Leonid/Desktop/Floristic/src/components/BookingTriggerButton", "client:component-export": "BookingTriggerButton" }, { "default": ($$result3) => renderTemplate`
Обрати цей формат
` })} </div> </div> </div> </section>  <section class="py-16 sm:py-24 bg-[#FAF7F2]"> <div class="max-w-7xl mx-auto px-6 lg:px-8"> <h2 class="font-serif text-3xl sm:text-4xl text-[#1A1A1A] font-normal text-center mb-16">
Атмосфера простору
</h2> <div class="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4"> <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80" alt="Студія 1" class="w-full aspect-square object-cover"> <img src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80" alt="Студія 2" class="w-full aspect-square object-cover"> <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80" alt="Студія 3" class="w-full aspect-square object-cover"> <img src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=600&q=80" alt="Студія 4" class="w-full aspect-square object-cover"> <img src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=600&q=80" alt="Студія 5" class="w-full aspect-square object-cover"> <img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=600&q=80" alt="Студія 6" class="w-full aspect-square object-cover"> </div> </div> </section>  <section class="py-20 sm:py-28 bg-white text-center"> <div class="max-w-3xl mx-auto px-6 lg:px-8 space-y-6"> <p class="text-[10px] uppercase tracking-[0.3em] font-medium text-[#1A1A1A]/50">
Бронювання часу
</p> <h2 class="font-serif text-4xl sm:text-5xl text-[#1A1A1A] font-normal leading-tight">
Готові створити красу разом?
</h2> <p class="text-sm font-light text-[#1A1A1A]/70 max-w-lg mx-auto leading-relaxed mb-8">
Оберіть зручну дату та час онлайн — наш менеджер зв'яжеться з вами для узгодження всіх деталей та побажань.
</p> <div> ${renderComponent($$result2, "BookingTriggerButton", BookingTriggerButton, { "client:visible": true, "className": "inline-flex items-center gap-3 px-10 py-5 bg-[#1A1A1A] text-white text-xs uppercase tracking-[0.2em] font-medium transition-all hover:bg-black hover:scale-105 active:scale-95", "client:component-hydration": "visible", "client:component-path": "C:/Users/Leonid/Desktop/Floristic/src/components/BookingTriggerButton", "client:component-export": "BookingTriggerButton" }, { "default": ($$result3) => renderTemplate` <span>Забронювати студію</span> ` })} </div> </div> </section>  ${renderComponent($$result2, "FloatingBookingButton", FloatingBookingButton, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Leonid/Desktop/Floristic/src/components/FloatingBookingButton", "client:component-export": "FloatingBookingButton" })} ` })}`;
}, "C:/Users/Leonid/Desktop/Floristic/src/pages/prostir.astro", void 0);

const $$file = "C:/Users/Leonid/Desktop/Floristic/src/pages/prostir.astro";
const $$url = "/prostir";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Prostir,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
