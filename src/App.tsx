import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {routes} from './routes'
import './App.less';
import Layout from './components/Layout'



function App() {
  return (
    <BrowserRouter>
      <Layout tabs={[
        {
          title: '首页',
          link: '/'
        },
        {
          title: '发现',
          link: '/find'
        }
      ]}>
        <Routes>
          {
            routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element}></Route>
            ))
          }
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
