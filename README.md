# svelte-i18next [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=%40sveltejs%20wrapper%20for%20i18next%20%0Ahttps%3A%2F%2Fgithub.com%2FNishuGoel%2Fsvelte-i18next%0Avia%20%40TheNishuGoel%20%20&hashtags=i18next,sveltejs,svelte,javascript,webdev)

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
so your Svelte components re-render e.g. when language is changed or a new resource is loaded by i18next.

## Quick Start

`i18n.js`:
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
  },
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
    {$i18n.t('key')}}
</div>
```

See full example project: [Svelte example](https://github.com/NishuGoel/svelte-i18next/blob/main/example)

