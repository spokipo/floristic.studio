import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_V5rFe8Dl.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_DS5UQ-FI.mjs';
export { renderers } from '../renderers.mjs';

const $$Delivery = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0442\u0430 \u043E\u043F\u043B\u0430\u0442\u0430 \u043F\u043E \u041E\u0434\u0435\u0441\u0456 \u2014 Floral Studio", "description": "\u0423\u043C\u043E\u0432\u0438 \u043A\u0443\u0440'\u0454\u0440\u0441\u044C\u043A\u043E\u0457 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438 \u0430\u0432\u0442\u043E\u0440\u0441\u044C\u043A\u0438\u0445 \u043A\u0432\u0456\u0442\u0456\u0432 \u043F\u043E \u0440\u0430\u0439\u043E\u043D\u0430\u0445 \u041E\u0434\u0435\u0441\u0438." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="pt-32 pb-8 sm:pt-40 sm:pb-12 text-center bg-[#FAF7F2]"> <div class="max-w-7xl mx-auto px-6 lg:px-8"> <h1 class="font-serif text-4xl sm:text-5xl text-[#1A1A1A] font-normal mb-4">
Доставка та оплата
</h1> <p class="text-sm font-light text-[#1A1A1A]/70 max-w-xl mx-auto">
Доставляємо свіжі букети у всі райони міста у спеціальних аквапаках.
</p> </div> </section> <section class="py-16 sm:py-24 bg-[#FAF7F2]"> <div class="max-w-7xl mx-auto px-6 lg:px-8"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24"> <div> <h2 class="font-serif text-3xl text-[#1A1A1A] font-normal mb-8">
Кур'єрська доставка
</h2> <div class="space-y-6 text-sm font-light text-[#1A1A1A]/70"> <p>
Ми перевозимо букети тільки у вертикальному положенні в спеціальних аквапаках із водою, тому квіти залишаються ідеально свіжими від моменту збору до моменту вручення.
</p> <div class="border-y border-[#1A1A1A]/10 py-6 my-8 space-y-3"> <div class="flex justify-between"> <span>Замовлення від 2 500 ₴</span> <span class="text-[#1A1A1A] font-medium">Безкоштовно</span> </div> <div class="flex justify-between"> <span>Замовлення до 2 500 ₴</span> <span class="text-[#1A1A1A]">150 ₴</span> </div> <div class="flex justify-between"> <span>Самовивіз (вул. Грецька, 25)</span> <span class="text-[#1A1A1A] font-medium">Безкоштовно</span> </div> </div> <p>
Доставляємо в усі райони міста: Приморський, Аркадія, Фонтан, Таїрова, Черемушки, селище Котовського, Совіньйон.
</p> </div> </div> <div> <h2 class="font-serif text-3xl text-[#1A1A1A] font-normal mb-8">
Оплата
</h2> <div class="space-y-8"> <div> <h4 class="text-xs uppercase tracking-widest font-semibold text-[#1A1A1A] mb-2">Онлайн карткою</h4> <p class="text-sm font-light text-[#1A1A1A]/70">
Безпечна оплата Visa / MasterCard, а також через Apple Pay та Google Pay.
</p> </div> <div> <h4 class="text-xs uppercase tracking-widest font-semibold text-[#1A1A1A] mb-2">При отриманні</h4> <p class="text-sm font-light text-[#1A1A1A]/70">
Готівкою або банківською картою через термінал кур'єра.
</p> </div> <div> <h4 class="text-xs uppercase tracking-widest font-semibold text-[#1A1A1A] mb-2">Гарантія свіжості</h4> <p class="text-sm font-light text-[#1A1A1A]/70">
Якщо квітка пошкодилася під час транспортування, ми безкоштовно замінимо букет протягом 2 годин.
</p> </div> </div> </div> </div> </div> </section> ` })}`;
}, "C:/Users/Leonid/Desktop/Floristic/src/pages/delivery.astro", void 0);

const $$file = "C:/Users/Leonid/Desktop/Floristic/src/pages/delivery.astro";
const $$url = "/delivery";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Delivery,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
