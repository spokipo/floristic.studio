import { e as createComponent, k as renderComponent, r as renderTemplate } from '../chunks/astro/server_V5rFe8Dl.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_DS5UQ-FI.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Flower2, Palette, Truck, Mail } from 'lucide-react';
import { C as CatalogSection } from '../chunks/CatalogSection_DAubSVWV.mjs';
export { renderers } from '../renderers.mjs';

const Hero = () => {
  return /* @__PURE__ */ jsxs("section", { className: "relative w-full h-[100dvh] bg-[#FAF7F2] overflow-hidden flex flex-col md:flex-row", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 md:relative md:w-1/2 md:h-full md:order-2 h-3/5 w-full", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=1600&q=80",
          alt: "Floral Studio Odesa",
          className: "w-full h-full object-cover object-center"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-[#FAF7F2]/40 to-transparent md:hidden" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 h-full w-full md:w-1/2 flex flex-col justify-end md:justify-center px-6 pb-16 md:px-12 lg:px-24 md:pb-0 pt-32 md:pt-0 md:order-1 flex-1", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: "easeOut" },
        className: "max-w-xl mx-auto md:mx-0 w-full",
        children: [
          /* @__PURE__ */ jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsx("span", { className: "text-[10px] uppercase tracking-[0.3em] font-medium text-[#1A1A1A]/60 hidden md:block", children: "Odesa • Floral Atelier" }) }),
          /* @__PURE__ */ jsxs("h1", { className: "font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-normal text-[#1A1A1A] tracking-tight leading-[1.05] mb-6 md:mb-8", children: [
            "Мистецтво квітів ",
            /* @__PURE__ */ jsx("br", { className: "hidden md:block" }),
            /* @__PURE__ */ jsx("span", { className: "italic font-light", children: "в Одесі" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-base md:text-lg text-[#1A1A1A]/80 font-light leading-relaxed tracking-wide mb-10 max-w-md", children: "Вишукані авторські букети, натхненні естетикою французького саду. Бездоганний смак та любов до кожної деталі." }),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "/catalog",
              className: "group inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#1A1A1A] text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors hover:bg-black w-full sm:w-auto",
              children: [
                /* @__PURE__ */ jsx("span", { children: "Каталог" }),
                /* @__PURE__ */ jsx(ArrowRight, { strokeWidth: 1.5, className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })
              ]
            }
          )
        ]
      }
    ) })
  ] });
};

const WorkshopFeatures = () => {
  const scrollRef = useRef(null);
  useEffect(() => {
    const interval = setInterval(() => {
      const el = scrollRef.current;
      if (!el) return;
      if (window.innerWidth < 640) {
        const itemWidth = el.clientWidth;
        const maxScroll = el.scrollWidth - el.clientWidth;
        if (el.scrollLeft + itemWidth >= maxScroll - 10) {
          el.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          el.scrollBy({ left: itemWidth, behavior: "smooth" });
        }
      }
    }, 4e3);
    return () => clearInterval(interval);
  }, []);
  const features = [
    {
      icon: Flower2,
      title: "Сезонні квіти",
      description: "Свіжі ранкові поставки з голландських аукціонів. Природні вигини стебел, жива текстура та жодного мертвого пластику."
    },
    {
      icon: Palette,
      title: "Авторське збирання",
      description: "Кожен букет — неповторна історія, створена флористами з художнім баченням та любовʼю до французької пейзажної естетики."
    },
    {
      icon: Truck,
      title: "Доставка по Одесі",
      description: "Дбайливі кур'єри в термобоксах та аквапаках. Доставляємо в усі райони міста точно в зазначений час."
    },
    {
      icon: Mail,
      title: "Каліграфічна листівка",
      description: "Безкоштовна авторська листівка до кожного замовлення. Ми вручну запишемо ваші найтепліші слова для одержувача."
    }
  ];
  return /* @__PURE__ */ jsxs("section", { className: "py-20 sm:py-32 bg-white", children: [
    /* @__PURE__ */ jsx("style", { children: `.hide-scroll::-webkit-scrollbar { display: none; }` }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-16 md:w-1/2", children: /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl sm:text-4xl text-[#1A1A1A] font-normal leading-tight", children: "Філософія майстерні" }) }),
      /* @__PURE__ */ jsx(
        "div",
        {
          ref: scrollRef,
          className: "hide-scroll flex overflow-x-auto snap-x snap-mandatory gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-12 lg:gap-16 pb-4 sm:pb-0",
          style: { scrollbarWidth: "none", msOverflowStyle: "none" },
          children: features.map((item, index) => {
            const Icon = item.icon;
            return /* @__PURE__ */ jsxs(
              motion.div,
              {
                className: "w-full shrink-0 snap-center sm:w-auto sm:shrink sm:snap-align-none",
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.7, delay: index * 0.1, ease: "easeOut" },
                children: [
                  /* @__PURE__ */ jsx("div", { className: "mb-6 text-[#1A1A1A]", children: /* @__PURE__ */ jsx(Icon, { strokeWidth: 1, className: "w-8 h-8" }) }),
                  /* @__PURE__ */ jsx("h3", { className: "text-xs uppercase tracking-widest font-semibold text-[#1A1A1A] mb-4", children: item.title }),
                  /* @__PURE__ */ jsx("div", { className: "w-8 h-px bg-[#1A1A1A]/20 mb-6" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-[#1A1A1A]/70 leading-relaxed font-light", children: item.description })
                ]
              },
              index
            );
          })
        }
      )
    ] })
  ] });
};

const FloristConsultation = () => {
  return /* @__PURE__ */ jsx("section", { className: "py-24 sm:py-32 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto px-6 text-center", children: [
    /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl sm:text-4xl text-[#1A1A1A] font-normal leading-tight mb-6", children: "Особливий запит" }),
    /* @__PURE__ */ jsx("p", { className: "text-sm sm:text-base text-[#1A1A1A]/70 font-light leading-relaxed mb-12 max-w-xl mx-auto", children: "Наш шеф-флорист збере композицію за вашим референсом, допоможе підібрати улюблені квіти отримувача та надішле фото процесу." }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-6", children: [
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://t.me/floral_studio_odesa",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "px-10 py-4 bg-[#1A1A1A] text-white text-xs uppercase tracking-widest font-medium transition-colors hover:bg-black w-full sm:w-auto",
          children: "Написати в Telegram"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "tel:+380671234567",
          className: "px-10 py-4 bg-transparent text-[#1A1A1A] text-xs uppercase tracking-widest font-medium transition-colors border border-[#1A1A1A] hover:bg-gray-50 w-full sm:w-auto",
          children: "Зателефонувати"
        }
      )
    ] })
  ] }) });
};

const InstagramGrid = () => {
  const posts = [
    "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1587556930799-8dca6aef3dc5?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&w=600&q=80"
  ];
  return /* @__PURE__ */ jsx("section", { className: "py-24 sm:py-32 bg-white border-t border-[#1A1A1A]/5", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-between gap-6 mb-12", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl sm:text-4xl text-[#1A1A1A] font-normal mb-2", children: "Слідкуйте за нами" }),
        /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-widest text-[#1A1A1A]/50", children: "@floralstudio.odesa" })
      ] }),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://instagram.com",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "text-xs uppercase tracking-widest font-semibold border-b border-[#1A1A1A] pb-1 hover:text-[#1A1A1A]/70 hover:border-[#1A1A1A]/70 transition-colors",
          children: "Instagram"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2", children: posts.map((image, idx) => /* @__PURE__ */ jsx(
      motion.a,
      {
        href: "https://instagram.com",
        target: "_blank",
        rel: "noopener noreferrer",
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true },
        transition: { duration: 0.8, delay: idx * 0.1 },
        className: "group relative aspect-square overflow-hidden block",
        children: /* @__PURE__ */ jsx(
          "img",
          {
            src: image,
            alt: "Instagram post",
            className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          }
        )
      },
      idx
    )) })
  ] }) });
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Floral Studio \u041E\u0434\u0435\u0441\u0430 \u2014 \u0410\u0432\u0442\u043E\u0440\u0441\u044C\u043A\u0430 \u0444\u043B\u043E\u0440\u0438\u0441\u0442\u0438\u043A\u0430 \u0443 \u0441\u0442\u0438\u043B\u0456 \u0444\u0440\u0430\u043D\u0446\u0443\u0437\u044C\u043A\u043E\u0433\u043E \u0441\u0430\u0434\u0443", "description": "\u0421\u0442\u0438\u043B\u044C\u043D\u0438\u0439 \u043C\u0456\u043D\u0456\u043C\u0430\u043B\u0456\u0441\u0442\u0438\u0447\u043D\u0438\u0439 \u0456\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u043C\u0430\u0433\u0430\u0437\u0438\u043D \u043A\u0432\u0456\u0442\u0456\u0432 \u0432 \u041E\u0434\u0435\u0441\u0456. \u0410\u0432\u0442\u043E\u0440\u0441\u044C\u043A\u0456 \u0431\u0443\u043A\u0435\u0442\u0438, \u043F\u0456\u0432\u043E\u043D\u0456\u0457, \u0441\u0430\u0434\u043E\u0432\u0456 \u0442\u0440\u043E\u044F\u043D\u0434\u0438, \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0432\u0456\u0434 90 \u0445\u0432, \u0431\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u0430 \u0444\u0456\u0440\u043C\u043E\u0432\u0430 \u043B\u0438\u0441\u0442\u0456\u0432\u043A\u0430." }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", Hero, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Leonid/Desktop/Floristic/src/components/Hero", "client:component-export": "Hero" })}  ${renderComponent($$result2, "WorkshopFeatures", WorkshopFeatures, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Leonid/Desktop/Floristic/src/components/WorkshopFeatures", "client:component-export": "WorkshopFeatures" })}  ${renderComponent($$result2, "CatalogSection", CatalogSection, { "client:load": true, "limit": 8, "client:component-hydration": "load", "client:component-path": "C:/Users/Leonid/Desktop/Floristic/src/components/CatalogSection", "client:component-export": "CatalogSection" })}  ${renderComponent($$result2, "FloristConsultation", FloristConsultation, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Leonid/Desktop/Floristic/src/components/FloristConsultation", "client:component-export": "FloristConsultation" })}  ${renderComponent($$result2, "InstagramGrid", InstagramGrid, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Leonid/Desktop/Floristic/src/components/InstagramGrid", "client:component-export": "InstagramGrid" })} ` })}`;
}, "C:/Users/Leonid/Desktop/Floristic/src/pages/index.astro", void 0);

const $$file = "C:/Users/Leonid/Desktop/Floristic/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
