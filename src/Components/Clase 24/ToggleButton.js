import React from 'react';
import { useToggle } from "./useToggle.js";

export function ToggleButton() {

    const [toggle, setToggle] = useToggle();
    console.log(toggle)
    return (
        <button onClick={setToggle}>
            { toggle ? 'ON' : 'OFF' }
        </button>
    );
}