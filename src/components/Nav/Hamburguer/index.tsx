import React from 'react';
import './styles.css';

export default function Hamburguer({ onClick }: Props) {
    return (
        <button className='hamburguer' onClick={onClick}>
            <div className='hamburguer__line first'></div>
            <div className='hamburguer__line second'></div>
            <div className='hamburguer__line third'></div>
        </button>

    )
}

interface Props {
    onClick: (e: React.MouseEvent) => void
}