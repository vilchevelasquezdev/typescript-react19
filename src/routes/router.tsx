import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HomePage} from "../pages/HomePage.tsx";
import {Modulo1Page} from "../pages/Modulo1Page.tsx";
import {Modulo2Page} from "../pages/Modulo2Page.tsx";

export function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/modulo1" element={<Modulo1Page/>} />
                <Route path="/modulo2" element={<Modulo2Page/>} />
            </Routes>
        </BrowserRouter>

    );
}
