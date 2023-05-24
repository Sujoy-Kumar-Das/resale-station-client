import { RouterProvider } from "react-router-dom";
import { route } from "./router/router/Router";

function App() {
  return (
    <div className=" max-w-[95%] mx-auto">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
