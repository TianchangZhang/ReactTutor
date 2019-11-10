export default (state = {reduxName: 'reduxName'}, action) => {
    switch (action.type) {
        case 'SIMPLE_ACTION':
      return {
       result: action.payload,
          ...state
      }
     default:
      return state
    }
   }