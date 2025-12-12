'use client';
import { useState, useEffect } from 'react';
import Loader from './Loader';
/**
 * Client wrapper for the Loader component
 * Manages loading state and ensures loader shows on initial page load
 */
export default function LoaderWrapper({ children }) {
    const [loading, setLoading] = useState(true);
    return (
        <>
            {loading && <Loader onComplete={() => setLoading(false)} />}
            {children}
        </>
    );
}
