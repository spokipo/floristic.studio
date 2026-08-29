import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useMemo } from 'react';
import { o as openQuickView, a as addToCart, C as CustomSelect } from './Layout_DS5UQ-FI.mjs';
import { motion } from 'framer-motion';
import { Check, ShoppingBag } from 'lucide-react';

const CATEGORIES = [
  { id: "all", label: "Усі букети", description: "Повна колекція авторських композицій майстерні" },
  { id: "garden", label: "Садові букети", description: "Живі форми, природні текстури та сезонні квіти" },
  { id: "wedding", label: "Весільні & Святкові", description: "Вишукані ніжні композиції для особливих моментів" },
  { id: "author", label: "Авторські букети", description: "Складні колористичні рішення від шеф-флориста" },
  { id: "boxes", label: "Квіти в коробках / капелюшках", description: "Стійкі композиції у фірмових оксамитових коробках з оазисом" }
];
const BOUQUETS = [
  {
    id: "b1",
    slug: "nizhny-persykovy-sad",
    title: "Ніжний персиковий сад з жоржинами та антуріумом",
    category: "garden",
    price: 2450,
    oldPrice: 2800,
    sizes: {
      S: {
        size: "S",
        label: "Компактний (S)",
        diameter: "28-32 см",
        price: 1850,
        description: "Легкий та витончений букет для ранкового компліменту або побачення"
      },
      M: {
        size: "M",
        label: "Фірмовий (M)",
        diameter: "40-45 см",
        price: 2450,
        description: "Ідеальний збалансований обʼєм з акцентом на фактурні жоржини Cafe au Lait"
      },
      L: {
        size: "L",
        label: "Делюкс (L)",
        diameter: "55-60 см",
        price: 3400,
        description: "Пишний розкішний сад у ваших обіймах для найважливіших свят"
      }
    },
    description: "Натхненний ранковим сонцем на терасах Французького бульвару в Одесі. Ми поєднали королівські садові жоржини сорту Cafe au Lait, персикові троянди White O’Hara, витончений пудровий антуріум та сріблястий евкаліпт Cinerea. Букет дихає легкістю та природною недбалістю французького пейзажного саду.",
    shortDescription: "Жоржини Cafe au Lait, троянди White O’Hara, пудровий антуріум та евкаліпт",
    composition: [
      "Садові жоржини сорту Cafe au Lait (3 шт)",
      "Французька троянда White O’Hara (5 шт)",
      "Пудровий антуріум (1 шт)",
      "Еустома персикова Alissa (3 гілки)",
      "Матіола лавандово-кремова (3 шт)",
      "Евкаліпт Cinerea та шавлія",
      "Шовкова стрічка ручного фарбування"
    ],
    aroma: "Ніжний та ледь відчутний",
    durability: "7–10 днів при правильному догляді",
    careTips: [
      "Підрізайте стебла під кутом 45° кожні 2 дні",
      "Використовуйте тільки холодну чисту воду",
      "Додайте пакетик Chrysal (йде в комплекті)",
      "Тримайте подалі від прямих сонячних променів та кондиціонерів"
    ],
    inStock: true,
    statusText: "В наявності",
    image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1457089328109-e5d9f4306385?auto=format&fit=crop&w=1000&q=80"
    ],
    tags: ["Бестселер", "Французький сад", "Персик & Пудра"],
    bestseller: true,
    featured: true,
    colorTone: "Персиково-пудровий"
  },
  {
    id: "b2",
    slug: "odeskyi-svitanok",
    title: "Одеський світанок з півонієподібними трояндами",
    category: "author",
    price: 2900,
    sizes: {
      S: {
        size: "S",
        label: "Компактний (S)",
        diameter: "30 см",
        price: 2100,
        description: "Акуратний букет із соковитими пастельними бутонами"
      },
      M: {
        size: "M",
        label: "Фірмовий (M)",
        diameter: "42-46 см",
        price: 2900,
        description: "Оптимальний авторський формат із багаторівневою композицією"
      },
      L: {
        size: "L",
        label: "Делюкс (L)",
        diameter: "60 см",
        price: 3950,
        description: "Велична композиція для особливих урочистостей"
      }
    },
    description: "Ароматна пісня кохання. Головна партія належить культовим півонієподібним трояндам Juliet від David Austin у поєднанні з ніжним ранункулюсом та шавлієвою зеленню. Кольорова гама переливається від кремового до припиленого коралу.",
    shortDescription: "Троянди David Austin Juliet, ранункулюси, пудрова гвоздика, шавлія",
    composition: [
      "Півонієподібна троянда David Austin Juliet (5 шт)",
      "Ранункулюс персиковий Клоні (3 шт)",
      "Гвоздика сорту Antique Rose (4 шт)",
      "Скабіоза кремова (3 шт)",
      "Евкаліпт Baby Blue та листя оливи",
      "Фірмове пакування з крафтового паперу"
    ],
    aroma: "Солодкий пудровий",
    durability: "8–12 днів",
    careTips: [
      "Щодня змінюйте воду у вазі",
      "Оновлюйте зріз гострим секатором на 1-2 см",
      "Не ставте букет поруч із фруктами"
    ],
    inStock: true,
    statusText: "В наявності",
    image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1562690868-60bbe7293e94?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1457089328109-e5d9f4306385?auto=format&fit=crop&w=1000&q=80"
    ],
    tags: ["Авторський", "David Austin", "Хіт сезону"],
    bestseller: true,
    featured: true,
    colorTone: "Припилена троянда & Корал"
  },
  {
    id: "b3",
    slug: "shavlievy-shepit",
    title: "Шавлієвий шепіт та французька лаванда",
    category: "garden",
    price: 1950,
    sizes: {
      S: {
        size: "S",
        label: "Компактний (S)",
        diameter: "26-28 см",
        price: 1500,
        description: "Витончена польова гармонія для затишного інтерʼєру"
      },
      M: {
        size: "M",
        label: "Фірмовий (M)",
        diameter: "38-42 см",
        price: 1950,
        description: "Природний садовий обʼєм із текстурними травами"
      },
      L: {
        size: "L",
        label: "Делюкс (L)",
        diameter: "52 см",
        price: 2750,
        description: "Максимально обʼємний садовий букет"
      }
    },
    description: "Легкий, повітряний та невагомий букет, немов прогулянка прованським полем на схилах одеського узбережжя. Срібляста шавлія, суцвіття лаванди, білосніжний дельфініум та садові кущові троянди створюють відчуття безтурботності.",
    shortDescription: "Садова кущова троянда, французька лаванда, дельфініум, шавлія",
    composition: [
      "Кущова садова троянда біла Madam Bombastic (4 гілки)",
      "Дельфініум небесно-білий (2 шт)",
      "Свіжа французька лаванда (пучок)",
      "Шавлія дубравна (5 шт)",
      "Озотамнус рожевий (3 гілки)",
      "Евкаліпт сорту Parvifolia"
    ],
    aroma: "Свіжий квітково-шавлієвий",
    durability: "10–14 днів",
    careTips: [
      "Лаванда та шавлія чудово зберігаються навіть як сухоцвіт",
      "Зрізайте стебла під кутом під проточною водою"
    ],
    inStock: true,
    statusText: "В наявності",
    image: "https://images.unsplash.com/photo-1457089328109-e5d9f4306385?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1457089328109-e5d9f4306385?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=1000&q=80"
    ],
    tags: ["Ароматний", "Садовий", "Прованс"],
    featured: true,
    colorTone: "Шавлієвий крем"
  },
  {
    id: "b4",
    slug: "monmartr-u-tsvitinni",
    title: "Монмартр у цвітінні (Капелюшна коробка)",
    category: "boxes",
    price: 3200,
    sizes: {
      S: {
        size: "S",
        label: "Midi Box",
        diameter: "Коробка Ø 18 см (композиція 30 см)",
        price: 2500,
        description: "Зручна настільна коробка для офісу або туалетного столика"
      },
      M: {
        size: "M",
        label: "Classic Box",
        diameter: "Коробка Ø 22 см (композиція 42 см)",
        price: 3200,
        description: "Фірмова оксамитова коробка кольору теплого льону"
      },
      L: {
        size: "L",
        label: "Grand Box",
        diameter: "Коробка Ø 28 см (композиція 55 см)",
        price: 4500,
        description: "Велична гранд-коробка преміум-сегменту"
      }
    },
    description: "Розкішна композиція у фірмовій циліндричній коробці з оксамитовою текстурою кольору льону. Квіти зібрані у спеціальну флористичну губку Oasis, просочену живильним розчином, тому букет не потребує вази та підрізання.",
    shortDescription: "Троянди Pink Mondial, гортензія, фрезія, евкаліпт у циліндричній коробці",
    composition: [
      "Французька гортензія пудрово-рожева (1 велике суцвіття)",
      "Елітна троянда Pink Mondial (7 шт)",
      "Ароматна біла фрезія (5 шт)",
      "Гвоздика сорту Apple Tea (4 шт)",
      "Евкаліпт Populus з ягідками",
      "Фірмова капелюшна коробка з тисненням золотом"
    ],
    aroma: "Солодкий пудровий",
    durability: "10–14 днів",
    careTips: [
      "Не потребує вази",
      "Доливайте 50-70 мл прохолодної води в центр оазису щодня",
      "Уникайте протягів та опалювальних приладів"
    ],
    inStock: true,
    statusText: "В наявності",
    image: "https://images.unsplash.com/photo-1490750967868-88cb4ec0f0c0?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1490750967868-88cb4ec0f0c0?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1562690868-60bbe7293e94?auto=format&fit=crop&w=1000&q=80"
    ],
    tags: ["У коробці", "Без вази", "Преміум"],
    bestseller: true,
    featured: true,
    colorTone: "Припилена троянда"
  },
  {
    id: "b5",
    slug: "vesilna-elegantsiia",
    title: "Весільна елегантність з білим ранункулюсом",
    category: "wedding",
    price: 3600,
    sizes: {
      S: {
        size: "S",
        label: "Букет нареченої (S)",
        diameter: "26-28 см",
        price: 2800,
        description: "Легка та зручна форма для весільного дня та фотосесії"
      },
      M: {
        size: "M",
        label: "Преміум (M)",
        diameter: "38-42 см",
        price: 3600,
        description: "Класичний пишний обʼєм з довгими шовковими стрічками"
      },
      L: {
        size: "L",
        label: "Королівський (L)",
        diameter: "52 см",
        price: 4800,
        description: "Для розкішної церемонії та прикраси президії"
      }
    },
    description: "Втілення чистоти та аристократичного смаку. Створений для наречених або особливих ювілеїв. Білосніжні ранункулюси сорту Hanoi, перлинні кущові троянди та вінтажний аспарагус створюють невагомий силует хмаринки.",
    shortDescription: "Ранункулюси Hanoi, півонієподібні троянди White Cloud, астильба, оливкові гілки",
    composition: [
      "Ранункулюс елітний Hanoi (5 шт)",
      "Півонієподібна троянда White Cloud (5 шт)",
      "Астильба ніжно-рожева (4 шт)",
      "Твідея біла (3 гілки)",
      "Гілочки італійської оливи",
      "Натуральні шовкові стрічки ручного фарбування (2 метри)"
    ],
    aroma: "Ніжний та ледь відчутний",
    durability: "7–9 днів",
    careTips: [
      "Постачається у спеціальному аквапаку для збереження свіжості під час транспортування",
      "Перед церемонією промокнути кінці стебел серветкою"
    ],
    inStock: false,
    preOrderDays: 2,
    statusText: "Передзамовлення за 2 дні",
    image: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1562690868-60bbe7293e94?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1000&q=80"
    ],
    tags: ["Весільний", "Передзамовлення", "Люкс"],
    colorTone: "Перлинно-молочний"
  },
  {
    id: "b6",
    slug: "frantsuzskyi-sharm",
    title: "Французький шарм з пудровою півонією",
    category: "author",
    price: 2750,
    sizes: {
      S: {
        size: "S",
        label: "Компактний (S)",
        diameter: "28 см",
        price: 2050,
        description: "Компактний букет з великими бутонами півоній"
      },
      M: {
        size: "M",
        label: "Фірмовий (M)",
        diameter: "42 см",
        price: 2750,
        description: "Найпопулярніший формат подарункового букета"
      },
      L: {
        size: "L",
        label: "Делюкс (L)",
        diameter: "56 см",
        price: 3800,
        description: "Вражаючий обʼєм та максимальна кількість півоній"
      }
    },
    description: "Магія розкриття голландських півоній сорту Sarah Bernhardt. У міру того, як квіти стоять у вазі, бутони розкриваються до 15-18 см у діаметрі, наповнюючи весь простір витонченим весняним ароматом.",
    shortDescription: "Півонії Sarah Bernhardt, троянди Shimmer, еустома, шавлія",
    composition: [
      "Голландські півонії Sarah Bernhardt (5 шт)",
      "Троянда персикова Shimmer (4 шт)",
      "Еустома пудрова махрова (3 гілки)",
      "Вероніка рожева (4 шт)",
      "Евкаліпт Сільвер Долар",
      "Дизайнерський матовий папір кольору шавлії"
    ],
    aroma: "Виразний мускусний",
    durability: "7–10 днів",
    careTips: [
      "Півонії люблять багато прохолодної води",
      "Якщо бутони тугі — додайте краплю теплої води або збризніть пелюстки водою з пульверизатора"
    ],
    inStock: true,
    statusText: "В наявності",
    image: "https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=1000&q=80"
    ],
    tags: ["Півонії", "Ароматні", "Топ вибір"],
    featured: true,
    colorTone: "Рожево-персиковий"
  },
  {
    id: "b7",
    slug: "kapeliushok-versai",
    title: "Капелюшок «Версаль» з гортензією та еустомою",
    category: "boxes",
    price: 2850,
    sizes: {
      S: {
        size: "S",
        label: "Midi (S)",
        diameter: "Коробка Ø 16 см (букет 28 см)",
        price: 2200,
        description: "Затишна та компактна оксамитова коробочка"
      },
      M: {
        size: "M",
        label: "Classic (M)",
        diameter: "Коробка Ø 20 см (букет 38 см)",
        price: 2850,
        description: "Збалансована композиція у пастельній гамі"
      },
      L: {
        size: "L",
        label: "Grand (L)",
        diameter: "Коробка Ø 26 см (букет 50 см)",
        price: 3900,
        description: "Розкішна презентація для великих подій"
      }
    },
    description: "Витончена композиція в круглій пудровій коробці. Шапка колумбійської гортензії кольору капучино-персик оточена оксамитовими бутонами еустоми та вінтажних кущових троянд. Прикрашена атласною стрічкою.",
    shortDescription: "Гортензія капучино, еустома, кущові троянди бомбастік, оксамитова коробка",
    composition: [
      "Гортензія селекційна персикова (1 шт)",
      "Еустома шампань (4 гілки)",
      "Кущова троянда Silky Lace (4 гілки)",
      "Брунія срібляста (3 шт)",
      "Листя фісташки та евкаліпт",
      "Кругла оксамитова коробка кольору Linen"
    ],
    aroma: "Садовий свіжий",
    durability: "10–12 днів",
    careTips: [
      "Зволожуйте флористичну губку водою кожні 1-2 дні",
      "Гортензія любить обприскування пелюсток водою"
    ],
    inStock: true,
    statusText: "В наявності",
    image: "https://images.unsplash.com/photo-1437275537121-331a345ddc4a?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1437275537121-331a345ddc4a?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1490750967868-88cb4ec0f0c0?auto=format&fit=crop&w=1000&q=80"
    ],
    tags: ["Коробка", "Гортензія", "Практично"],
    colorTone: "Капучино & Персик"
  },
  {
    id: "b8",
    slug: "soliarni-tini-arkadii",
    title: "Солярні тіні Аркадії з капською протеєю",
    category: "author",
    price: 3100,
    sizes: {
      S: {
        size: "S",
        label: "Компактний (S)",
        diameter: "30 см",
        price: 2400,
        description: "Екзотичний букет з 1 акцентною протеєю"
      },
      M: {
        size: "M",
        label: "Фірмовий (M)",
        diameter: "45 см",
        price: 3100,
        description: "Авторський арт-букет з незвичною архітектурою"
      },
      L: {
        size: "L",
        label: "Делюкс (L)",
        diameter: "60 см",
        price: 4300,
        description: "Ексклюзивний букет шеф-флориста для поціновувачів арту"
      }
    },
    description: "Архітектурний авторський букет зі скульптурною рожевою протеєю King Protea, сухими квітами кортадерії (пампасна трава), пудровими трояндами та декоративним артишоком. Вибір для тих, хто цінує нетривіальну сучасну флористику.",
    shortDescription: "King Protea, троянди Kahala, пампасна трава, евкаліпт",
    composition: [
      "Африканська протея King Pink (1 велика)",
      "Еквадорська троянда Kahala (5 шт)",
      "Суцвіття пампасної трави Cortaderia (3 шт)",
      "Леукодендрон Safari Sunset (3 шт)",
      "Евкаліпт сріблястий та шавлія",
      "Дизайнерське пакування у теплій лляній гамі"
    ],
    aroma: "Ніжний та ледь відчутний",
    durability: "14–20 днів (протея та трави стоять місяцями)",
    careTips: [
      "Протея дуже стійка і поступово трансформується у вічний сухоцвіт",
      "Воду міняти раз на 2 дні"
    ],
    inStock: false,
    preOrderDays: 2,
    statusText: "Передзамовлення за 2 дні",
    image: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1000&q=80"
    ],
    tags: ["Екзотика", "Стійкий 14+ днів", "Арт-флористика"],
    colorTone: "Пісочно-персиковий"
  }
];

const ProductCard = ({ bouquet }) => {
  const [selectedSize, setSelectedSize] = useState("M");
  const [isAddedAnim, setIsAddedAnim] = useState(false);
  const currentSizeOption = bouquet.sizes[selectedSize];
  const currentPrice = currentSizeOption ? currentSizeOption.price : bouquet.price;
  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(bouquet, selectedSize, 1);
    setIsAddedAnim(true);
    setTimeout(() => setIsAddedAnim(false), 1200);
  };
  return /* @__PURE__ */ jsxs(
    motion.article,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-50px" },
      transition: { duration: 0.5, ease: "easeOut" },
      className: "group flex flex-col",
      children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            onClick: () => openQuickView(bouquet),
            className: "relative aspect-[3/4] overflow-hidden bg-[#FAF7F2] cursor-pointer mb-5",
            children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: bouquet.image,
                  alt: bouquet.title,
                  loading: "lazy",
                  className: "w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4", children: /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: handleAddToCart,
                  className: "w-full py-3.5 bg-white text-[#1A1A1A] text-xs uppercase tracking-widest font-medium transition-transform transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 flex items-center justify-center gap-2",
                  children: isAddedAnim ? /* @__PURE__ */ jsxs(Fragment, { children: [
                    /* @__PURE__ */ jsx(Check, { strokeWidth: 1.5, className: "w-4 h-4" }),
                    " Додано"
                  ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                    /* @__PURE__ */ jsx(ShoppingBag, { strokeWidth: 1.5, className: "w-4 h-4" }),
                    " Додати"
                  ] })
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center px-2", children: [
          /* @__PURE__ */ jsx(
            "h3",
            {
              onClick: () => openQuickView(bouquet),
              className: "font-serif text-lg text-[#1A1A1A] cursor-pointer mb-1.5 hover:opacity-70 transition-opacity",
              children: bouquet.title
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "text-sm font-light text-[#1A1A1A] mb-4", children: [
            currentPrice.toLocaleString("uk-UA"),
            " ₴"
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex items-center gap-4 text-xs uppercase tracking-widest text-[#1A1A1A]/50", children: ["S", "M", "L"].map((size) => /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => setSelectedSize(size),
              className: `transition-colors hover:text-[#1A1A1A] ${selectedSize === size ? "text-[#1A1A1A] border-b border-[#1A1A1A]" : "border-b border-transparent"}`,
              children: size
            },
            size
          )) })
        ] })
      ]
    }
  );
};

const CatalogSection = ({
  initialCategory = "all",
  showTitle = true,
  limit
}) => {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState("popular");
  const filteredBouquets = useMemo(() => {
    return BOUQUETS.filter((b) => {
      if (selectedCategory !== "all" && b.category !== selectedCategory) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === "price_asc") return a.price - b.price;
      if (sortBy === "price_desc") return b.price - a.price;
      return (b.bestseller ? 1 : 0) - (a.bestseller ? 1 : 0);
    });
  }, [selectedCategory, sortBy]);
  const displayedBouquets = limit ? filteredBouquets.slice(0, limit) : filteredBouquets;
  return /* @__PURE__ */ jsx("section", { className: "py-16 sm:py-24", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-8", children: [
    showTitle && /* @__PURE__ */ jsx("div", { className: "text-center max-w-2xl mx-auto mb-16", children: /* @__PURE__ */ jsx("h2", { className: "font-serif text-4xl sm:text-5xl text-[#1A1A1A] font-normal leading-tight", children: "Колекція майстерні" }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between mb-16 gap-8", children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center gap-6 overflow-x-auto pb-2 w-full md:w-auto justify-start [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]", children: CATEGORIES.map((cat) => {
        const isSelected = selectedCategory === cat.id;
        return /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setSelectedCategory(cat.id),
            className: `text-xs uppercase tracking-[0.15em] whitespace-nowrap transition-colors ${isSelected ? "text-[#1A1A1A] font-semibold border-b border-[#1A1A1A] pb-1" : "text-[#1A1A1A]/50 hover:text-[#1A1A1A] pb-1 border-b border-transparent"}`,
            children: cat.label
          },
          cat.id
        );
      }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-xs uppercase tracking-widest text-[#1A1A1A]/60 w-full md:w-auto justify-start md:justify-end", children: [
        /* @__PURE__ */ jsx("span", { className: "shrink-0 text-[11px]", children: "Сортувати:" }),
        /* @__PURE__ */ jsx(
          CustomSelect,
          {
            value: sortBy,
            onChange: (val) => setSortBy(val),
            options: [
              { value: "popular", label: "Популярні" },
              { value: "price_asc", label: "Ціна: від меншої" },
              { value: "price_desc", label: "Ціна: від більшої" }
            ],
            className: "w-[180px]",
            buttonClassName: "text-xs uppercase tracking-widest"
          }
        )
      ] })
    ] }),
    displayedBouquets.length > 0 ? /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16", children: displayedBouquets.map((bouquet) => /* @__PURE__ */ jsx(ProductCard, { bouquet }, bouquet.id)) }) : /* @__PURE__ */ jsx("div", { className: "text-center py-20", children: /* @__PURE__ */ jsx("p", { className: "text-sm uppercase tracking-widest text-[#1A1A1A]/50", children: "Нічого не знайдено" }) })
  ] }) });
};

export { CatalogSection as C };
