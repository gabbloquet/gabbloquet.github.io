import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router";
import Home from './Home.tsx';
import Blog from "./Blog.tsx";
import NotFound from "./NotFound.tsx";
import './index.css';
import Article from "./Article.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/blog" element={<Blog/>}/>
                <Route path="/blog/:id" element={<Article />} />
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
