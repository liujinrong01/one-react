
import { RouteProps } from "react-router-dom";

import Home from '../pages/Home'
import Find from '../pages/Find'
import Radio from '../pages/Radio'
import Mine from '../pages/Mine'
export enum ROUTES {
  HOME = "/",
  FIND = "/find",
  RADIO = "/radio",
  MINE = "/mine",
}



export const routes: RouteProps[] = [
  {
    path: ROUTES.HOME,
    element: <Home />,
  },
  {
    path: ROUTES.FIND,
    element: <Find  /> ,
  },
  {
    path: ROUTES.RADIO,
    element: <Radio />,
  },
  {
    path: ROUTES.MINE,
    element: <Mine />,
  }
];

