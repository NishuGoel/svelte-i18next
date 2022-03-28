<script lang="ts">
    import i18next from "i18next";
    import Backend from "i18next-browser-languagedetector";
    import LanguageDetector from "i18next-http-backend";
    import { createI18nStore } from "../src/index";

    i18next
        .use(Backend)
        .use(LanguageDetector)
        .init({
            detection: {
                order: ["querystring", "localStorage", "navigator"],
                caches: ["localStorage"],
                lookupQuerystring: "lng",
                lookupLocalStorage: "locale",
            },
            returnEmptyString: false,
            saveMissing: window.location.hostname === "localhost",
            ns: "common",
            defaultNS: "common",
            nsSeparator: "::",
            backend: {
                loadPath: "/locales/{{lng}}/{{ns}}.json",
                addPath: "/locales/add/{{lng}}/{{ns}}",
            },
        });
    const i18n = createI18nStore(i18next, "example");
</script>

<section on:click={() => $i18n.changeLanguage("de")}>
    {$i18n.getFixedT(null, "example")("Hello")}
    {$i18n.getFixedT(null, "example")("World")}
</section>
