const DEFAULT_STATE = {
    data: [],
    loading: false,
    error: null,
  }
  
  export const notesReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
      case 'NOTES/LOADING':
        return {
          ...state,
          loading: true,
          error: null,
        }
      case 'NOTES/SET':
        return {
          ...state,
          loading: false,
          error: null,
          data: action.payload,
        }
        case 'NOTES/DELETE':
        return {
          loading: false,
          error: null,
          data: action.payload,
        }
      case 'NOTES/ERROR':
        return {
          ...state,
          loading: false,
          error: action.payload,
        }
      default:
        return state
    }
  }