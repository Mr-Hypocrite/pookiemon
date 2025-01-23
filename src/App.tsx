import { BrowserRouter, Route, Routes } from 'react-router';
import { GlobalErrorLayout, Layout, NotFound, ScrollToTop } from './components';
import { Berries, Berry, Home, Item, Items, Pokemon, Pokemons } from './routes';

export default function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" errorElement={<GlobalErrorLayout />}>
                    <Route index element={<Home />} />
                    <Route element={<Layout />}>
                        <Route path="pokemon" element={<Pokemons />} />
                        <Route path="pokemon/:nameOrId" element={<Pokemon />} />
                        <Route path="berries" element={<Berries />} />
                        <Route path="berries/:nameOrId" element={<Berry />} />
                        <Route path="items" element={<Items />} />
                        <Route path="items/:nameOrId" element={<Item />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
