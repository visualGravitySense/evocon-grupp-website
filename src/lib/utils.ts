import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Получает правильный путь к статическому ресурсу с учетом base URL
 * Для GitHub Pages это будет '/evocon-grupp-website/path'
 * Для локальной разработки это будет '/path'
 */
export function getAssetPath(path: string): string {
  // Убираем начальный слэш если есть
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  // Получаем base URL из Vite (автоматически устанавливается при сборке)
  const baseUrl = import.meta.env.BASE_URL || '/';
  // Убираем завершающий слэш из baseUrl если есть
  const cleanBaseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
  // Объединяем base URL и путь
  return `${cleanBaseUrl}/${cleanPath}`;
}

