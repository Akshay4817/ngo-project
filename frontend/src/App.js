import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Donation from "./pages/Donation";
import Vlogs from "./pages/Vlogs";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
import AdminGalleryAdd from "./pages/AdminGalleryAdd";
import AdminGalleryDelete from "./pages/AdminGalleryDelete";
import AdminVlogAdd from "./pages/AdminVlogAdd";
import AdminVlogDelete from "./pages/AdminVlogDelete";
import ProtectedRoute from "./pages/ProtectedRoute";
// Layout wrapper to hide Navbar/Footer on certain routes
function Layout({ children }) {
  const location = useLocation();
  const hideLayout = location.pathname === "/admin"; // hide for admin page

  return (
    <>
      {!hideLayout && <Navbar />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/vlogs" element={<Vlogs />} />
          <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
          <Route path="/admin/gallery/add" element={<ProtectedRoute><AdminGalleryAdd /></ProtectedRoute>} />
          <Route path="/admin/gallery/delete" element={<ProtectedRoute><AdminGalleryDelete /></ProtectedRoute>} />
          <Route path="/admin/vlogs/add" element={<ProtectedRoute><AdminVlogAdd /></ProtectedRoute>} />
           <Route path="/admin/vlogs/delete" element={    <ProtectedRoute><AdminVlogDelete /></ProtectedRoute>} />

          <Route path="/admin-login" element={<AdminLogin />} />
          
          
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
