import { type ReactElement } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import PokemonGame from './Pages/PokemonGame'
import PokemonListPage from './Pages/PokemonListPage'

export default function Router(): ReactElement {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <PokemonGame />
                    }
                />
                <Route
                    path="/pokedex"
                    element={
                        <PokemonListPage />
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}
