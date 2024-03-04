// importing react requirements.
import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/header'; 
import Footer from './components/footer';


const root = document.getElementById('root');
const reactRoot = createRoot(root);

const footerID = document.getElementById('footer')
const footerRoot = createRoot(footerID)

reactRoot.render(<Header />);
footerRoot.render(<Footer />);