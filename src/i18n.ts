import type { i18n } from 'i18next';
import { I18NextTranslationStore } from './translation-store';

export const createI18nStore = (i18n: i18n) => {
    const i18nStore = new I18NextTranslationStore(i18n);
    return {
        i18n: i18nStore.i18n,
        t: i18nStore.t,
        isLoading: i18nStore.isLoading,
        isError: i18nStore.isError
    };
}
