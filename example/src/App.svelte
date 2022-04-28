<script lang="ts">
  import i18next from "i18next";
  import LanguageDetector from "i18next-browser-languagedetector";
  import HttpBackend from "i18next-http-backend";
  import { createI18nStore, isLoading } from "svelte-i18next";

  i18next
    .use(HttpBackend)
    .use(LanguageDetector)
    .init({
      detection: {
        order: ["querystring", "localStorage", "navigator"],
        caches: ["localStorage"],
        lookupQuerystring: "lng",
        lookupLocalStorage: "locale",
      },
      fallbackLng: "en",
      ns: "common",
      backend: {
        loadPath: "/locales/{{lng}}/{{ns}}.json",
      },
    });
  const i18n = createI18nStore(i18next);
</script>

{#if $isLoading}
  <p>loading...</p>
{:else}
  <section
    on:click={() => $i18n.changeLanguage($i18n.language === "en" ? "de" : "en")}>
    {$i18n.t("Hello")}
    {$i18n.t("World")}
  </section>
{/if}
