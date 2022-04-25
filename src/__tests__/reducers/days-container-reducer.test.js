import daysContainerReducer from '../../reducers/days-container-reducer.js'


describe("daysContainerReducer", () => {
  let action;
  const dayData = {
    day: "Monday",
    location: "Overlook Park",
    hours: "10AM - 12PM",
    booth: "2J",
    id: 1,
  }
  const currentState = {
    1: {
      day: "Monday",
      location: "Overlook Park",
      hours: "10AM - 12PM",
      booth: "2J",
      id: 1,
    },
    2: {
      day: "Tuesday",
      location: "Forest Park",
      hours: "12AM - 4AM",
      booth: "8K",
      id: 2,
    }
  };

  test('Should return default state if no action type is recognized', () => {
    expect(daysContainerReducer({}, { type: null })).toEqual({});
  });

  test('Should add a new day to the schedule', () => {
    const { day, location, hours, booth, id } = dayData;
    action = {
      type: 'ADD_EDIT_DAY',
      day: day,
      location: location,
      hours: hours,
      booth: booth,
      id: id,
    };
    expect(daysContainerReducer({}, action)).toEqual({
      [id]: {
        day: day,
        location: location,
        hours: hours,
        booth: booth,
        id: id,
      }
    });
  });

  test("Should successfully delete a day", () => {
    action = {
      type: "DELETE_DAY",
      id: 1,
    };
    expect(daysContainerReducer(currentState, action)).toEqual({
      "Tuesday": {
        2: "Tuesday",
        location: "Forest Park",
        hours: "12AM - 4AM",
        booth: "8K",
        id: 2,
      }
    })
  })
});
