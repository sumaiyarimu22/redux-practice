/* eslint-disable react-refresh/only-export-components */
import { connect } from "react-redux";
import { increment, decrement } from "../redux/counter/actions";
import {
  increment as daynamicIncrement,
  decrement as daynamicDecrement,
} from "../redux/daynamicCounter/daynamicAction";

// eslint-disable-next-line react/prop-types
const VariableCounter = ({ count, increment, decrement }) => {
  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div className="text-2xl font-semibold">{count}</div>
      <div className="flex space-x-3">
        <button
          className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
          onClick={increment}
        >
          Increment
        </button>
        <button
          className="bg-red-400 text-white px-3 py-2 rounded shadow"
          onClick={decrement}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    count: ownProps.daynamic
      ? state.daynamicCounter.value
      : state.counter.value,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    increment: ownProps.daynamic
      ? (value) => dispatch(daynamicIncrement(5))
      : () => dispatch(increment()),
    decrement: ownProps.daynamic
      ? (value) => dispatch(daynamicDecrement(5))
      : () => dispatch(decrement()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VariableCounter);
//1. connect to react redux
//2. connection ta higher order component
//3. connet function ke call korar por amra amader component pass kori return new component
