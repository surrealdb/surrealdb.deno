<br>

<p align="center">
    <img width=120 src="https://raw.githubusercontent.com/surrealdb/icons/main/surreal.svg" />
    &nbsp;
    <img width=120 src="https://raw.githubusercontent.com/surrealdb/icons/main/deno.svg" />
</p>

<h3 align="center">A Deno engine for the SurrealDB JavaScript SDK.</h3>

<br>

<p align="center">
    <a href="https://github.com/surrealdb/surrealdb.deno"><img src="https://img.shields.io/badge/status-dev-ff00bb.svg?style=flat-square"></a>
    &nbsp;
    <a href="https://surrealdb.com/docs/integration/libraries/javascript"><img src="https://img.shields.io/badge/docs-view-44cc11.svg?style=flat-square"></a>
    &nbsp;
    <a href="https://deno.land/x/surrealdb.deno"><img src="https://img.shields.io/badge/deno-view-ee8449.svg?style=flat-square"></a>
</p>

<p align="center">
    <a href="https://surrealdb.com/discord"><img src="https://img.shields.io/discord/902568124350599239?label=discord&style=flat-square&color=5a66f6"></a>
    &nbsp;
    <a href="https://twitter.com/surrealdb"><img src="https://img.shields.io/badge/twitter-follow_us-1d9bf0.svg?style=flat-square"></a>
    &nbsp;
    <a href="https://www.linkedin.com/company/surrealdb/"><img src="https://img.shields.io/badge/linkedin-connect_with_us-0a66c2.svg?style=flat-square"></a>
    &nbsp;
    <a href="https://www.youtube.com/channel/UCjf2teVEuYVvvVC-gFZNq6w"><img src="https://img.shields.io/badge/youtube-subscribe-fc1c1c.svg?style=flat-square"></a>
</p>

# surrealdb.deno

A Deno engine for the SurrealDB JavaScript SDK.

> This library is under active development and is not yet released.

This library is a plugin for the SurrealDB JavaScript SDK, which can be used to run SurrealDB as an embedded database within a Deno server side environment.

It enables SurrealDB to be run in-memory, or to persist data by running on top of SurrealKV. It allows for a consistent JavaScript and TypeScript API when using the `surrealdb.js` library by adding support for embedded storage engines (`memory`, `surrealkv`) alongside the remote connection protocols (`http`, `https`, `ws`, `wss`).

## Example usage

```js
import Surreal from "https://deno.land/x/surrealdb/mod.ts";
import { surrealdbDenoEngines } from "https://deno.land/x/surrealdb.deno/mod.ts";

// Enable the WebAssembly engines
const db = new Surreal({
    engines: surrealdbDenoEngines(),
});

// Now we can start SurrealDB as an in-memory database
await db.connect("mem://");
// Or we can start a persisted SurrealKV database
await db.connect("surrealkv://demo");

// Now use the JavaScript SDK as normal.
```
