import { useEffect } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Home from "../pages/private/home";
import Planta from '../pages/private/plants'

export function Router() {
    const pathname = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <Routes>
            <Route>
                <Route path="*" element={<Navigate replace to="/" />} />
                <Route path="/" element={<Home />} />
                <Route path="/plantas" element={<Planta />} />
            </Route>
        </Routes>
    );
}