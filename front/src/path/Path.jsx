import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../pages/Login";
import SiteLayout from "../layouts/SiteLayout";

const Path = () => {
    return (  
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<SiteLayout />}>
                    <Route index element={<Login />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
 
export default Path;