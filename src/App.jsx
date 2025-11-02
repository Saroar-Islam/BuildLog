import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Section/Home";
import FrontPageNews from "./Section/FrontPageNews";
import AllPost from "./Section/AllPost";

import FullNewsView from "./components/FullNewsView";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route index element={<FrontPageNews />} />

                    <Route path="/allpost/:category?" element={<AllPost />} />
                    <Route path="/:category/:topic" element={<FullNewsView />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
