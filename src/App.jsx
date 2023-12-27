import { Route, Routes } from 'react-router-dom';
import FooterLayout from './components/layouts/FooterLayout';
import HeaderLayout from './components/layouts/HeaderLayout';
import Background from './components/elements/Background';
import AlertClipboard from './components/fragments/AlertClipboard';
import HomePage from './pages/Home';
import PlaygroundPage from './pages/Playground';
import CollectionPage from './pages/Collection';
import DefaultLayout from './components/layouts/Default';
import ErrorPage from './pages/ErrorPage';

function App() {
     return (
          <DefaultLayout>
               <HeaderLayout />
               <Routes>
                    <Route path="*" element={<ErrorPage />} />
                    <Route index path="/" element={<HomePage />} />
                    <Route path="playground" element={<PlaygroundPage />} />
                    <Route path="collections" element={<CollectionPage />} />
               </Routes>
               <Background />
               <AlertClipboard />
               <FooterLayout />
          </DefaultLayout>
     );
}

export default App;
