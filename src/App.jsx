import { RouterProvider } from "react-router-dom";
import { route } from "./router/router/Router";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className=" max-w-[95%] mx-auto">
      <RouterProvider router={route}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
