import rand from "../Functions/rand";

function ld(state, action) {
  const newState = [...state];

  switch (action.type) {
    case "bid_desc":
      newState.sort((a, b) => b.bid - a.bid);
      break;
    case "bid_asc":
      newState.sort((a, b) => a.bid - b.bid);
      break;
    case "name_asc":
      newState.sort((a, b) => {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
      });
      break;
    case "name_desc":
      newState.sort((a, b) => {
        if (a.name > b.name) return -1;
        if (a.name < b.name) return 1;
        return 0;
      });
      break;
    case "name_asc_local":
      newState.sort((a, b) => a.name.localeCompare(b.name, "lt")); // sort pagal lt raides;
      break;
    case "date_asc":
      newState.sort((a, b) => {
        const ad = new Date(a.date);
        const bd = new Date(b.date);
        if (ad > bd) return 1;
        if (ad < bd) return -1;
        return 0;
      });
      break;
    case "date_desc":
      newState.sort((a, b) => {
        const ad = new Date(a.date);
        const bd = new Date(b.date);
        if (ad > bd) return -1;
        if (ad < bd) return 1;
        return 0;
      });
      break;
    case "random":
      newState.sort(() => rand(0, 1) ? 1 : -1);
      break;
    default:
  }

  return newState;
}

export default ld;
