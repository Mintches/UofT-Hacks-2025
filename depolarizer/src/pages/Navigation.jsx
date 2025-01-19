import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./SignIn"
import MainPage from "./MainPage"
import PageSelector from "./PageSelector"

function Navigation() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="sign-in" element={<SignIn />} />
            <Route path="main-page" element={<MainPage />} />
            <Route path="page-selector" element={<PageSelector />} />
            <Route path="*" element={<Error404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
}

export default Navigation;
