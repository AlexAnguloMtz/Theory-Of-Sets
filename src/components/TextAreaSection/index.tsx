import { ChangeEvent, forwardRef } from 'react';
import './styles.css';

export const TextAreaSection = forwardRef<HTMLTextAreaElement, Props>((props, ref) => {
    return (
        <form className={`generic-form ${props.className}`}>
            <h2>{props.name}</h2>
            <textarea
                ref={ref}
                name=""
                className='generic-text-area'
                onChange={props.onChange}
            >
            </textarea>
        </form>
    )
});

interface Props {
    name: string,
    onChange: (e: ChangeEvent) => void,
    className?: string
}