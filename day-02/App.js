import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement('div', {id: 'child'}, [
    React.createElement('h1', {id: 'child1'}, 'Hello, React!'),
    React.createElement('h2', {id: 'child2'}, 'Welcome to React.js')
]);
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(heading);