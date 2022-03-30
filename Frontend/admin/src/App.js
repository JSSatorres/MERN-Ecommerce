import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";

import LoginAdmin from "./pages/loginAdmin";
import AdminPage from "./pages/adminPage";
import PostProducts from "./pages/postProducts";
import NotFound from "./pages/notFound";
import Products from "./components/Products";
import "bootstrap/dist/css/bootstrap.min.css"


function App() {
  const queryClient = new QueryClient();

  return (
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<LoginAdmin />} />
          <Route path="/products" element={<Products />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/postproduct" element={<PostProducts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </QueryClientProvider>
  );
}

export default App;
