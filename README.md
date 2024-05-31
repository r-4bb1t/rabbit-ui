# rabbit-ui

> UI components for Next.js with Tailwind CSS

[demo](https://ui.r4bb1t.dev/)

## How to use

```ts
// layout.tsx
import { Header, Layout } from "@r-4bb1t/rabbit-ui";
...
export default function App() {
  return (
    <Layout className="flex" mobileFirst>
      <Header title="..." mobileFirst />
      {children}
    </Layout>
  );
}
```

```ts
// tailwind.config.ts
import type { Config } from "tailwindcss";

import { tailwindPreset } from "@r-4bb1t/rabbit-ui";

const config: Config = {
  presets: [tailwindPreset],
  // ...
};

export default config;
```

## todo

- form
  - file (+ dnd)
- layout
  - footer
