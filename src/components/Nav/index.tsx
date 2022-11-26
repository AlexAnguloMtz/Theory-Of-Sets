import React from 'react';
import { Page } from '../../App';
import Hamburguer from './Hamburguer';
import './styles.css';

export default function Nav({ isActive, onHamburguerClick, onLinkClick }: Props) {

    const handleLinkClick = (e: React.MouseEvent, page: Page): void => {
        onLinkClick(e, page);
    }

    return (
        <nav className={`nav ${isActive ? 'active' : ''}`}>
            <Hamburguer onClick={onHamburguerClick} />
            <ul>
                <li onClick={(e: React.MouseEvent) => handleLinkClick(e, Page.Intersection)}>
                    Intersection
                </li>
                <li onClick={(e: React.MouseEvent) => handleLinkClick(e, Page.Union)}>
                    Union
                </li>
                <li onClick={(e: React.MouseEvent) => handleLinkClick(e, Page.Difference)}>
                    Difference
                </li>
                <li onClick={(e: React.MouseEvent) => handleLinkClick(e, Page.Complement)}>
                    Complemento
                </li>
            </ul>
        </nav>
    )
}

interface Props {
    isActive: boolean,
    onHamburguerClick: (e: React.MouseEvent) => void,
    onLinkClick: (e: React.MouseEvent, page: Page) => void
}
