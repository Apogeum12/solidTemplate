import type { Component } from 'solid-js';
import { Button } from '@suid/material';
import { useNavigate } from '@solidjs/router';

const NonFound: Component = () => {
    const navigate = useNavigate();
    return (
        <>
            <h1>Non found!!</h1>
            <Button onClick={() => navigate("/")}>Go to main page!</Button>
        </>
    );
};

export default NonFound;