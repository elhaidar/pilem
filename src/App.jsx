import { Provider } from "./components/context/Context";
import AuthLayouts from "./components/layouts/AuthLayouts";

const App = () => {
  return (
    <>
      <Provider>
        <AuthLayouts />
      </Provider>
    </>
  );
};

export default App;
