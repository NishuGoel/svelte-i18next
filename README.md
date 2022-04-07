# svelte-i18next [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=svelte-i18next%20for%20svelte%20framework%20based%20on%20i18next%20internationalization%20ecosystem%0Ahttps%3A%2F%2Fgithub.com%2FNishuGoel%2Fsvelte-i18next%0A%23i18n%20%23svelte%20%23sveltejs%20%23javascript%20%23dev%20via%20%40TheNishuGoel%20&hashtags=i18n,sveltejs,svelte,javascript,dev)

[![CI](https://github.com/NishuGoel/svelte-i18next/workflows/CI/badge.svg)](https://github.com/NishuGoel/svelte-i18next/actions?query=workflow%3ACI)
[![npm version](https://img.shields.io/npm/v/svelte-i18next.svg)](https://www.npmjs.com/package/svelte-i18next)
[![bundle size](https://img.shields.io/bundlephobia/minzip/svelte-i18next?label=gzip%20bundle)](https://bundlephobia.com/package/svelte-i18next)
[![License](http://img.shields.io/:license-mit-blue.svg)](https://github.com/NishuGoel/svelte-i18next/blob/master/LICENSE)

Svelte wrapper for [i18next](https://i18next.com/)

```
npm i svelte-i18next i18next
```

## Implementation

This library wraps an i18next instance in a Svelte Store to observe [i18next events](https://github.com/NishuGoel/svelte-i18next/blob/main/src/translation-store.ts#L23)
so your Svelte components re-render e.g. when lanuguage is changed or new resource is loaded by i18next.

## Quick Start

i18n.js
```ts
import i18next from "i18next";
import { createI18nStore } from "svelte-i18next";

i18next.init({
 lng: 'en',
 resources: {
    en: {
      translation: {
        "key": "hello world"
      }
    }
  }
  interpolation: {
    escapeValue: false, // not needed for svelte as it escapes by default
  }
});

export const i18n = createI18nStore(i18next);
```

`App.svelte`:
```svelte
<script>
  import i18n from './i18n.js';
</script>

<div>
    {$i18n.t('key') // translates to hello world}
</div>
```

See full example project: [Svelte example](https://github.com/NishuGoel/svelte-i18next/blob/main/example)

