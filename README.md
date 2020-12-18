## 1.最小复现仓库
### 1. 安装 
```js
cnpm install
```

### 2.编译
```js
npm run build
``` 

## 3.关键配置
```diff
const path = require('path');
module.exports = {
    mode: 'development',
    devtool:false,
    entry:'./src/index.js',
+    snapshot: {
+        managedPaths: [path.resolve(__dirname, 'node_modules')],
+    },
+    cache:{
+        type: 'filesystem'
+    },
    module: {
        rules: []
    },
    plugins:[]
}

```
