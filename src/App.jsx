import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, NewsPage,RegisterPage } from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lifecycle" element={<NewsPage />} />
        <Route path="/auth" element={<RegisterPage />} />
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
