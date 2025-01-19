import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import SignIn from "./SignIn"
import MainPage from "./MainPage"
import PageSelector from "./PageSelector"
import Question from "./Question"
import Error404 from "./Error404";
import TopBar from "./TopBar"

function Layout() {
    return (
        <TopBar>
            <Outlet />
        </TopBar>
    )
}

function Navigation() {
    return (
      <BrowserRouter>
        <Routes>
            <Route element={<Layout/>}>
                <Route path="sign-in" element={<SignIn />} />
                <Route path="main-page" element={<MainPage />} />
                <Route path="page-selector" element={<PageSelector />} />
                <Route path="/" element={<PageSelector />} />
                <Route path="*" element={<Error404 />} />
            </Route>
        </Routes>
      </BrowserRouter>
    );
}

export default Navigation;
