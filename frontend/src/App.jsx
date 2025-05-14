import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className='min-h-screen bg-[#f5f7fa] text-gray-800 relative overflow-hidden'>
      {/* Background gradient */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute inset-0'>
          <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_rgba(255,200,255,0.4)_0%,_rgba(173,216,230,0.3)_45%,_rgba(245,247,250,0.2)_100%)]' />
        </div>
      </div>

      <div className='relative z-50 pt-20'>

        <Navbar />
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/signup" element={<SignUpPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
        </Routes>
      </div>
    </div>
 
      
  )
}

export default App;
