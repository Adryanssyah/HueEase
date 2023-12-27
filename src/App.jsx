import FooterLayout from './components/layouts/FooterLayout';
import HeaderLayout from './components/layouts/HeaderLayout';
import Background from './components/elements/Background';

import AlertClipboard from './components/fragments/AlertClipboard';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import PlaygroundPage from './pages/Playground';
import CollectionPage from './pages/Collection';

function App() {
     return (
          <>
               <HeaderLayout />
               <Routes>
                    <Route index path="/" element={<HomePage />} />
                    <Route path="playground" element={<PlaygroundPage />} />
                    <Route path="collections" element={<CollectionPage />} />
               </Routes>
               <Background />
               <AlertClipboard />
               <FooterLayout />
          </>
     );
}

export default App;
