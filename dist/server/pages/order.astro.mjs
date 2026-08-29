import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_V5rFe8Dl.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_DS5UQ-FI.mjs';
export { renderers } from '../renderers.mjs';

const $$Order = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044F \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u2014 Floral Studio", "description": "\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044F \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438 \u043A\u0432\u0456\u0442\u0456\u0432 \u043F\u043E \u041E\u0434\u0435\u0441\u0456." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="pt-32 pb-8 sm:pt-40 sm:pb-12 text-center bg-white"> <div class="max-w-7xl mx-auto px-6 lg:px-8"> <h1 class="font-serif text-4xl sm:text-5xl text-[#1A1A1A] font-normal">
Оформлення замовлення
</h1> </div> </section> ${renderComponent($$result2, "CheckoutForm", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "C:/Users/Leonid/Desktop/Floristic/src/components/CheckoutForm", "client:component-export": "CheckoutForm" })} ` })}`;
}, "C:/Users/Leonid/Desktop/Floristic/src/pages/order.astro", void 0);

const $$file = "C:/Users/Leonid/Desktop/Floristic/src/pages/order.astro";
const $$url = "/order";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Order,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
