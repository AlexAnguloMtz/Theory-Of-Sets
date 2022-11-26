import './styles.css';

export default function TranitionLayer({ animationStep }: Props) {
    return (
        <div className={`transition-layer ${classFor(animationStep)}`}>

        </div>
    )
}

interface Props {
    animationStep: number
}

const classFor = (animationStep: number): string => {
    if (animationStep === 0)
        return 'base';
    else if (animationStep === 1)
        return 'first-step';
    else if (animationStep === 2)
        return 'second-step';
    else if (animationStep === 3)
        return 'third-step';
    throw new Error('Cannot recognize this animation step');
}