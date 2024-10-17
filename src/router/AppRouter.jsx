import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/homePage/HomePage';
import ContactPage from '../pages/contactPage/ContactPage';
import AboutPage from '../pages/aboutPage/AboutPage';
import Navbar from '../components/navbar/Navbar';

const AppRouter = () => {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
