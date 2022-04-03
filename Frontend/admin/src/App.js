import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider } from "./context/authContext";

import './App.css';
import LoginAdmin from "./pages/loginAdmin";
import PostProducts from "./pages/postProducts";
import NotFound from "./pages/notFound";
import Home from "./pages/home";
import RegisterAdmin from "./pages/registerAdmin";
import EditProduct from "./pages/editProduct/EditProduct";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false
    },
  },
});

//retry las rellamadas de la peticion por si falla 0 es que hace una vez la peticion y si falla no lo reintenta mas

//refetchOnWindowFocus: false esto es que si se pincha fuera de la ventana y luego en la ventana vuelve hacer la peticion si esta en true, por defecto es true
function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<RegisterAdmin />} />
          <Route path="/login" element={<LoginAdmin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/newproduct" element={<PostProducts />} />
          <Route path="/editproduct/:id" element={<EditProduct />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
