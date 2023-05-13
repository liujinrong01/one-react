import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {routes} from './routes'

import './styles/index.less'
import './App.less';
import Layout from './components/Layout'



function App() {


  return (
    <BrowserRouter>
      <Layout>
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
