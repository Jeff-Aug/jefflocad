import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Error from "./pages/Error";
import Favoritos from "./pages/Favoritos";
import Filme from "./pages/Filme";
import Home from "./pages/Home";



const RoutesPG = () => {

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/filme/:id" element={<Filme />} />
                <Route exact path="/favoritos" element={<Favoritos />} />
                <Route  path="*" element={<Error />} />
                
            </Routes>
        </BrowserRouter>
    )



}

export default RoutesPG
