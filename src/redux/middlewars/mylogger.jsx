import rootReducer from "../rootReducer";

//create out first middleware
const myLogger = (store) => (next) => (action) => {
  console.log(`action:${JSON.stringify(action)}`);
  console.log(`before:${JSON.stringify(store.getState())}`);

  const upcommingState = [action].reduce(rootReducer, store.getState());
  console.log(`upcomming state:${JSON.stringify(upcommingState)}`);

  return next(action);
};
export default myLogger;
