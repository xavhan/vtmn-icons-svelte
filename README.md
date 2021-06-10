# vtmn-icons-svelte

> Vitamin SVG icons as Svelte components.

This library builds icons from [Vitamin Web Icons](https://www.npmjs.com/package/@vtmn/icons) as Svelte components with zero dependencies.

## Install

```bash
yarn add -D @vtmn/icons-svelte
# OR
npm i -D @vtmn/icons-svelte
```

## Usage

```svelte
<script>
  import { AddFill, AddLine, AlertFill } from '@vtmn/icons-svelte';
</script>

<AddFill />
<AddLine />
<AlertFill />
```

Refer to [ICON_INDEX.md](ICON_INDEX.md) for a full list of icons.

## API

`$$restProps` are forwarded to the `svg` element.

**NOTE:** Width and height are set to 16px by default

### Forwarded events

- on:click
- on:mouseover
- on:mouseenter
- on:mouseout
- on:keydown

## Rendering using `svelte:component`

```svelte
<script>
  import * as icons from "svelte-baseui-icons";
</script>

{#each Object.keys(icons) as icon}
  <div>
    <svelte:component title="{icon}" this={icons[icon]} width={24} />
    {icon}
  </div>
{/each}
```
