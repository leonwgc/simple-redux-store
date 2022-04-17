
## simple-redux-store

react hooks & redux 简单全局状态管理

### 特点
1. 简单，一共4个api，2个用于配置状态，1个用于读取, 1个用于更新
2. 支持 web / node(ssr) / taro / 微信小程序等环境 
3. 支持redux开发者工具

### 安装

[npm](https://npmjs.org/) / [yarn](https://yarnpkg.com) 安装:

    $ npm install --save simple-redux-store
    $ yarn add simple-redux-store

### 使用

1. 创建store, 通过Provider提供全局store

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, configureStore } from 'simple-redux-store';
import App from './App';

// 初始状态
const initialState = { name: 'name', age: 1 };

// 创建store
// 第一个参数传入应用初始状态（如果有）
// 第二个参数开发时传true 可以在redux-devtool追踪状态, 传false禁止redux-devtool
const store = configureStore(initialState, true);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

```
此时可以通过redux devtool 查看到初始状态


![c1.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0016aad1ff7d46fabc88eb6730bc6fff~tplv-k3u1fbpfcp-watermark.image)

2. 读取状态，更新store

-  通过 useAppData 读取状态 
-  通过 useUpdateStore 更新状态

