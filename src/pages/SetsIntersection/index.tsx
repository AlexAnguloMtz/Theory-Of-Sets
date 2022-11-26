import { PageProps } from '../../App';
import { intersection } from '../../model/intersection';
import GenericPage from '../GenericPage';
import './styles.css';

export default function SetsIntersection({ isVisible, currentPage }: PageProps) {

    return (
        <GenericPage
            name={'Intersection'}
            isVisible={isVisible}
            description={description}
            currentPage={currentPage}
            textProcessor={intersection}
            lightboxHeader={'A ∩ B'} />
    )
}

const description: string = `
    The intersection of sets A and B is the set of all elements which are common to both A and B.
`;