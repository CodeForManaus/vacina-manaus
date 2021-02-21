const INITIAL_STATE = {
  vaccinationStatistics: [],
  vaccinationTrend: {},
  vaccinationMovingAvg: {},
}

export const vaccineReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_VACCINATION_STATISTICS':
      return { ...state, vaccinationStatistics: action.vaccinationStatistics }

    case 'FETCH_VACCINATION_TREND':
      return { ...state, vaccinationTrend: action.vaccinationTrend }

    case 'FETCH_VACCINATION_MOVING_AVG':
      return { ...state, vaccinationMovingAvg: action.vaccinationMovingAvg }

    default:
      return state
  }
}
