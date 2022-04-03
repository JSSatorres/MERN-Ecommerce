import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider } from "./context/authContext";

import './App.css';
import LoginAdmin from "./pages/loginAdmin";
import PostProducts from "./pages/postProducts";
import NotFound from "./pages/notFound";
import Home from "./pages/home";
import RegisterAdmin from "./pages/registerAdmin";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false
    },
  },
});
function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<RegisterAdmin />} />
          <Route path="/login" element={<LoginAdmin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/newproduct" element={<PostProducts />} />
          <Route path="/editproduct/:id" element={<PostProducts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
