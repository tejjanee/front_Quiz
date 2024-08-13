import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider,QuizProvider} from "./context/index";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <AuthProvider>
  <QuizProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </QuizProvider>
  </AuthProvider>
  </BrowserRouter>
);

