## 1.问题描述
- 只要用cnpm 安装依赖，并且开启`cache:{ type: 'filesystem'}`就会卡死，打包无法成功 
- [issues地址](https://github.com/cnpm/cnpm/issues/335)

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
