import {StrictMode, lazy, Suspense} from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router";
import './index.css';

// Lazy load route components for code splitting
const Home = lazy(() => import('./Home.tsx'));
const Blog = lazy(() => import('./Blog.tsx'));
const Article = lazy(() => import('./Article.tsx'));
const NotFound = lazy(() => import('./NotFound.tsx'));

// Minimal loading fallback
const PageLoader = () => (
    <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
    </div>
);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Suspense fallback={<PageLoader />}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/blog" element={<Blog/>}/>
                    <Route path="/blog/:id" element={<Article />} />
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </Suspense>
        </BrowserRouter>
    </StrictMode>
);