"use client";
import React from 'react';
import Login from './Auth/Login';
import { useSelector } from 'react-redux';
import Counter from './Counter/Counter';

const App = ({ children }) => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    return (
        <div className="h-screen w-screen">
            {!isAuthenticated ? <Login /> : children}
        </div>
    );
};

export default App;