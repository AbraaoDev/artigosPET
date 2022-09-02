import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Artigos } from './pages/Artigos'
import { Post } from './pages/Post'

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<DefaultLayout />}>
                <Route path="/" element={<Artigos />} />
                <Route path="/post/:id" element={<Post />} />
            </Route>

        </Routes>
    )
}