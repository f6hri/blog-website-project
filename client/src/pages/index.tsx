import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "../config/ROUTES";
import Home from "./Home";
import Post from "./Post";

export default function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.POST} element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}
