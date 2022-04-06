# svelte-i18next

svelte-i18next for svelte framework based on [i18next](https://i18next.com/) internationalization ecosystem 

[npm-icon]: https://nodei.co/npm/svelte-i18next.png?downloads=true
[npm-url]: https://npmjs.org/package/svelte-i18next


###  Configure

```ts
import { createI18nStore } from 'svelte-i18next';

const i18n = createI18nStore(i18n_instance) // where i18n_instance can be your instance of i18n with required configs
```

###  Usage

```jsx
<div>
    {$i18n.t('key')}
</div>
```


### Installation
Source can be loaded via npm or downloaded from this repo.

```ts
$ npm install svelte-i18next
```

OR
```ts
$ yarn add svelte-i18next
```

#### Usage example

[Svelte example](https://github.com/NishuGoel/svelte-i18next/blob/main/examples/App.svelte)

#### Explanation


i18n.ts
```jsx
import i18next from "i18next";
import { createI18nStore } from "svelte-i18next";
import HttpBackend from "i18next-browser-languagedetector";
import LanguageDetector from "i18next-http-backend";

i18next
    .use(HttpBackend) // plugin to load translations via backend
    .use(LanguageDetector) // plugin to detect browser language
    .init({
    // init opts here...
        interpolation: {
            escapeValue: false, // not needed for svelte as it escapes by default
        }
    });

export const i18n = createI18nStore(i18next);
```

App.svelte

```jsx
import i18n from './i18n.ts';

<div>
    {$i18n.t(key)} // standard i18next t function to get the translation of a key after the store init `createI18nStore` step.
</div>
```

Alternatively, if translations are structured into multiple files, one could load the namespaces in the consuming application using:

```jsx
import { createI18nStore } from 'svelte-i18next';

const i18n = createI18nStore(i18n_instance) 

onMount(()=>{
    i18n.setDefaultNamespace('example');
    i18n.loadNamespaces(['example']);
})

// Usage
<div>
    {$i18n.t(key)}
</div>
```
