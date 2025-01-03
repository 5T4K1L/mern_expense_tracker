export const dateReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIME": {
      const currentHour = action.payload;

      if (currentHour >= 5 && currentHour < 12) {
        return "Morning";
      } else if (currentHour >= 12 && currentHour < 18) {
        return "Afternoon";
      } else {
        return "Evening";
      }
    }
    default:
      return state;
  }
};
