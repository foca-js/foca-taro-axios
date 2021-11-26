# foca-miniprogram-axios

针对 axios 请求库的增强型适配器，适用于 [Taro](https://github.com/nervjs/taro), [Remax](https://github.com/remaxjs/remax) 等跨端平台。

[![License](https://img.shields.io/github/license/foca-js/foca-miniprogram-axios)](https://github.com/foca-js/foca-miniprogram-axios/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/foca-miniprogram-axios)](https://www.npmjs.com/package/foca-miniprogram-axios)

# 特性

- 合并相同的并发请求
- 失败重试
- 缓存响应成功的数据
- 优化 axios 返回值

# 支持平台

- 微信小程序
- 支付宝小程序
- 钉钉小程序
- 百度小程序
- react-web
- react-native
- nodejs

小程序基于适配器 [axios-miniprogram-adapter](https://github.com/bigmeow/axios-miniprogram-adapter)

# 安装

```bash
yarn add axios foca-miniprogram-axios
```

# 使用

```typescript
// File: http.ts
import axios from 'axios';
import { enhance } from 'foca-miniprogram-axios';

const instance = axios.create();
export const http = enhance(instance); // http === instance
```
