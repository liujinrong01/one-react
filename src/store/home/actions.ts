
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";

import  HomeApi from "../../api/home";
import {HomeState} from './reducer'

interface SetDateDataAction {
  type: 'SET_DATE_DATA',
  payload: {
    date: string,
    data: any
  }
}

export const setDateData = (date: string, data: any): SetDateDataAction => ({
  type: 'SET_DATE_DATA',
  payload: {
    date,
    data
  }
})

export const fetchHomeData = (
  date: string,
): ThunkAction<void, HomeState, unknown, Action<string>> => async (
  dispatch,
  getState: any
) => {

  console.log('getState()', getState(), getState().home.dateData[date]);
  if (getState().home.dateData[date]) {

    return;
  }
  try {
    const response = await HomeApi.getHomeData({date, city: getState().home.city});
    response.data.content_list.forEach((item: any) => {
        const map = new Map([
          ['0', ''],
          ['1', '阅 读'],
          ['2', ''],
          ["3", '问 答'],
          ['4', ''],
          ['5', ''],
          ['8', '收音机']
        ]);
        item.type_str = item.tag_list.length ? item.tag_list[0]?.title : map.get(item.content_type)
      })
    dispatch(setDateData(date, response.data));
  } catch (error) {
  }
};
