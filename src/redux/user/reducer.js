const DEFAULT_STATE = {
  data: null,
  loading: false,
  error: null,
}

export const userReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'USER/SET':
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
        email: action.payload.email,
        createdAt: action.payload.createdAt,
      }
      case 'USER/SAVE':
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
      }
    case 'USER/SET':
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
      }
      case "LAYOUT":
      return {
        ...state,
        data: null,
      }
    default:
      return state
  }
}