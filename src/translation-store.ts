import type { TFunction, i18n } from "i18next";
import { writable, type Writable } from "svelte/store";

export class I18NextTranslationStore {
    public i18n: Writable<i18n>;
    public t: Writable<TFunction>;
    public isLoading = writable(true);
    public isError = writable(false);

    constructor(i18n: i18n) {
        this.i18n = writable(i18n);
        this.t = writable(i18n.t);
        this.bindOnChange(i18n);
        this.bindOnLoad(i18n);
    }

    private bindOnChange(i18n: i18n) {
        const setupI18n = () => {
            this.i18n.set((i18n));
            this.t.set((i18n.t));
        };

        i18n.on('initialized', setupI18n);
        i18n.on('loaded', setupI18n);
        i18n.on('added', setupI18n);
        i18n.on('languageChanged', setupI18n);
    }

    private bindOnLoad(i18n: i18n) {
        // if loaded resources are empty || {}, set loading to true
        i18n.on('loaded', (resources) => {
            Object.keys(resources).length !== 0 && this.isLoading.set(false)
        });

        // if resources failed loading, set error to true
        i18n.on('failedLoading', () => {
            this.isError.set(true)
        });
    }
}

