

# 简单好用的 redux 状态管理

### 安装

[npm](https://npmjs.org/) / [yarn](https://yarnpkg.com)

    $ npm install --save simple-redux-store
    $ yarn add simple-redux-store

### 特点

1. 简单, 一共4个api，configureStore用于创建全局状态，Provider组件将store提供给子孙组件，useAppData用于获取状态，useUpdateStore 获取更新状态的函数
2. 支持 web/node/taro/微信小程序等环境

### Usage

1. 创建 store, 通过Provider提供给子组件
```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, configureStore } from 'simple-redux-store';
import App from './App';

const store = configureStore({ name: 'leonwgc' }, true);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

2.读取状态

```js
import React from 'react';
import { useAppData } from 'simple-redux-store';

export default function App() {
  // 获取全部全局状态, 任何状态变更都会导致组件重新渲染
  const app = useAppData();

  return <div>hello {app.name}</div>;
}
```

```js
import React from 'react';
import { useAppData } from 'simple-redux-store';

export default function App() {
  // 获取组件需要的状态，相关状态变化才重新渲染，状态变化默认使用对象浅比较算法
  // 你也可以提供自己的算法 type EqualityFn = (left: any, right: any) => boolean
  // 这里state.app.name变化组件才会重新渲染
  const app = useAppData('name');

  return <div>hello {app.name}</div>;
}
```

3.更新状态

```js
import React from 'react';
import { useUpdateStore, useAppData } from 'simple-redux-store';

export default function App() {
  const updateStore = useUpdateStore();

  const { name = 'default' } = useAppData('name');

  return (
    <div
      onClick={() => {
        updateStore({ name: 'new name' });
      }}
    >
      {app.name}
    </div>
  );
}
```
