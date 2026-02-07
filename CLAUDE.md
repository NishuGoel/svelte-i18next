# CLAUDE.md - AI Assistant Guide for svelte-i18next

## Project Overview

**svelte-i18next** is a lightweight Svelte store wrapper for the [i18next](https://www.i18next.com/) internationalization library. It wraps an i18next instance in a Svelte writable store that reactively updates when languages change or resources are loaded.

- **Package**: `svelte-i18next` (npm)
- **Version**: 2.2.0
- **License**: MIT
- **Module type**: ES modules (`"type": "module"`)

## Quick Reference Commands

```bash
# Install dependencies
yarn install --frozen-lockfile

# Build (compiles TypeScript)
npm run build        # or: yarn build

# Run tests
npm test             # or: yarn test

# Validate Svelte components
npm run validate     # or: yarn validate
```

## Repository Structure

```
svelte-i18next/
├── src/
│   ├── index.ts                  # Re-exports from i18n.ts and translation-store.ts
│   ├── i18n.ts                   # createI18nStore() factory function
│   ├── translation-store.ts      # Core: I18NextTranslationStore class, isLoading store
│   ├── index.test.ts             # Export verification tests
│   ├── i18n.test.ts              # Factory function tests (uses mocks)
│   └── translation-store.test.ts # Store behavior tests (init, languageChanged, namespaces)
├── example/                      # Demo Svelte app (Rollup-based, separate package.json)
│   ├── src/App.svelte
│   └── public/locales/{en,de}/common.json
├── .github/workflows/ci.yml     # CI: test on push/PR, publish on tag
├── jest.config.ts                # Jest config (ts-jest preset, node env)
├── tsconfig.json                 # TypeScript config (ES6, strict, declarations)
└── package.json
```

## Architecture

### Public API (3 exports)

| Export | From | Description |
|---|---|---|
| `createI18nStore(i18n)` | `i18n.ts` | Factory function. Takes an i18next instance, returns a `Writable<i18n>` store. |
| `I18NextTranslationStore` | `translation-store.ts` | Class that wraps i18next in a Svelte store. Usually not used directly. |
| `isLoading` | `translation-store.ts` | Global `Writable<boolean>` store tracking resource loading state. |

### Core Logic (`src/translation-store.ts`)

`I18NextTranslationStore` listens to these i18next events and re-sets the writable store on each, triggering Svelte reactivity:

- `initialized` - i18next finished initializing
- `loaded` - translation resources loaded (also sets `isLoading` to `false`)
- `added` - namespace/resource added
- `languageChanged` - active language changed
- `failedLoading` - resource loading failed (sets `isLoading` back to `true`)

### Entry Points

- `main`: `index.js` (compiled from `src/index.ts`)
- `types`: `index.d.ts`
- Source in `src/`, compiled output placed at project root via `outDir: "."`

## Build System

- **Compiler**: TypeScript (`tsc`) - no bundler for the library itself
- **Output**: `.js`, `.d.ts`, and `.js.map` files alongside source
- **Target**: ES6
- **Strict mode**: Enabled (but `strictNullChecks` and `strictPropertyInitialization` are off)
- **Test files** (`*.test.ts`) are excluded from compilation

The example app uses Rollup (its own `package.json` and build setup).

## Testing

- **Framework**: Jest with ts-jest preset
- **Environment**: Node
- **Test pattern**: `**/?(*.)+(spec|test).ts?(x)`
- **Convention**: Arrange/Act/Assert pattern with Jest mocks

Tests are co-located with source files (`src/*.test.ts`). Run with `npm test`.

### Test structure:
- `index.test.ts` - Verifies `createI18nStore` is exported
- `i18n.test.ts` - Tests factory function with mocked `translation-store` module
- `translation-store.test.ts` - Tests store updates on i18next events (init, languageChanged, loadNamespaces)

## Dependencies

- **Zero runtime dependencies** - only peer dependencies
- **Peer deps**: `i18next` (any version), `svelte` (any version)
- **Dev deps**: Jest, ts-jest, TypeScript 4.9, type definitions

## CI/CD

GitHub Actions (`.github/workflows/ci.yml`):
- **On push/PR to main**: `yarn install --frozen-lockfile` -> `yarn build` -> `yarn test`
- **On tag push**: Runs tests, then publishes to npm via `npm publish`
- **Node**: 18
- **Package manager**: yarn with frozen lockfile

## Key Conventions

1. **TypeScript strict mode** is required - all source must type-check
2. **ES module syntax** - use `import`/`export`, not `require`
3. **Tests co-located** with source files using `.test.ts` suffix
4. **No linter/formatter config** (no ESLint or Prettier) - follow existing code style
5. **Minimal dependencies** - the library should remain zero-dependency (peers only)
6. **Svelte store pattern** - the core abstraction is wrapping i18next in `Writable<i18n>`

## Common Patterns

### Typical consumer usage
```typescript
import i18next from 'i18next';
import { createI18nStore, isLoading } from 'svelte-i18next';

i18next.init({ /* config */ });
const i18n = createI18nStore(i18next);
// In Svelte components: $i18n.t('key'), $isLoading
```

### SvelteKit SSR consideration
Use `setContext` to create per-request i18n store instances to avoid cross-request language contamination in server-side rendering.

## Making Changes

1. Edit TypeScript source in `src/`
2. Add or update tests in `src/*.test.ts`
3. Run `npm test` to verify tests pass
4. Run `npm run build` to verify TypeScript compilation
5. Run `npm run validate` if Svelte components are affected
