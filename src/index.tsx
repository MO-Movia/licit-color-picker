import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ColorEditor from './Components/ColorEditor';
import ReactDOM from 'react-dom/client';

const root = document.getElementById("root"); // Get the root element

if (root) {
    console.log('roottt', root)
  const app = (
    <React.StrictMode>
      <ColorEditor close={(color:any) => {}} />
    </React.StrictMode>
  );

  ReactDOM.createRoot(root).render(app); // Use createRoot to render the app
}

reportWebVitals();
export { ColorEditor };
