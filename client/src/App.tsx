import { RouterProvider } from "react-router-dom";
import './validation/yupExtensions.ts';
import { router } from "./routes";
import './App.css';

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
