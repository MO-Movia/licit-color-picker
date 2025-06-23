import React from 'react';
import { ColorDetails, ColorEditor } from './Components/ColorEditor';
import ReactDOM from 'react-dom/client';

const root = document.getElementById('root'); // Get the root element

if (root) {
  const app = (
    <React.StrictMode>
      <ColorEditor
        close={(color: ColorDetails) => {
          console.log(color);
        }}
      />
    </React.StrictMode>
  );

  ReactDOM.createRoot(root).render(app); // Use createRoot to render the app
}

export { ColorEditor };
