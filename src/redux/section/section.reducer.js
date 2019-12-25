const INITIAL_STATE = {
  sections: [
    {
      id: 1,
      title: 'Today',
      start: 0,
      end: 1,
    },
    {
      id: 2,
      title: 'Tomorrow',
      start: 1,
      end: 2,
    },
    {
      id: 3,
      title: 'Upcoming',
      start: 2,
    },
  ]
}

const sectionReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

export default sectionReducer;