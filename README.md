## Configurations

### Main Component (`main.vue`)

```vue
<template>
  <div class="m-2">
    <NuxtLayout>
      <Header />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
```

### Nuxt Configuration (`nuxt.config.ts`)

```typescript
import { defineNuxtConfig } from "nuxt3";

export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    // "@": resolve(__dirname, '/'), // Uncomment if needed
    assets: "/<rootDir>/assets",
  },
  css: ["~/assets/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
```

### Additional Setup Steps

1. Install Sass: Execute `npm install sass` in the terminal.
2. Install Tailwind CSS: Refer to the Tailwind CSS documentation for installation instructions.

## Directory Structure Overview

- `pages`: Contains route components. Routes are automatically recognized.
  - Example: `<NuxtLink to="/profiles/someElse">Profiles/someElse</NuxtLink>`
- `components`: Components in this directory can be used without import statements.
  - Example: `<ProfileHeaderAvatar />`
- `assets`: Static assets like images.
  - Example: `<img src="@/assets/1.jpg" />`
- `public`: Publicly accessible assets.
  - Example: `<img src="/2.jpg" />`
- `layouts`: Layout components, with `default.vue` as the default layout.
  - Custom Layout Example:
    ```js
    <script setup>
      definePageMeta({ layout: 'custom' });
    </script>
    ```
- `composables`: Place reusable functions here.
  - Example:
    ```js
    // composables/useUtils.ts
    export const useUtils = () => {
      const sayHello = () => console.log("Hello from composable");
      return { sayHello };
    };
    // Usage in a component
    <script setup>
      const { sayHello } = useUtils();
      sayHello();
    </script>
    ```
- `plugins`: Plugins that execute before composables and are globally available.
  - Example:
    ```js
    // plugins/myPlugin.ts
    export default defineNuxtPlugin((nuxtApp) => {
      return {
        provide: {
          myPlugin: (msg: string) => console.log(`Hello ${msg}`)
        }
      };
    });
    // Usage in a component
    <script setup>
      const { $myPlugin } = useNuxtApp();
      $myPlugin('Madusanka');
    </script>
    ```
- `middleware`: Middleware can be global or local.
  - Global Middleware Example:
    ```js
    // middleware/auth.global.ts
    export default defineNuxtRouteMiddleware((to, from) => {
      console.log(to);
      console.log(from);
    });
    ```
  - Local Middleware Example:
    ```js
    // middleware/local.ts
    export default defineNuxtRouteMiddleware((to, from) => {
      console.log('Hello from local middleware...');
    });
    // Usage in a page component
    <script setup>
      definePageMeta({ middleware: "local" });
    </script>
    ```
- `stores`: Manage state with `useState` or `Pinia`.
  - `useState` Example:
    ```js
    // composables/states.ts
    export const useColor = () => useState<string>('color', () => 'pink');
    // Usage in a component
    <script setup lang="ts">
      const color = useColor();
    </script>
    <template>
      <p>Current color: {{ color }}</p>
    </template>
    ```
  - `Pinia` Example:
    ```js
    // stores/website.ts
    export const useWebsiteStore = defineStore('websiteStore', {
      state: () => ({
        name: '',
        description: ''
      }),
      actions: {
        async fetch() {
          const infos = await $fetch('https://api.nuxt.com/modules/pinia');
          this.name = infos.name;
          this.description = infos.description;
        }
      }
    });
    // Usage in a component
    <script setup lang="ts">
      const website = useWebsiteStore();
      await callOnce(website.fetch);
    </script>
    <template>
      <h1>{{ website.name }}</h1>
      <p>{{ website.description }}</p>
    </template>
    ```

For setting up Pinia, please follow the instructions provided in the Pinia documentation(https://pinia.vuejs.org/ssr/nuxt.html#Installation)
