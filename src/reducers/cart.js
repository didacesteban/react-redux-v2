export default(state = [], playload) => {
  switch (playload.type) {
    case 'add':
          return [...state, playload.item];
    default:
          return state;
  }
};
