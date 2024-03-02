// importing react requirements.
import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/header'; 


const root = document.getElementById('root');
const reactRoot = createRoot(root);

reactRoot.render(<Header/>);
