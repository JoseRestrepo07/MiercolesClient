import { Routes, Route } from "react-router-dom";
import { Home } from "../../pages/Home/Home";

export function Rutas() {
    return(
        <>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route></Route>
            </Routes>
        </>
    )
}