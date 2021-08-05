export const reducer = (state, action) => {
  switch (action.type) {
    case "ADDING_ITEM":
      const newItems = [...state.people, action.payload];
      return {
        ...state,
        people: newItems,
        isModalOpen: true,
        modalContent: "Item Added!",
      };

    case "NO_TYPE":
      return {
        ...state,
        isModalOpen: true,
        modalContent: "Please enter some value!",
      };

    case "CLOSE_MODAL":
      return {
        ...state,
        isModalOpen: false,
      };

    case "REMOVE_ITEM":
      return {
        ...state,
        people: state.people.filter((item) => item.id !== action.payload),
        modalContent: "item deleted!",
        isModalOpen: true,
      };

    default:
      return state;
  }
};
