const daysContainerReducer = (state = {}, action) => {
  const { day, location, hours, booth, id } = action;
  switch (action.type) {
    case 'ADD_EDIT_DAY':
      return Object.assign({}, state, {
        [id]: {
          day: day,
          location: location,
          hours: hours,
          booth: booth,
          id: id,
        }
      });
    case 'DELETE_DAY':
      const newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
}

export default daysContainerReducer;
