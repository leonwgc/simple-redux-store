
# simple-redux-store

基于react hooks/redux的简单存储方案

## 安装

用 npm [npm](https://npmjs.org/) / [yarn](https://yarnpkg.com) 安装:

    $ npm install --save simple-redux-store
    $ yarn add simple-redux-store

#### 使用

##### 1 .建立store 
```js
import React, { Suspense } from 'react';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter, Provider, configureStore, history } from 'simple-redux-store';
import routes from './RouteConfig';
import { Spin } from 'antd';
import 'dayjs/locale/zh-cn';
import dayjs from 'dayjs';

dayjs.locale('zh-cn');

const Routes = () => {
  // 初始状态[可有可无]
  const initState = { app: { name: '杨过', age: 18 } };

  // 根据初始状态建立store
  const store = configureStore(initState);

  return (
    <Provider store={store}>
      <ConfigProvider locale={zhCN}>
        <ConnectedRouter history={history}>
          <Suspense fallback={<Spin />}>
            <Switch>
              {routes.map((route, idx) => (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              ))}
              <Route render={() => <div>page not found</div>} />
            </Switch>
          </Suspense>
        </ConnectedRouter>
      </ConfigProvider>
    </Provider>
  );
};

export default Routes;

```
##### 2 .读取/更新store 

```js
import React, { useState, useEffect } from 'react';
import { useSelector, useUpdateStore } from 'simple-redux-store';

const Page = () => {
  // 读取redux store 
  const app = useSelector((s) => s.app);
  //用于更新store 
  const updateStore = useUpdateStore();

  useEffect(() => {
    updateStore({ name: '小龙女', age: 35, gender: 'female' });
  }, []);
};

```

更新前后redux状态

![s1.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/eb397556bf6148709af9edc627698942~tplv-k3u1fbpfcp-watermark.image)


![s2.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e6bfaf28c46f437d93c41b5a12d15eaa~tplv-k3u1fbpfcp-watermark.image)