import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import { GlobalErrorLayout, Layout, NotFound } from './components';
import './index.css';
import { Home, Pokemon } from './routes';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" errorElement={<GlobalErrorLayout />}>
                    <Route index element={<Home />} />
                    <Route element={<Layout />}>
                        <Route path="pokemon" element={<Pokemon />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
