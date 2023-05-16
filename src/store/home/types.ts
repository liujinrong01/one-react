export interface DateState {
  dateData: Map<string, any> // 用于保存请求过的日期数据，键为日期，值为对应的数据
}

export  interface DateDataState {
  dateData: DateState;
}

export interface SetDateDataAction {
  type: "SET_DATE_DATA";
  date: string;
  data: any;
  playload: {
    date: string;
    data: any;
  }
}

export type DateDataAction = SetDateDataAction;
