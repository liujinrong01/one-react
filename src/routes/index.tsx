
import { RouteProps } from "react-router-dom";

import Home from '../pages/Home'
import Find from '../pages/Find'
import Radio from '../pages/Radio'
import Mine from '../pages/Mine'
import DayDetail from '@/pages/Detail/DayDetail'
export enum ROUTES {
  HOME = "/",
  FIND = "/find",
  RADIO = "/radio",
  MINE = "/mine",
  DAYDETAIL = "/daydetail/:id",
}



export const routes: any = [
  {
    path: ROUTES.HOME,
    element: <Home />,
    hasLayout: true,
  },
  {
    path: ROUTES.FIND,
    element: <Find  /> ,
    hasLayout: true,

  },
  {
    path: ROUTES.RADIO,
    element: <Radio />,
    hasLayout: true,

  },
  {
    path: ROUTES.MINE,
    element: <Mine />,
    hasLayout: true,

  },
  {
    path: ROUTES.DAYDETAIL,
    element: <DayDetail />,
    hasLayout: false,
  }
];

