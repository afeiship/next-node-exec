# next-node-exec
> Node exec for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-node-exec
```

## usage
```js
import '@jswork/next-node-exec';

nx.nodeExec('npm run build').then(res=>{
  console.log(res);
});
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-node-exec/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-node-exec
[version-url]: https://npmjs.org/package/@jswork/next-node-exec

[license-image]: https://img.shields.io/npm/l/@jswork/next-node-exec
[license-url]: https://github.com/afeiship/next-node-exec/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-node-exec
[size-url]: https://github.com/afeiship/next-node-exec/blob/master/dist/next-node-exec.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-node-exec
[download-url]: https://www.npmjs.com/package/@jswork/next-node-exec
