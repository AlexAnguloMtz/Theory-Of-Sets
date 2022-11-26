import './styles.css';

export default function Lightbox({ isVisible, onClick, text, header }: Props) {

    const stopPropagation = (e: React.MouseEvent): void => {
        e.stopPropagation();
    }

    return (
        <div
            className={`lightbox__overlay ${isVisible ? 'visible' : ''}`}
            onClick={onClick}>
            <button className='button close-button'>X</button>
            <div className='generic-form secondary' onClick={stopPropagation}>
                <h1>{header}</h1>
                <textarea className='generic-text-area' readOnly value={text}>
                </textarea>
            </div>
        </div>
    )
}

interface Props {
    isVisible: boolean,
    onClick: () => void,
    text: string,
    header: string,
}