import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Section/Home";
import FrontPageNews from "./Section/FrontPageNews";
import AllPost from "./Section/AllPost";

import FullNewsView from "./components/FullNewsView";
import PostDetail from "./Section/PostDetail";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route index element={<FrontPageNews />} />

                    <Route path="/allpost/:category?" element={<AllPost />} />
                    <Route path="/allpost/:category/:topic" element={<FullNewsView />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
