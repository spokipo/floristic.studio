import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_V5rFe8Dl.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_DS5UQ-FI.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u041F\u0440\u043E \u043C\u0430\u0439\u0441\u0442\u0435\u0440\u043D\u044E \u2014 Floral Studio \u041E\u0434\u0435\u0441\u0430", "description": "\u0406\u0441\u0442\u043E\u0440\u0456\u044F \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F \u043A\u0432\u0456\u0442\u043A\u043E\u0432\u043E\u0457 \u0441\u0442\u0443\u0434\u0456\u0457 \u0432 \u041E\u0434\u0435\u0441\u0456. \u0424\u0456\u043B\u043E\u0441\u043E\u0444\u0456\u044F \u0444\u0440\u0430\u043D\u0446\u0443\u0437\u044C\u043A\u043E\u0433\u043E \u0441\u0430\u0434\u0443." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="pt-32 pb-8 sm:pt-40 sm:pb-12 text-center bg-[#FAF7F2]"> <div class="max-w-7xl mx-auto px-6 lg:px-8"> <h1 class="font-serif text-4xl sm:text-5xl text-[#1A1A1A] font-normal mb-4">
Французький сад біля Чорного моря
</h1> <p class="text-sm font-light text-[#1A1A1A]/70 max-w-2xl mx-auto">
Floral Studio народилася з любові до витонченої природи, ранкової тиші та бажання дарувати справжні емоції.
</p> </div> </section> <section class="py-16 sm:py-24 bg-[#FAF7F2]"> <div class="max-w-7xl mx-auto px-6 lg:px-8"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"> <div class="space-y-6"> <h2 class="font-serif text-3xl sm:text-4xl text-[#1A1A1A] font-normal leading-tight">
Чому ми обрали стиль французького саду?
</h2> <div class="space-y-4 text-sm text-[#1A1A1A]/70 font-light leading-relaxed"> <p>
Класична комерційна флористика часто ховає квіти за шарами блискучого пластику та жорсткими каркасами. Ми пішли іншим шляхом.
</p> <p>
Ми надихаємося французьким пейзажним стилем: невагомістю польових трав, витонченими вигинами гілочок шавлії та евкаліпту, пишними садовими півоніями.
</p> <p>
Кожен наш букет нагадує щойно зібраний ранковий оберемок у прованському саду.
</p> </div> </div> <div> <img src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1000&q=80" alt="Floral Studio" class="w-full aspect-[4/3] object-cover"> </div> </div> </div> </section> <section id="care" class="py-16 sm:py-24 bg-white"> <div class="max-w-7xl mx-auto px-6 lg:px-8"> <h2 class="font-serif text-3xl sm:text-4xl text-[#1A1A1A] font-normal text-center mb-16">
Догляд за букетом
</h2> <div class="grid grid-cols-1 md:grid-cols-4 gap-12"> <div> <h3 class="text-xs uppercase tracking-widest font-semibold text-[#1A1A1A] mb-4">1. Підрізка</h3> <p class="text-sm font-light text-[#1A1A1A]/70">
Зрізайте стебла під кутом 45° гострим ножем на 1-2 см. Не використовуйте ножиці.
</p> </div> <div> <h3 class="text-xs uppercase tracking-widest font-semibold text-[#1A1A1A] mb-4">2. Вода</h3> <p class="text-sm font-light text-[#1A1A1A]/70">
Використовуйте чисту прохолодну воду. Змінюйте воду щодня.
</p> </div> <div> <h3 class="text-xs uppercase tracking-widest font-semibold text-[#1A1A1A] mb-4">3. Підживлення</h3> <p class="text-sm font-light text-[#1A1A1A]/70">
Додайте пакетик Chrysal (йде в комплекті) у воду для продовження життя букета.
</p> </div> <div> <h3 class="text-xs uppercase tracking-widest font-semibold text-[#1A1A1A] mb-4">4. Місце</h3> <p class="text-sm font-light text-[#1A1A1A]/70">
Тримайте букет подалі від сонця, протягів, кондиціонерів та фруктів.
</p> </div> </div> </div> </section> ` })}`;
}, "C:/Users/Leonid/Desktop/Floristic/src/pages/about.astro", void 0);

const $$file = "C:/Users/Leonid/Desktop/Floristic/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
