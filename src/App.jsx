import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage,RegisterPage, ReduxTaskPage, LifecyclePage } from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HooksPage from "./pages/hooks";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lifecycle" element={<LifecyclePage />} />
        <Route path="/hooks" element={<HooksPage />} />
        <Route path="/auth" element={<RegisterPage />} />
        <Route path="/count" element={<ReduxTaskPage />} />
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="black"
        style={{ color: "black" }}
      />
    </BrowserRouter>
  );
}

export default App;
