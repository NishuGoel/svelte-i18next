import type { i18n } from 'i18next';
import { I18NextTranslationStore } from './translation-store';

export const createI18nStore = (i18n: i18n, ns?: string | string[]) => {
    const i18nStore = new I18NextTranslationStore(i18n, ns);
    return i18nStore.i18n;
}
