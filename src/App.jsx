import { Provider } from "react-redux";
import store from "./redux/store";
import HooksCounter from "./components/hoocksCounter";
import DaynamicHooksCounter from "./components/daynamicHooksCounter";
// import Counter from "./components/Counter";

const App = () => {
  return (
    <Provider store={store}>
      <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
        <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
          Simple Counter Application
        </h1>

        <div className="max-w-md mx-auto mt-10 space-y-5">
          <HooksCounter />
          <DaynamicHooksCounter />
        </div>
      </div>
    </Provider>
  );
};

export default App;
