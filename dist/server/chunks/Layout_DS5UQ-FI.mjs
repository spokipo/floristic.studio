import { e as createComponent, g as addAttribute, l as renderScript, r as renderTemplate, h as createAstro, m as maybeRenderHead, n as renderTransition, k as renderComponent, o as renderHead, p as renderSlot } from './astro/server_V5rFe8Dl.mjs';
import 'piccolore';
/* empty css                         */
import 'clsx';
import { Phone, Send, Instagram, MapPin, Clock, X, Trash2, Minus, Plus, ShoppingBag, ChevronDown, Check, ArrowRight, Flower2, Camera, Package } from 'lucide-react';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import React, { useState, useRef, useEffect } from 'react';
import { useStore } from '@nanostores/react';
import { atom, computed } from 'nanostores';
import { AnimatePresence, motion } from 'framer-motion';

const $$Astro$1 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/Leonid/Desktop/Floristic/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Leonid/Desktop/Floristic/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const navLinks = [
    { href: "/catalog", label: "\u041A\u0430\u0442\u0430\u043B\u043E\u0433" },
    { href: "/prostir", label: "\u041F\u0440\u043E\u0441\u0442\u0456\u0440" },
    { href: "/about", label: "\u041F\u0440\u043E \u043D\u0430\u0441" },
    { href: "/delivery", label: "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430" }
  ];
  return renderTemplate`${maybeRenderHead()}<header id="site-header" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#FAF7F2] py-6" data-astro-transition-persist="header"${addAttribute(renderTransition($$result, "l7r54iwe", "", "site-header"), "data-astro-transition-scope")}> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between relative z-50"> <!-- Mobile Menu Toggle --> <div class="flex lg:hidden w-1/3"> <button id="mobile-menu-toggle" class="text-[#1A1A1A] p-2 -ml-2 hover:opacity-70 transition-opacity" aria-label="Меню"> <svg id="menu-icon" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"></path></svg> <svg id="close-icon" class="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"></path></svg> </button> </div> <!-- Desktop Navigation --> <nav class="hidden lg:flex items-center gap-8 w-1/3 relative" id="desktop-nav"> ${navLinks.map((link) => {
    return renderTemplate`<a${addAttribute(link.href, "href")} class="nav-link relative text-[11px] uppercase tracking-widest transition-colors pb-1 text-[#1A1A1A]/60 hover:text-[#1A1A1A]"${addAttribute(link.href, "data-href")}> ${link.label} </a>`;
  })} <!-- Magic Underline --> <div id="magic-underline" class="absolute bottom-0 h-[1px] bg-[#1A1A1A] transition-all duration-300 ease-out opacity-0"></div> </nav> <!-- Center: Brand Logo --> <div class="w-1/3 flex justify-center"> <a href="/" id="brand-logo" class="font-normal text-2xl lg:text-3xl text-[#1A1A1A] tracking-wide shrink-0">
Floral Studio
</a> </div> <!-- Right Actions --> <div class="w-1/3 flex justify-end items-center gap-4 sm:gap-6"> <a href="https://t.me/floral_studio_odesa" target="_blank" rel="noopener noreferrer" class="hidden sm:block text-[11px] uppercase tracking-widest text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-colors">
Зв'язок
</a> <button id="cart-toggle" class="text-[#1A1A1A] flex items-center justify-center hover:opacity-70 transition-opacity p-2 -mr-2" aria-label="Кошик"> <div class="relative"> <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg> <span id="cart-badge" class="hidden text-[10px] font-medium bg-[#1A1A1A] text-white w-4 h-4 rounded-full flex items-center justify-center absolute -top-1 -right-2 border border-[#FAF7F2]">
0
</span> </div> </button> </div> </div> <!-- Mobile Fullscreen Menu Overlay --> <div id="mobile-menu" class="fixed inset-0 bg-[#FAF7F2] z-40 flex-col px-6 pt-24 pb-12 lg:hidden overflow-y-auto hidden opacity-0 transition-opacity duration-300"> <nav class="flex flex-col gap-8 items-center mt-12 relative" id="mobile-nav"> ${navLinks.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="mobile-nav-link font-light text-3xl sm:text-4xl tracking-wide transition-colors text-[#1A1A1A]/60 hover:text-[#1A1A1A]"${addAttribute(link.href, "data-href")}> ${link.label} </a>`)} <!-- Mobile Magic Underline --> <div id="mobile-magic-underline" class="absolute h-[1.5px] bg-[#1A1A1A] transition-all duration-300 ease-out opacity-0 pointer-events-none"></div> <div class="h-px bg-[#1A1A1A]/10 w-24 my-8"></div> <a href="https://t.me/floral_studio_odesa" target="_blank" rel="noopener noreferrer" class="text-xs uppercase tracking-[0.2em] font-medium text-[#1A1A1A] hover:opacity-70 transition-opacity">
Telegram консультація
</a> <a href="tel:+380671234567" class="text-xs uppercase tracking-[0.2em] font-medium text-[#1A1A1A] hover:opacity-70 transition-opacity">
+38 (067) 123-45-67
</a> </nav> </div> </header> ${renderScript($$result, "C:/Users/Leonid/Desktop/Floristic/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Leonid/Desktop/Floristic/src/components/Header.astro", "self");

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-white pt-24 pb-12 text-[#1A1A1A]"> <div class="max-w-7xl mx-auto px-6 lg:px-8"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">  <div class="space-y-4"> <a href="/" class="inline-block"> <span class="font-serif text-3xl font-normal tracking-wide">
Floral Studio
</span> <p class="text-[10px] tracking-[0.25em] uppercase text-[#1A1A1A]/50 mt-1">
Odesa • Floral Atelier
</p> </a> </div>  <div class="space-y-6"> <h4 class="text-xs uppercase tracking-widest font-semibold">
Меню
</h4> <ul class="space-y-3 text-sm font-light text-[#1A1A1A]/70"> <li> <a href="/catalog" class="hover:text-[#1A1A1A] transition-colors">Каталог</a> </li> <li> <a href="/prostir" class="hover:text-[#1A1A1A] transition-colors">Простір</a> </li> <li> <a href="/about" class="hover:text-[#1A1A1A] transition-colors">Про нас</a> </li> <li> <a href="/delivery" class="hover:text-[#1A1A1A] transition-colors">Доставка та оплата</a> </li> </ul> </div>  <div class="space-y-6"> <h4 class="text-xs uppercase tracking-widest font-semibold">
Контакти
</h4> <ul class="space-y-4 text-sm font-light text-[#1A1A1A]/70"> <li> <a href="tel:+380671234567" class="hover:text-[#1A1A1A] transition-colors flex items-center gap-2"> ${renderComponent($$result, "Phone", Phone, { "stroke-width": "1.5", "class": "w-4 h-4" })} <span>+38 (067) 123-45-67</span> </a> </li> <li> <a href="https://t.me/floral_studio_odesa" target="_blank" class="hover:text-[#1A1A1A] transition-colors flex items-center gap-2"> ${renderComponent($$result, "Send", Send, { "stroke-width": "1.5", "class": "w-4 h-4" })} <span>Telegram</span> </a> </li> <li> <a href="https://instagram.com" target="_blank" class="hover:text-[#1A1A1A] transition-colors flex items-center gap-2"> ${renderComponent($$result, "Instagram", Instagram, { "stroke-width": "1.5", "class": "w-4 h-4" })} <span>Instagram</span> </a> </li> </ul> </div>  <div class="space-y-6"> <h4 class="text-xs uppercase tracking-widest font-semibold">
Майстерня
</h4> <ul class="space-y-4 text-sm font-light text-[#1A1A1A]/70"> <li class="flex items-start gap-2"> ${renderComponent($$result, "MapPin", MapPin, { "stroke-width": "1.5", "class": "w-4 h-4 mt-0.5 shrink-0" })} <span>м. Одеса, вул. Грецька, 25</span> </li> <li class="flex items-start gap-2"> ${renderComponent($$result, "Clock", Clock, { "stroke-width": "1.5", "class": "w-4 h-4 mt-0.5 shrink-0" })} <span>Щодня з 08:00 до 20:00</span> </li> </ul> </div> </div>  <div class="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] uppercase tracking-widest text-[#1A1A1A]/40 border-t border-[#1A1A1A]/10"> <p>© 2026 Floral Studio. Всі права захищено.</p> </div> </div> </footer>`;
}, "C:/Users/Leonid/Desktop/Floristic/src/components/Footer.astro", void 0);

const CART_STORAGE_KEY = "floral_studio_cart_v1";
function loadInitialCart() {
  if (typeof window === "undefined") return [];
  try {
    const saved = localStorage.getItem(CART_STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch (e) {
    console.error("Failed to load cart from localStorage", e);
    return [];
  }
}
const $cartItems = atom(loadInitialCart());
const $isCartOpen = atom(false);
const $quickViewBouquet = atom(null);
const $quickOrderBouquet = atom(null);
const $isBookingModalOpen = atom(false);
const $bookingShootType = atom("flowers");
const $toast = atom(null);
if (typeof window !== "undefined") {
  $cartItems.subscribe((items) => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.error("Failed to save cart to localStorage", e);
    }
  });
}
const $cartCount = computed(
  $cartItems,
  (items) => items.reduce((total, item) => total + item.quantity, 0)
);
const $cartTotal = computed(
  $cartItems,
  (items) => items.reduce((total, item) => total + item.price * item.quantity, 0)
);
function addToCart(bouquet, size = "M", quantity = 1) {
  const sizeOption = bouquet.sizes[size];
  const itemId = `${bouquet.id}-${size}`;
  const currentItems = $cartItems.get();
  const existingIndex = currentItems.findIndex((item) => item.id === itemId);
  if (existingIndex > -1) {
    const updated = [...currentItems];
    updated[existingIndex].quantity += quantity;
    $cartItems.set(updated);
  } else {
    const newItem = {
      id: itemId,
      bouquetId: bouquet.id,
      title: bouquet.title,
      size,
      sizeLabel: sizeOption.label,
      price: sizeOption.price,
      image: bouquet.image,
      quantity,
      composition: bouquet.composition
    };
    $cartItems.set([...currentItems, newItem]);
  }
  showToast("Додано до кошика", `${bouquet.title} (${sizeOption.label})`, "success");
}
function updateQuantity(itemId, delta) {
  const currentItems = $cartItems.get();
  const updated = currentItems.map((item) => {
    if (item.id === itemId) {
      const newQty = item.quantity + delta;
      return newQty > 0 ? { ...item, quantity: newQty } : null;
    }
    return item;
  }).filter(Boolean);
  $cartItems.set(updated);
}
function removeFromCart(itemId) {
  const currentItems = $cartItems.get();
  $cartItems.set(currentItems.filter((item) => item.id !== itemId));
}
function toggleCart(open) {
  {
    $isCartOpen.set(open);
  }
}
function openQuickView(bouquet) {
  $quickViewBouquet.set(bouquet);
}
function closeQuickView() {
  $quickViewBouquet.set(null);
}
function closeQuickOrder() {
  $quickOrderBouquet.set(null);
}
function openBookingModal(type = "flowers") {
  $bookingShootType.set(type);
  $isBookingModalOpen.set(true);
}
function closeBookingModal() {
  $isBookingModalOpen.set(false);
}
function showToast(title, message, type = "success") {
  const id = Math.random().toString(36).substring(2, 9);
  $toast.set({ id, title, message, type });
  setTimeout(() => {
    const current = $toast.get();
    if (current && current.id === id) {
      $toast.set(null);
    }
  }, 4e3);
}

const CartDrawer = () => {
  const isOpen = useStore($isCartOpen);
  const items = useStore($cartItems);
  const total = useStore($cartTotal);
  const count = useStore($cartCount);
  React.useEffect(() => {
    if (isOpen) {
      document.documentElement.classList.add("lock-scroll");
    } else {
      document.documentElement.classList.remove("lock-scroll");
    }
    return () => {
      document.documentElement.classList.remove("lock-scroll");
    };
  }, [isOpen]);
  return /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 z-50 overflow-hidden", children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: () => toggleCart(false),
        className: "fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "fixed inset-y-0 right-0 max-w-full flex", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { x: "100%" },
        animate: { x: 0 },
        exit: { x: "100%" },
        transition: { type: "spring", damping: 25, stiffness: 200 },
        className: "w-screen max-w-md bg-[#FAF7F2] flex flex-col justify-between",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "p-6 sm:p-8 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxs("h3", { className: "font-serif text-2xl font-normal text-[#1A1A1A]", children: [
              "Кошик (",
              count,
              ")"
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => toggleCart(false),
                className: "p-2 -mr-2 text-[#1A1A1A]/50 hover:text-[#1A1A1A] transition-colors",
                "aria-label": "Закрити",
                children: /* @__PURE__ */ jsx(X, { strokeWidth: 1.5, className: "w-6 h-6" })
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex-1 overflow-y-auto px-6 sm:px-8", children: items.length === 0 ? /* @__PURE__ */ jsxs("div", { className: "h-full flex flex-col justify-center text-center", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-serif text-xl text-[#1A1A1A] font-normal mb-6", children: "Кошик порожній" }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => {
                  toggleCart(false);
                  window.location.href = "/catalog";
                },
                className: "inline-block px-10 py-4 bg-[#1A1A1A] text-white text-xs uppercase tracking-widest font-medium transition-colors hover:bg-black",
                children: "Каталог"
              }
            )
          ] }) : /* @__PURE__ */ jsx("div", { className: "space-y-6", children: items.map((item) => /* @__PURE__ */ jsxs("div", { className: "flex gap-4 border-b border-[#1A1A1A]/10 pb-6", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: item.image,
                alt: item.title,
                className: "w-20 h-28 sm:w-24 sm:h-32 object-cover"
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col justify-between", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start", children: [
                  /* @__PURE__ */ jsx("h4", { className: "text-sm font-medium text-[#1A1A1A] leading-snug pr-4 line-clamp-2", children: item.title }),
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      onClick: () => removeFromCart(item.id),
                      className: "p-1 -mr-1 text-[#1A1A1A]/40 hover:text-[#1A1A1A]",
                      "aria-label": "Видалити",
                      children: /* @__PURE__ */ jsx(Trash2, { strokeWidth: 1.5, className: "w-4 h-4" })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "text-xs text-[#1A1A1A]/60 mt-1", children: [
                  "Розмір: ",
                  item.size
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "text-sm font-light text-[#1A1A1A] mt-1", children: [
                  item.price.toLocaleString("uk-UA"),
                  " ₴"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mt-4", children: [
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: () => updateQuantity(item.id, -1),
                    className: "text-[#1A1A1A] p-1 -ml-1",
                    children: /* @__PURE__ */ jsx(Minus, { strokeWidth: 1.5, className: "w-4 h-4" })
                  }
                ),
                /* @__PURE__ */ jsx("span", { className: "text-sm w-4 text-center", children: item.quantity }),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: () => updateQuantity(item.id, 1),
                    className: "text-[#1A1A1A] p-1 -mr-1",
                    children: /* @__PURE__ */ jsx(Plus, { strokeWidth: 1.5, className: "w-4 h-4" })
                  }
                )
              ] })
            ] })
          ] }, item.id)) }) }),
          items.length > 0 && /* @__PURE__ */ jsxs("div", { className: "p-6 sm:p-8 bg-[#FAF7F2] border-t border-[#1A1A1A]/10", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-lg font-serif text-[#1A1A1A] mb-6", children: [
              /* @__PURE__ */ jsx("span", { children: "Разом:" }),
              /* @__PURE__ */ jsxs("span", { children: [
                total.toLocaleString("uk-UA"),
                " ₴"
              ] })
            ] }),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "/order",
                onClick: () => toggleCart(false),
                className: "w-full py-4 bg-[#1A1A1A] text-white text-xs uppercase tracking-widest font-medium transition-colors hover:bg-black text-center block",
                children: "Оформити замовлення"
              }
            )
          ] })
        ]
      }
    ) })
  ] }) });
};

const ProductModal = () => {
  const bouquet = useStore($quickViewBouquet);
  const [selectedSize, setSelectedSize] = useState("M");
  React.useEffect(() => {
    if (bouquet) {
      document.documentElement.classList.add("lock-scroll");
    } else {
      document.documentElement.classList.remove("lock-scroll");
    }
    return () => {
      document.documentElement.classList.remove("lock-scroll");
    };
  }, [bouquet]);
  if (!bouquet) return null;
  const currentSizeOption = bouquet.sizes[selectedSize];
  const currentPrice = currentSizeOption ? currentSizeOption.price : bouquet.price;
  const handleAddToCart = () => {
    addToCart(bouquet, selectedSize, 1);
    closeQuickView();
  };
  return /* @__PURE__ */ jsx(AnimatePresence, { children: /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-0 sm:p-6 lg:p-8", children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: closeQuickView,
        className: "fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.95, y: 20 },
        animate: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.95, y: 20 },
        transition: { duration: 0.4, ease: "easeOut" },
        className: "relative bg-white w-full max-w-5xl sm:rounded-none shadow-2xl overflow-hidden z-10 min-h-screen sm:min-h-0 flex flex-col",
        children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: closeQuickView,
              className: "absolute top-4 right-4 sm:top-6 sm:right-6 z-20 p-2 text-[#1A1A1A] bg-white/70 sm:bg-transparent rounded-full sm:rounded-none hover:opacity-70 transition-opacity",
              "aria-label": "Закрити",
              children: /* @__PURE__ */ jsx(X, { strokeWidth: 1.5, className: "w-6 h-6" })
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row flex-1", children: [
            /* @__PURE__ */ jsx("div", { className: "w-full md:w-1/2 bg-[#FAF7F2]", children: /* @__PURE__ */ jsx("div", { className: "aspect-[4/5] sm:aspect-auto sm:h-full relative", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: bouquet.image,
                alt: bouquet.title,
                className: "w-full h-full object-cover"
              }
            ) }) }),
            /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/2 p-8 sm:p-10 lg:p-16 flex flex-col justify-center bg-white flex-1", children: [
              /* @__PURE__ */ jsx("div", { className: "mb-2 text-[10px] sm:text-xs uppercase tracking-widest text-[#1A1A1A]/50", children: bouquet.colorTone }),
              /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl sm:text-4xl text-[#1A1A1A] font-normal mb-4 sm:mb-6", children: bouquet.title }),
              /* @__PURE__ */ jsx("p", { className: "text-sm font-light text-[#1A1A1A]/70 mb-8 sm:mb-10 leading-relaxed", children: bouquet.description }),
              /* @__PURE__ */ jsxs("div", { className: "mb-8 sm:mb-10", children: [
                /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-widest text-[#1A1A1A] mb-4", children: "Розмір:" }),
                /* @__PURE__ */ jsx("div", { className: "flex gap-4 sm:gap-6", children: ["S", "M", "L"].map((size) => {
                  const isSelected = selectedSize === size;
                  return /* @__PURE__ */ jsx(
                    "button",
                    {
                      onClick: () => setSelectedSize(size),
                      className: `text-sm sm:text-base uppercase tracking-widest transition-colors ${isSelected ? "text-[#1A1A1A] border-b border-[#1A1A1A] pb-1" : "text-[#1A1A1A]/40 hover:text-[#1A1A1A] pb-1 border-b border-transparent"}`,
                      children: size
                    },
                    size
                  );
                }) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "text-2xl font-light text-[#1A1A1A] mb-8 sm:mb-10", children: [
                currentPrice.toLocaleString("uk-UA"),
                " ₴"
              ] }),
              /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: handleAddToCart,
                  className: "w-full py-4 bg-[#1A1A1A] text-white text-xs uppercase tracking-widest font-medium transition-colors hover:bg-black flex items-center justify-center gap-2 mt-auto sm:mt-0",
                  children: [
                    /* @__PURE__ */ jsx(ShoppingBag, { strokeWidth: 1.5, className: "w-4 h-4" }),
                    "Додати в кошик"
                  ]
                }
              )
            ] })
          ] })
        ]
      }
    )
  ] }) });
};

const QuickOrderModal = () => {
  const data = useStore($quickOrderBouquet);
  const [phone, setPhone] = useState("+380");
  const [isSubmitting, setIsSubmitting] = useState(false);
  React.useEffect(() => {
    if (data) {
      document.documentElement.classList.add("lock-scroll");
    } else {
      document.documentElement.classList.remove("lock-scroll");
    }
    return () => {
      document.documentElement.classList.remove("lock-scroll");
    };
  }, [data]);
  if (!data) return null;
  const { bouquet, size } = data;
  const price = bouquet.sizes[size].price;
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (phone.length < 10) return;
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerName: "Quick Order",
          customerPhone: phone,
          isRecipientSelf: true,
          recipientName: "Quick Order",
          recipientPhone: phone,
          deliveryType: "courier_odesa",
          district: "Не вказано",
          deliveryAddress: "Уточнити по телефону",
          items: [{
            id: bouquet.id,
            title: bouquet.title,
            size,
            price,
            quantity: 1,
            image: bouquet.image
          }],
          totalAmount: price,
          deliveryCost: 0
        })
      });
      if (response.ok) {
        showToast("Замовлення прийнято", "Ми зателефонуємо вам найближчим часом.", "success");
        closeQuickOrder();
      }
    } catch (error) {
      showToast("Помилка", "Не вдалося відправити замовлення", "error");
    } finally {
      setIsSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsx(AnimatePresence, { children: /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4", children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: closeQuickOrder,
        className: "fixed inset-0 bg-black/40 backdrop-blur-sm"
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.95, y: 20 },
        animate: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.95, y: 20 },
        className: "relative bg-white w-full max-w-md p-8 lg:p-12 z-10",
        children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: closeQuickOrder,
              className: "absolute top-6 right-6 text-xs uppercase tracking-widest text-[#1A1A1A]/50 hover:text-[#1A1A1A]",
              children: "Закрити"
            }
          ),
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl text-[#1A1A1A] mb-8 mt-4", children: "Швидке замовлення" }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-4 mb-8 pb-8 border-b border-[#1A1A1A]/10", children: [
            /* @__PURE__ */ jsx("img", { src: bouquet.image, alt: bouquet.title, className: "w-20 h-24 object-cover" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "text-sm font-medium text-[#1A1A1A] mb-1", children: bouquet.title }),
              /* @__PURE__ */ jsxs("p", { className: "text-xs text-[#1A1A1A]/50 mb-2", children: [
                "Розмір: ",
                size
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "text-sm text-[#1A1A1A]", children: [
                price.toLocaleString("uk-UA"),
                " ₴"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-8", children: [
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
              "input",
              {
                type: "tel",
                required: true,
                placeholder: "Ваш телефон (+380)",
                value: phone,
                onChange: (e) => setPhone(e.target.value),
                className: "w-full bg-transparent border-b border-[#1A1A1A]/20 py-3 text-sm focus:outline-none focus:border-[#1A1A1A] placeholder:text-[#1A1A1A]/30 text-[#1A1A1A]"
              }
            ) }),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "submit",
                disabled: isSubmitting,
                className: "w-full py-4 bg-[#1A1A1A] text-white text-xs uppercase tracking-widest font-medium transition-colors hover:bg-black disabled:opacity-50",
                children: isSubmitting ? "Обробка..." : "Замовити"
              }
            )
          ] })
        ]
      }
    )
  ] }) });
};

const CustomSelect = ({
  value,
  onChange,
  options,
  placeholder,
  className = "",
  buttonClassName = ""
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const selectedOption = options.find((opt) => opt.value === value);
  return /* @__PURE__ */ jsxs("div", { ref: containerRef, className: `relative ${className}`, children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        type: "button",
        onClick: () => setIsOpen(!isOpen),
        className: `w-full bg-transparent border-b border-[#1A1A1A]/20 py-2.5 focus:outline-none hover:border-[#1A1A1A] transition-colors text-[#1A1A1A] flex items-center justify-between group ${buttonClassName}`,
        children: [
          /* @__PURE__ */ jsx("span", { className: selectedOption ? "" : "text-[#1A1A1A]/30", children: selectedOption ? selectedOption.label : placeholder }),
          /* @__PURE__ */ jsx(
            ChevronDown,
            {
              strokeWidth: 1.5,
              className: `w-4 h-4 text-[#1A1A1A]/50 group-hover:text-[#1A1A1A] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, y: -5 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -5 },
        transition: { duration: 0.15 },
        className: "absolute z-50 w-full mt-1 bg-[#FAF7F2] border border-[#1A1A1A]/10 shadow-lg py-1 max-h-60 overflow-y-auto",
        children: options.map((option) => /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              onChange(option.value);
              setIsOpen(false);
            },
            className: `w-full text-left px-4 py-2 text-sm transition-colors ${value === option.value ? "bg-[#1A1A1A]/5 text-[#1A1A1A] font-medium" : "text-[#1A1A1A]/70 hover:bg-[#1A1A1A]/5 hover:text-[#1A1A1A]"}`,
            children: option.label
          },
          option.value
        ))
      }
    ) })
  ] });
};

const shootOptions = [
  { value: "flowers", label: "З квітами", price: "від 2 500 ₴ / год", icon: /* @__PURE__ */ jsx(Flower2, { strokeWidth: 1.25, className: "w-4 h-4" }) },
  { value: "no_flowers", label: "Без квітів", price: "від 1 200 ₴ / год", icon: /* @__PURE__ */ jsx(Camera, { strokeWidth: 1.25, className: "w-4 h-4" }) },
  { value: "content", label: "Контент", price: "від 800 ₴ / 30 хв", icon: /* @__PURE__ */ jsx(Package, { strokeWidth: 1.25, className: "w-4 h-4" }) }
];
const timeSlots = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00"
];
const BookingModal = () => {
  const isOpen = useStore($isBookingModalOpen);
  const initialShootType = useStore($bookingShootType);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+380");
  const [shootType, setShootType] = useState(initialShootType || "flowers");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("11:00");
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingId, setBookingId] = useState("");
  useEffect(() => {
    if (isOpen && initialShootType) {
      setShootType(initialShootType);
      setIsSuccess(false);
    }
  }, [isOpen, initialShootType]);
  useEffect(() => {
    if (isOpen) {
      document.documentElement.classList.add("lock-scroll");
    } else {
      document.documentElement.classList.remove("lock-scroll");
    }
    return () => {
      document.documentElement.classList.remove("lock-scroll");
    };
  }, [isOpen]);
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        closeBookingModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);
  const tomorrow = /* @__PURE__ */ new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || phone.length < 10 || !date || !time) return;
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          shootType,
          date,
          time,
          comment
        })
      });
      const data = await response.json();
      if (data.success) {
        setIsSuccess(true);
        setBookingId(data.bookingId);
      }
    } catch (err) {
      console.error("Booking error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };
  const resetAndClose = () => {
    closeBookingModal();
    setTimeout(() => {
      setIsSuccess(false);
      setName("");
      setPhone("+380");
      setComment("");
      setDate("");
    }, 300);
  };
  return /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 lg:p-8", children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: resetAndClose,
        className: "fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.96, y: 16 },
        animate: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.96, y: 16 },
        transition: { duration: 0.3, ease: "easeOut" },
        className: "relative bg-[#FAF7F2] w-full max-w-xl p-6 sm:p-10 shadow-2xl border border-[#1A1A1A]/10 z-10 my-auto",
        children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: resetAndClose,
              className: "absolute top-6 right-6 p-2 text-[#1A1A1A]/50 hover:text-[#1A1A1A] transition-colors",
              "aria-label": "Закрити",
              children: /* @__PURE__ */ jsx(X, { strokeWidth: 1.5, className: "w-5 h-5 sm:w-6 sm:h-6" })
            }
          ),
          isSuccess ? /* @__PURE__ */ jsxs("div", { className: "py-8 sm:py-12 text-center space-y-6", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-full border border-[#1A1A1A] flex items-center justify-center mx-auto text-[#1A1A1A]", children: /* @__PURE__ */ jsx(Check, { strokeWidth: 1.5, className: "w-6 h-6" }) }),
            /* @__PURE__ */ jsx("h3", { className: "font-serif text-3xl sm:text-4xl text-[#1A1A1A] font-normal", children: "Запис прийнято" }),
            /* @__PURE__ */ jsxs("p", { className: "text-xs uppercase tracking-widest text-[#1A1A1A]/60", children: [
              "Номер бронювання: #",
              bookingId
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-sm font-light text-[#1A1A1A]/70 max-w-sm mx-auto leading-relaxed", children: "Ми зв'яжемося з вами в Telegram або за телефоном протягом 30 хвилин для уточнення деталей зйомки." }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: resetAndClose,
                className: "mt-6 px-10 py-4 bg-[#1A1A1A] text-white text-xs uppercase tracking-widest font-medium transition-colors hover:bg-black",
                children: "Зрозуміло"
              }
            )
          ] }) : /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[10px] uppercase tracking-[0.25em] text-[#1A1A1A]/50 block mb-2", children: "Floral Studio • Photo Space" }),
              /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl sm:text-4xl text-[#1A1A1A] font-normal", children: "Запис у простір" })
            ] }),
            /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "text-[11px] uppercase tracking-widest text-[#1A1A1A]/60 mb-3 block", children: "Формат фотосесії" }),
                /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-2", children: shootOptions.map((opt) => {
                  const isSelected = shootType === opt.value;
                  return /* @__PURE__ */ jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => setShootType(opt.value),
                      className: `p-3 text-left transition-all border flex flex-col justify-between ${isSelected ? "border-[#1A1A1A] bg-white text-[#1A1A1A]" : "border-[#1A1A1A]/10 bg-transparent text-[#1A1A1A]/60 hover:border-[#1A1A1A]/30"}`,
                      children: [
                        /* @__PURE__ */ jsx("span", { className: "mb-2 block text-[#1A1A1A]", children: opt.icon }),
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsx("div", { className: "text-xs font-medium leading-tight", children: opt.label }),
                          /* @__PURE__ */ jsx("div", { className: "text-[10px] text-[#1A1A1A]/50 mt-1", children: opt.price })
                        ] })
                      ]
                    },
                    opt.value
                  );
                }) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("label", { className: "text-[11px] uppercase tracking-widest text-[#1A1A1A]/60 mb-1 block", children: "Ім'я" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      required: true,
                      placeholder: "Ваше ім'я",
                      value: name,
                      onChange: (e) => setName(e.target.value),
                      className: "w-full bg-transparent border-b border-[#1A1A1A]/20 py-2.5 text-sm focus:outline-none focus:border-[#1A1A1A] transition-colors placeholder:text-[#1A1A1A]/30 text-[#1A1A1A]"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("label", { className: "text-[11px] uppercase tracking-widest text-[#1A1A1A]/60 mb-1 block", children: "Телефон" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "tel",
                      required: true,
                      placeholder: "+380",
                      value: phone,
                      onChange: (e) => setPhone(e.target.value),
                      className: "w-full bg-transparent border-b border-[#1A1A1A]/20 py-2.5 text-sm focus:outline-none focus:border-[#1A1A1A] transition-colors placeholder:text-[#1A1A1A]/30 text-[#1A1A1A]"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("label", { className: "text-[11px] uppercase tracking-widest text-[#1A1A1A]/60 mb-1 block", children: "Дата" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "date",
                      required: true,
                      min: minDate,
                      value: date,
                      onChange: (e) => setDate(e.target.value),
                      className: "w-full bg-transparent border-b border-[#1A1A1A]/20 py-2.5 text-sm focus:outline-none focus:border-[#1A1A1A] transition-colors text-[#1A1A1A]"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("label", { className: "text-[11px] uppercase tracking-widest text-[#1A1A1A]/60 mb-1 block", children: "Час початку" }),
                  /* @__PURE__ */ jsx(
                    CustomSelect,
                    {
                      value: time,
                      onChange: (val) => setTime(val),
                      options: timeSlots.map((slot) => ({ value: slot, label: slot })),
                      buttonClassName: "text-sm"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "text-[11px] uppercase tracking-widest text-[#1A1A1A]/60 mb-1 block", children: "Коментар чи побажання" }),
                /* @__PURE__ */ jsx(
                  "textarea",
                  {
                    placeholder: "Кількість людей, тематика або особливі побажання...",
                    value: comment,
                    onChange: (e) => setComment(e.target.value),
                    rows: 2,
                    className: "w-full bg-transparent border-b border-[#1A1A1A]/20 py-2 text-sm focus:outline-none focus:border-[#1A1A1A] transition-colors placeholder:text-[#1A1A1A]/30 text-[#1A1A1A] resize-none"
                  }
                )
              ] }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "submit",
                  disabled: isSubmitting,
                  className: "w-full py-4 bg-[#1A1A1A] text-white text-xs uppercase tracking-widest font-medium transition-colors hover:bg-black disabled:opacity-50 flex items-center justify-center gap-2 mt-4",
                  children: isSubmitting ? "Обробка..." : /* @__PURE__ */ jsxs(Fragment, { children: [
                    /* @__PURE__ */ jsx("span", { children: "Підтвердити запис" }),
                    /* @__PURE__ */ jsx(ArrowRight, { strokeWidth: 1.5, className: "w-4 h-4" })
                  ] })
                }
              )
            ] })
          ] })
        ]
      }
    )
  ] }) });
};

const Toast = () => {
  const toast = useStore($toast);
  return /* @__PURE__ */ jsx("div", { className: "fixed bottom-6 right-6 z-50 pointer-events-none flex flex-col gap-2 max-w-sm w-full px-4", children: /* @__PURE__ */ jsx(AnimatePresence, { children: toast && /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 10 },
      transition: { duration: 0.3, ease: "easeOut" },
      className: "pointer-events-auto bg-[#1A1A1A] text-white rounded-none p-6 flex justify-between items-start",
      children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "text-xs uppercase tracking-widest font-semibold mb-1", children: toast.title }),
          toast.message && /* @__PURE__ */ jsx("p", { className: "text-sm font-light text-white/70", children: toast.message })
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => $toast.set(null),
            className: "text-white/50 hover:text-white transition-colors text-xs",
            children: "✕"
          }
        )
      ]
    },
    toast.id
  ) }) });
};

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "Floral Studio \u2014 \u041E\u0434\u0435\u0441\u044C\u043A\u0430 \u043C\u0430\u0439\u0441\u0442\u0435\u0440\u043D\u044F \u0430\u0432\u0442\u043E\u0440\u0441\u044C\u043A\u043E\u0457 \u0444\u043B\u043E\u0440\u0438\u0441\u0442\u0438\u043A\u0438",
    description = "\u0421\u0442\u0438\u043B\u044C\u043D\u0438\u0439 \u043C\u0456\u043D\u0456\u043C\u0430\u043B\u0456\u0441\u0442\u0438\u0447\u043D\u0438\u0439 \u0456\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u043C\u0430\u0433\u0430\u0437\u0438\u043D \u043A\u0432\u0456\u0442\u0456\u0432 \u0432 \u041E\u0434\u0435\u0441\u0456. \u0421\u0430\u0434\u043E\u0432\u0456 \u0431\u0443\u043A\u0435\u0442\u0438 \u0443 \u0444\u0440\u0430\u043D\u0446\u0443\u0437\u044C\u043A\u043E\u043C\u0443 \u0441\u0442\u0438\u043B\u0456, \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0432\u0456\u0434 90 \u0445\u0432\u0438\u043B\u0438\u043D, \u0431\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u0430 \u0444\u0456\u0440\u043C\u043E\u0432\u0430 \u043B\u0438\u0441\u0442\u0456\u0432\u043A\u0430.",
    image = "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=1200&q=80"
  } = Astro2.props;
  Astro2.url.pathname;
  return renderTemplate`<html lang="uk" class="h-full scroll-smooth"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌸</text></svg>"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- SEO Meta Tags --><title>${title}</title><meta name="description"${addAttribute(description, "content")}><meta name="keywords" content="квіти Одеса, доставка квітів Одеса, букет Одеса, купити квіти, садові троянди, весільний букет, півонії Одеса, Floral Studio"><!-- Open Graph / Social Media --><meta property="og:type" content="website"><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(image, "content")}><meta property="og:url"${addAttribute(Astro2.url.href, "content")}><meta property="og:locale" content="uk_UA"><!-- Preconnect Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>${renderComponent($$result, "ViewTransitions", $$ClientRouter, {})}${renderHead()}</head> <body class="min-h-full flex flex-col bg-[#FAF7F2] text-[#1A1A1A] antialiased"> <!-- Persisted Header --> ${renderComponent($$result, "Header", $$Header, {})} <!-- Main Content Area --> <main class="flex-1"${addAttribute(renderTransition($$result, "kjlyciom", "fade", ""), "data-astro-transition-scope")}> ${renderSlot($$result, $$slots["default"])} </main> <!-- Global Interactive Islands --> ${renderComponent($$result, "CartDrawer", CartDrawer, { "client:load": true, "data-astro-transition-persist": "cart-drawer", "client:component-hydration": "load", "client:component-path": "C:/Users/Leonid/Desktop/Floristic/src/components/CartDrawer", "client:component-export": "CartDrawer" })} ${renderComponent($$result, "ProductModal", ProductModal, { "client:load": true, "data-astro-transition-persist": "product-modal", "client:component-hydration": "load", "client:component-path": "C:/Users/Leonid/Desktop/Floristic/src/components/ProductModal", "client:component-export": "ProductModal" })} ${renderComponent($$result, "QuickOrderModal", QuickOrderModal, { "client:load": true, "data-astro-transition-persist": "quick-order-modal", "client:component-hydration": "load", "client:component-path": "C:/Users/Leonid/Desktop/Floristic/src/components/QuickOrderModal", "client:component-export": "QuickOrderModal" })} ${renderComponent($$result, "BookingModal", BookingModal, { "client:load": true, "data-astro-transition-persist": "booking-modal", "client:component-hydration": "load", "client:component-path": "C:/Users/Leonid/Desktop/Floristic/src/components/BookingModal", "client:component-export": "BookingModal" })} ${renderComponent($$result, "Toast", Toast, { "client:load": true, "data-astro-transition-persist": "toast", "client:component-hydration": "load", "client:component-path": "C:/Users/Leonid/Desktop/Floristic/src/components/Toast", "client:component-export": "Toast" })} <!-- Static Footer --> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/Leonid/Desktop/Floristic/src/layouts/Layout.astro", "self");

export { $$Layout as $, CustomSelect as C, addToCart as a, openBookingModal as b, openQuickView as o };
