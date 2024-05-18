import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/routes';

const App = () => (
    <Router>
        <AppRoutes />
    </Router>
);

export default App;
