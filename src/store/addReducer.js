const defaultState = {
  numbers: [1,2,3,4]
}

export default (state = defaultState, action) => {
  switch(action.type) {   
    default:
      return state;
  }
}