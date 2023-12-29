import React from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from "../state/index";
import { bindActionCreators } from "redux";

function Shop() {
  const dispatch = useDispatch();
  // bindActionCreators takes all the functions inside it to call
  const { withdrawMoney, depositMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );
  return (
    <div>
      <h2>Deposit/Withdraw Money</h2>
      <button
        className="btn btn-primary mx-2"
        onClick={() => {
          withdrawMoney(100);
        }}
      >
        -
      </button>
      Update Balance
      <button
        className="btn btn-primary mx-2"
        onClick={() => {
          depositMoney(100);
        }}
      >
        +
      </button>
    </div>
  );
}

export default Shop;
