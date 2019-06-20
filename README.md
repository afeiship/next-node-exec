# next-node-exec
> Node exec for next.

## installation
```bash
npm install -S afeiship/next-node-exec --registry=https://registry.npm.taobao.org
```

## usage
```js
import 'next-node-exec';

nx.nodeExec('npm run build').then((response) => {
  console.log('do what you want');
});
```
