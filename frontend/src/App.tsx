import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Test from "./pages/Test";
import Navbar from "./components/Navbar";

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <div className="pages">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/test" element={<Test />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;

