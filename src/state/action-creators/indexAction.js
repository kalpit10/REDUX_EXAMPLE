//THIS FILE IS LIKE A MESSAGE THAT DESCRIBES SOMETHING HAPPENED IN OUR APPLICATION
//DECLARING WHAT IS THE ACTION

export const depositMoney = (amount) => {
  return (dispatch) => {
    //here dispatch is itsef a function that is being called here
    dispatch({
      type: "deposit",
      //tell how much to deposit
      payload: amount,
    });
  };
};

export const withdrawMoney = (amount) => {
  return (dispatch) => {
    //here dispatch is itsef a function that is being called here
    dispatch({
      type: "withdraw",
      //tell how much to deposit
      payload: amount,
    });
  };
};
