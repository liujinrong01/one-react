// store/common/actions.ts

export const SET_TITLE = 'SET_TITLE';

export const setTitle = (title: string) => ({
  type: SET_TITLE,
  payload: title,
});
