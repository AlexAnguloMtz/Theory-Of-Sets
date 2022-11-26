import { ChangeEvent, RefObject, useEffect, useRef, useState } from 'react';
import { Page } from '../../App';
import Lightbox from '../../components/Lightbox';
import { TextAreaSection } from '../../components/TextAreaSection';
import './styles.css';

export default function GenericPage({
    isVisible,
    name,
    lightboxHeader,
    description,
    currentPage,
    textProcessor,
    firstTextAreaHeader = '',
    secondTextAreaHeader = ''
}: Props) {

    const [lightboxInnerText, setLightboxInnerText] = useState('');

    const [isLightboxVisible, setLightboxVisible] = useState(false);

    useEffect(() => clearTextAreas()
        , [currentPage]);

    const firstTextRef = useRef<HTMLTextAreaElement>(null);
    const secondTextRef = useRef<HTMLTextAreaElement>(null);

    const handleChange = (e: ChangeEvent): void => {
        setLightboxInnerText(assembleLightboxInnerText());
    }

    const assembleLightboxInnerText = (): string => {
        return textProcessor(text(firstTextRef), text(secondTextRef));
    }

    const text = (ref: RefObject<HTMLTextAreaElement>): string => {
        return ref.current ? ref.current.value : '';
    }

    const clearTextAreas = () => {
        clear(firstTextRef);
        clear(secondTextRef);
        setLightboxInnerText('');
    }

    const clear = (ref: RefObject<HTMLTextAreaElement>): void => {
        if (ref.current != null)
            ref.current.value = '';
    }

    return (
        <main className={`generic-page ${isVisible ? '' : 'hidden'}`}>
            <header className='main-header'>
                <h1 className='main-h1'>
                    {name} of Sets
                </h1>
            </header>
            <p className='generic-copy-writing sets-intersection-text'>
                {description}
            </p>
            <TextAreaSection onChange={handleChange} ref={firstTextRef} name={firstTextAreaHeader ? firstTextAreaHeader : 'Set A'} className='set-A-form' />
            <TextAreaSection onChange={handleChange} ref={secondTextRef} name={secondTextAreaHeader ? secondTextAreaHeader : 'Set B'} className='set-B-form' />
            <div className='buttons'>
                <button onClick={clearTextAreas} className='button secondary'>Clear</button>
                <button onClick={() => { setLightboxVisible(true) }} className='button'>{name}</button>
            </div>
            <Lightbox
                isVisible={isLightboxVisible}
                onClick={() => setLightboxVisible(false)}
                text={lightboxInnerText}
                header={lightboxHeader} />
        </main>
    )
}

interface Props {
    isVisible: boolean,
    name: string,
    description: string,
    currentPage: Page,
    lightboxHeader: string,
    textProcessor: (first: string, second: string) => string,
    firstTextAreaHeader?: string,
    secondTextAreaHeader?: string,
}