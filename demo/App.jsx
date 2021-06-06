import React, { Suspense } from 'react';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Provider, configureStore } from '../src/index';
import routes from './RouteConfig';
import { Spin } from 'antd';
import './App.less';

const Routes = () => {
  // 初始状态[可有可无]
  const initState = { app: { name: '杨过', age: 18 } };

  // 根据初始状态建立store
  const store = configureStore(initState);

  return (
    <Provider store={store}>
      <ConfigProvider locale={zhCN}>
        <BrowserRouter>
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
        </BrowserRouter>
      </ConfigProvider>
    </Provider>
  );
};

export default Routes;
