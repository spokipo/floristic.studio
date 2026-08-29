import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_V5rFe8Dl.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_DS5UQ-FI.mjs';
import { C as CatalogSection } from '../chunks/CatalogSection_DAubSVWV.mjs';
export { renderers } from '../renderers.mjs';

const $$Catalog = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u041A\u0430\u0442\u0430\u043B\u043E\u0433 \u0431\u0443\u043A\u0435\u0442\u0456\u0432 \u2014 Floral Studio \u041E\u0434\u0435\u0441\u0430", "description": "\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u0441\u0432\u0456\u0439 \u0456\u0434\u0435\u0430\u043B\u044C\u043D\u0438\u0439 \u0431\u0443\u043A\u0435\u0442: \u0441\u0430\u0434\u043E\u0432\u0456 \u043A\u0432\u0456\u0442\u0438, \u043F\u0456\u0432\u043E\u043D\u0456\u0457, \u0432\u0435\u0441\u0456\u043B\u044C\u043D\u0456 \u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0456\u0457, \u043A\u0430\u043F\u0435\u043B\u044E\u0448\u043D\u0456 \u043A\u043E\u0440\u043E\u0431\u043A\u0438." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="pt-32 pb-8 sm:pt-40 sm:pb-12 text-center bg-[#FAF7F2]"> <div class="max-w-7xl mx-auto px-6 lg:px-8"> <h1 class="font-serif text-4xl sm:text-5xl text-[#1A1A1A] font-normal mb-4">
Каталог квіткових композицій
</h1> <p class="text-sm font-light text-[#1A1A1A]/70">
Усі букети створюються виключно зі свіжих поставок у день доставки.
</p> </div> </section> <div class="bg-[#FAF7F2]"> ${renderComponent($$result2, "CatalogSection", CatalogSection, { "client:load": true, "showTitle": false, "client:component-hydration": "load", "client:component-path": "C:/Users/Leonid/Desktop/Floristic/src/components/CatalogSection", "client:component-export": "CatalogSection" })} </div> ` })}`;
}, "C:/Users/Leonid/Desktop/Floristic/src/pages/catalog.astro", void 0);

const $$file = "C:/Users/Leonid/Desktop/Floristic/src/pages/catalog.astro";
const $$url = "/catalog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Catalog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
