export type BouquetSize = 'S' | 'M' | 'L';

export interface BouquetSizeOption {
  size: BouquetSize;
  label: string;
  diameter: string;
  price: number;
  description: string;
}

export type BouquetCategory =
  | 'all'
  | 'garden'
  | 'wedding'
  | 'author'
  | 'boxes';

export interface CategoryInfo {
  id: BouquetCategory;
  label: string;
  description: string;
}

export interface Bouquet {
  id: string;
  slug: string;
  title: string;
  category: BouquetCategory;
  price: number; // Base price (usually S or M)
  oldPrice?: number;
  sizes: {
    S: BouquetSizeOption;
    M: BouquetSizeOption;
    L: BouquetSizeOption;
  };
  description: string;
  shortDescription: string;
  composition: string[];
  aroma: 'Ніжний та ледь відчутний' | 'Свіжий квітково-шавлієвий' | 'Солодкий пудровий' | 'Виразний мускусний' | 'Садовий свіжий';
  durability: string; // e.g. "7–12 днів при правильному догляді"
  careTips: string[];
  inStock: boolean;
  preOrderDays?: number; // e.g. 2
  statusText: string; // "В наявності" | "Передзамовлення за 2 дні"
  image: string;
  gallery: string[];
  tags: string[];
  bestseller?: boolean;
  featured?: boolean;
  colorTone: string; // "Персиково-пудровий", "Шавлієвий крем", etc.
}

export interface CartItem {
  id: string; // unique item key: bouquetId + size
  bouquetId: string;
  title: string;
  size: BouquetSize;
  sizeLabel: string;
  price: number;
  image: string;
  quantity: number;
  composition: string[];
}

