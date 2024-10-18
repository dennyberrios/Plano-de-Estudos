import { GlobalStyle } from "./components/UI/GlobalStyle";
import { UserProvider } from "./Context";
import RoutersApp from "./router";

const App = () => {
  return (
    <>
      <UserProvider>
        <GlobalStyle />
        <RoutersApp />
      </UserProvider>
    </>
  );
}

export default App;