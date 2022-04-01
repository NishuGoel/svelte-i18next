import type { i18n } from 'i18next';
import { I18NextTranslationStore } from './translation-store';

export const createI18nStore = (i18n: i18n) => {
    const i18nStore = new I18NextTranslationStore(i18n);
    return i18nStore.i18n;
}
