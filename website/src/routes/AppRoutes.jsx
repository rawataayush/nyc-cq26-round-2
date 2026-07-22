import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import MainLayout from '../layouts/MainLayout';
import Compare from '../pages/Compare';


const AppRoutes = () => {

    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/compare' element={<Compare />} />
            </Route >
        </Routes>
    )
}

export default AppRoutes;