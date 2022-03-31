import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";

import LoginAdmin from "./pages/loginAdmin";
import AdminPage from "./pages/adminPage";
import PostProducts from "./pages/postProducts";
import NotFound from "./pages/notFound";
import Products from "./components/Products";
// import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/home";

import {AuthProvider} from "./context/authContext";
import RegisterAdmin from "./pages/registerAdmin";
// import { onAuthStateChanged, signOut } from "firebase/auth";

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="bg-slate-200 h-screen text-white flex">
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
        
          <Routes>
            {/* <Route path="/" element={<LoginAdmin />} > */}
            <Route path="/" element={<RegisterAdmin />} />
            <Route path="/login" element={<LoginAdmin />} />
            <Route path="home" element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="admin" element={<AdminPage />} />
            <Route path="postproduct" element={<PostProducts />} />
            <Route path="*" element={<NotFound />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </AuthProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
