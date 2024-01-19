// store/common/reducer.ts

import { SET_TITLE } from './actions';

const initialState = {
  title: '',
  // 其他 common reducer 的初始状态
};

export default function commonReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_TITLE:
      return {
        ...state,
        title: action.payload,
      };
    // 处理其他 common action
    default:
      return state;
  }
}
