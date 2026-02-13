import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HomePage} from "../pages/HomePage.tsx";
import {Modulo1Page} from "../pages/Modulo1Page.tsx";
import {Modulo2Page} from "../pages/Modulo2Page.tsx";
import {Modulo3Page} from "../pages/Modulo3Page.tsx";
import {Modulo4Page} from "../pages/Modulo4Page.tsx";
import {Modulo5Page} from "../pages/Modulo5Page.tsx";
import {Modulo6Page} from "../pages/Modulo6Page.tsx";
import {Modulo7Page} from "../pages/Modulo7Page.tsx";

export function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/modulo1" element={<Modulo1Page/>} />
                <Route path="/modulo2" element={<Modulo2Page/>} />
                <Route path="/modulo3" element={<Modulo3Page/>} />
                <Route path="/modulo4" element={<Modulo4Page/>} />
                <Route path="/modulo5" element={<Modulo5Page/>} />
                <Route path="/modulo6" element={<Modulo6Page/>} />
                <Route path="/modulo7" element={<Modulo7Page/>} />
            </Routes>
        </BrowserRouter>

    );
}
