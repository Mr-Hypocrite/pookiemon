import { BrowserRouter, Route, Routes } from 'react-router';
import { GlobalErrorLayout, Layout, NotFound } from './components';
import { Berries, Home, Items, Pokemon } from './routes';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" errorElement={<GlobalErrorLayout />}>
                    <Route index element={<Home />} />
                    <Route element={<Layout />}>
                        <Route path="pokemon" element={<Pokemon />} />
                        <Route path="berries" element={<Berries />} />
                        <Route path="items" element={<Items />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
