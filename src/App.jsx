import Admin from "./components/Admin";
import Body from "./components/Body";
import { DataProvider } from "./context/DataContext";
import Cart from "./components/Cart";

const App = () => {
  return (
    <div>
      <DataProvider>
        <Admin />
        <Body />
        <Cart />
      </DataProvider>

    </div>
  )
}

export default App
