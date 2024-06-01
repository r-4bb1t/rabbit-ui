# rabbit-ui

> UI components for Next.js with Tailwind CSS (WIP)

[demo](https://ui.r4bb1t.dev/)

## How to use

```ts
// layout.tsx
import { Header, Layout } from "@r-4bb1t/rabbit-ui";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <Layout {...}>
          <Header {...}/>
          {children}
        </Layout>
      </body>
    </html>
  );
}

```

```ts
// tailwind.config.ts
import type { Config } from "tailwindcss";

import { tailwindPreset } from "@r-4bb1t/rabbit-ui";

const config: Config = {
  presets: [tailwindPreset],
  content: [
    "./node_modules/@r-4bb1t/rabbit-ui/dist/**/*.{js,jsx,ts,tsx}",
    //...
  ],
  // ...
};

export default config;
```

## todo

- form
  - file (+ dnd)
- layout
  - footer
