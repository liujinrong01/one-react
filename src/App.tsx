import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { AliveScope, KeepAlive } from 'react-activation';
import { Provider } from 'react-redux';
import store from './store';


import {routes} from './routes'
import './styles/index.less'
import './App.less';
import Layout from './components/Layout'
import {useEffect} from "react";

function App() {
  const layoutRoutes = routes.filter((route: any) => route.hasLayout);
  const noLayoutRoutes = routes.filter((route: any) => !route.hasLayout);

  useEffect(() => {
    console.log('app');
  }, []);

  return (
    <Provider store={store}>
        <BrowserRouter>
          <AliveScope>

          <Routes>
            <Route path="/" element={<Layout />}>
              {layoutRoutes.map((route: any) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={
                    route.keepalive ? (
                      <KeepAlive name={route.path}>{route.element}</KeepAlive>
                    ) : (
                      route.element
                    )
                  }
                />
              ))}
            </Route>
            {noLayoutRoutes.map((route: any) => (
              <Route
                key={route.path}
                path={route.path}
                element={
                  route.keepalive ? (
                    <KeepAlive name={route.path}>{route.element}</KeepAlive>
                  ) : (
                    route.element
                  )
                }
              />
            ))}
          </Routes>
          </AliveScope>
        </BrowserRouter>
    </Provider>
  );
}

export default App;
