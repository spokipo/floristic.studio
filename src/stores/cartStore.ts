import { atom, computed } from 'nanostores';
import type { CartItem, Bouquet, BouquetSize } from '../types/bouquet';

const CART_STORAGE_KEY = 'floral_studio_cart_v1';

// Safe localStorage helper
function loadInitialCart(): CartItem[] {
  if (typeof window === 'undefined') return [];
  try {
    const saved = localStorage.getItem(CART_STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch (e) {
    console.error('Failed to load cart from localStorage', e);
    return [];
  }
}

// Stores
export const $cartItems = atom<CartItem[]>(loadInitialCart());
export const $isCartOpen = atom<boolean>(false);
export const $quickViewBouquet = atom<Bouquet | null>(null);
export const $quickOrderBouquet = atom<{ bouquet: Bouquet; size: BouquetSize } | null>(null);
export const $isBookingModalOpen = atom<boolean>(false);
export const $bookingShootType = atom<'flowers' | 'no_flowers' | 'content'>('flowers');
export const $toast = atom<{ id: string; title: string; message?: string; type?: 'success' | 'info' | 'error' } | null>(null);

// Sync to localStorage
if (typeof window !== 'undefined') {
  $cartItems.subscribe((items) => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  });
}

// Computed stores
export const $cartCount = computed($cartItems, (items) =>
  items.reduce((total, item) => total + item.quantity, 0)
);

export const $cartTotal = computed($cartItems, (items) =>
  items.reduce((total, item) => total + item.price * item.quantity, 0)
);

// Actions
export function addToCart(bouquet: Bouquet, size: BouquetSize = 'M', quantity: number = 1) {
  const sizeOption = bouquet.sizes[size];
  const itemId = `${bouquet.id}-${size}`;

  const currentItems = $cartItems.get();
  const existingIndex = currentItems.findIndex((item) => item.id === itemId);

  if (existingIndex > -1) {
    const updated = [...currentItems];
    updated[existingIndex].quantity += quantity;
    $cartItems.set(updated);
  } else {
    const newItem: CartItem = {
      id: itemId,
      bouquetId: bouquet.id,
      title: bouquet.title,
      size,
      sizeLabel: sizeOption.label,
      price: sizeOption.price,
      image: bouquet.image,
      quantity,
      composition: bouquet.composition,
    };
    $cartItems.set([...currentItems, newItem]);
  }

  showToast('Додано до кошика', `${bouquet.title} (${sizeOption.label})`, 'success');
}

export function updateQuantity(itemId: string, delta: number) {
  const currentItems = $cartItems.get();
  const updated = currentItems
    .map((item) => {
      if (item.id === itemId) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : null;
      }
      return item;
    })
    .filter(Boolean) as CartItem[];

  $cartItems.set(updated);
}

export function removeFromCart(itemId: string) {
  const currentItems = $cartItems.get();
  $cartItems.set(currentItems.filter((item) => item.id !== itemId));
}

export function clearCart() {
  $cartItems.set([]);
}

export function toggleCart(open?: boolean) {
  if (typeof open === 'boolean') {
    $isCartOpen.set(open);
  } else {
    $isCartOpen.set(!$isCartOpen.get());
  }
}

export function openQuickView(bouquet: Bouquet) {
  $quickViewBouquet.set(bouquet);
}

export function closeQuickView() {
  $quickViewBouquet.set(null);
}

export function openQuickOrder(bouquet: Bouquet, size: BouquetSize = 'M') {
  $quickOrderBouquet.set({ bouquet, size });
}

export function closeQuickOrder() {
  $quickOrderBouquet.set(null);
}

export function openBookingModal(type: 'flowers' | 'no_flowers' | 'content' = 'flowers') {
  $bookingShootType.set(type);
  $isBookingModalOpen.set(true);
}

export function closeBookingModal() {
  $isBookingModalOpen.set(false);
}

export function showToast(title: string, message?: string, type: 'success' | 'info' | 'error' = 'success') {
  const id = Math.random().toString(36).substring(2, 9);
  $toast.set({ id, title, message, type });

  setTimeout(() => {
    const current = $toast.get();
    if (current && current.id === id) {
      $toast.set(null);
    }
  }, 4000);
}

