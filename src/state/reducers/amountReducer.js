//IT IS A FUNCTION THAT TAKES THE CURRENT STATE AND AN ACTION
//IT DECIDES HOW THE STATE TO BE CHANGED BASED ON THAT ACTION

const reducer = (state = 0, action) => {
  if (action.type === "deposit") {
    //IF DEPOSIT, INCREMENT
    return state + action.payload;
  } else if (action.type === "withdraw") {
    //IF WITHDRAW, DECREMENT
    return state - action.payload;
  } else {
    return state;
  }
};
export default reducer;
