import Login from "./components/1.Login/1.Login";
import Validation from "./components/2.Validation/1.Validation";
import ResetPassword from "./components/2.Validation/2.ResetPassword";

function App() {
  return (
    <div className="w-full h-full flex flex-col overflow-x-hidden">
      <Login />
      <Validation />
      <ResetPassword />
    </div>
  );
}

export default App;
