import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import TransitionLayer from './components/TransitionLayer';
import SetsComplement from './pages/SetsComplement';
import SetsDifference from './pages/SetsDifference';
import SetsIntersection from './pages/SetsIntersection';
import SetsUnion from './pages/SetsUnion';

function App() {

  const [isNavActive, setNavActive] = useState(false);
  const [transitionLayerStep, setTransitionLayerStep] = useState(0);
  const [currentPage, setCurrentPage] = useState(Page.Intersection);

  const handleHamburguer = (e: React.MouseEvent): void => {
    e.stopPropagation();
    setNavActive(!isNavActive);
  }

  const handleLinkClick = (e: React.MouseEvent, page: Page): void => {
    setNavActive(false);
    setTransitionLayerStep(1);
    setTimeout(() => setTransitionLayerStep(2), 600);
    setTimeout(() => setCurrentPage(page), 620);
    setTimeout(() => setTransitionLayerStep(3), 1200);
    setTimeout(() => setTransitionLayerStep(0), 1210);
  }

  return (
    <div className="App" onClick={() => setNavActive(false)}>
      <TransitionLayer animationStep={transitionLayerStep} />
      <Nav
        isActive={isNavActive}
        onHamburguerClick={handleHamburguer}
        onLinkClick={handleLinkClick} />
      <SetsIntersection isVisible={currentPage === Page.Intersection} currentPage={currentPage} />
      <SetsUnion isVisible={currentPage === Page.Union} currentPage={currentPage} />
      <SetsDifference isVisible={currentPage === Page.Difference} currentPage={currentPage} />
      <SetsComplement isVisible={currentPage === Page.Complement} currentPage={currentPage} />
    </div>
  );
}

export interface PageProps {
  isVisible: boolean,
  currentPage: Page
}

export enum Page {
  Intersection,
  Union,
  Difference,
  Complement
}

export default App;
