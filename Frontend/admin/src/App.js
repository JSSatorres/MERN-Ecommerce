import {Routes, Route} from "react-router-dom"
import LoginAdmin from './pages/loginAdmin';
import './App.css';
import AdminPage from './pages/adminPage';
import PostProducts from './pages/postProducts';
import NotFound from "./pages/notFound";


function App() {
  return (
    <div className="bg-neutral-200">
      <Routes>
        <Route path="/" element={<LoginAdmin />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/postproduct" element={<PostProducts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </div>
  );
}

export default App;
