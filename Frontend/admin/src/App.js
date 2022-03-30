import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";

import LoginAdmin from "./pages/loginAdmin";
import AdminPage from "./pages/adminPage";
import PostProducts from "./pages/postProducts";
import NotFound from "./pages/notFound";
import Products from "./components/Products";


function App() {
  const queryClient = new QueryClient();

  return (
    <div className="bg-neutral-200">
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<LoginAdmin />} />
          <Route path="/products" element={<Products />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/postproduct" element={<PostProducts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
