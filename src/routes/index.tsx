
import { RouteProps } from "react-router-dom";

import Home from '../pages/Home'
import Find from '../pages/Find'
import Radio from '../pages/Radio'
import Mine from '../pages/Mine'
import DayDetail from '@/pages/Detail/DayDetail'
import PostDetail from '@/pages/Detail/PostDetail'
import TopicDetail from "@/pages/Detail/TopicDetail";
import QuestionDetail from "@/pages/Detail/QuestionDetail";
export enum ROUTES {
  HOME = "/",
  FIND = "/find",
  RADIO = "/radio",
  MINE = "/mine",
  DAYDETAIL = "/daydetail/:id",
  POSTDETAIL = "/postdetail/:id",
  TOPICDETAIL = "/topicdetail/:id",
  QUESTIONDETAIL = "/questiondetail/:id"

}



export const routes: any = [
  {
    path: ROUTES.HOME,
    element: <Home />,
    hasLayout: true,
    // keepalive: true,
  },
  {
    path: ROUTES.FIND,
    element: <Find  /> ,
    hasLayout: true,
    // keepalive: true,
  },
  {
    path: ROUTES.RADIO,
    element: <Radio />,
    hasLayout: true,
    // keepalive: true,
  },
  {
    path: ROUTES.MINE,
    element: <Mine />,
    hasLayout: true,
    // keepalive: true,

  },
  {
    path: ROUTES.DAYDETAIL,
    element: <DayDetail />,
    hasLayout: false,
  },

  {
    path: ROUTES.POSTDETAIL,
    element: <PostDetail />,
    hasLayout: false,
  },
  {
    path: ROUTES.TOPICDETAIL,
    element: <TopicDetail />,
    hasLayout: false,
  },
  {
    path: ROUTES.QUESTIONDETAIL,
    element: <QuestionDetail />,
    hasLayout: false,
  }
];

