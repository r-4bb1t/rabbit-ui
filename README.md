# rabbitui

## How to use

```ts
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

### Layout

| Prop        | Type    | Default | Required | Description                                                                                            |
| ----------- | ------- | ------- | -------- | ------------------------------------------------------------------------------------------------------ |
| mobileFirst | boolean | false   | True     | if `true`, the max with of layout would be 448px, so the screen would look like a mobile screen on PC. |

### Header

| Prop  | Type            | Default | Required | Description                        |
| ----- | --------------- | ------- | -------- | ---------------------------------- |
| title | React.ReactNode |         | True     | The title component of the header. |

## todo

- form
  - select
  - file (+ dnd)
- layout
  - header
  - footer
