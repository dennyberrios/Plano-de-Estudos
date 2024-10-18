import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../view/Home';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Monday from '../view/Monday';
import Tuesday from '../view/Tuesday';
import Wednesday from '../view/Wednesday';
import Thursday from '../view/Thursday';
import Friday from '../view/Friday';
import Saturday from '../view/Saturday';
import Sunday from '../view/Sunday';
import ScrollToTop from '../components/ScrollToTop';
import Tips from '../view/Tips';
import NotFound from '../view/NotFound';
import { useUserContext } from '../Context';

const RoutersApp = () => {
    const { isValidPath } = useUserContext();
    
    return (
            <Router>
                <ScrollToTop />
                {isValidPath && <Header />}
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/monday' element={<Monday />} />
                    <Route path='/tuesday' element={<Tuesday />} />
                    <Route path='/wednesday' element={<Wednesday />} />
                    <Route path='/thursday' element={<Thursday />} />
                    <Route path='/friday' element={<Friday />} />
                    <Route path='/saturday' element={<Saturday />} />
                    <Route path='/sunday' element={<Sunday />} />
                    <Route path='/tips' element={<Tips />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
                {isValidPath && <Footer />}
            </Router>
    );
}

export default RoutersApp;