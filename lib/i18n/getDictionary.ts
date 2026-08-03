import type { Dictionary, Locale } from '@/lib/i18n/types';
import { en } from '@/lib/i18n/dictionaries/en';
import { ar } from '@/lib/i18n/dictionaries/ar';

const dictionaries: Record<Locale, Dictionary> = { en, ar };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
