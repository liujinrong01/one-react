

export interface HomeState {
  dateData: any,
  city: string
}

const initialState: HomeState = {
  dateData: {},
  city: 'shanghai'
}

export default function homeReducer(state = initialState, action: any) {
  switch (action.type) {
    case 'SET_CITY':
      return {
        ...state,
        city: action.payload.city
      };
    case 'SET_DATE_DATA':
      const { date, data } = action.payload;
      return {
        ...state,
        dateData: {
          ...state.dateData,
          [date]: data
        }
      };
    default:
      return state;
  }
}
