import { PageProps } from '../../App';
import { difference } from '../../model/difference';
import GenericPage from '../GenericPage';
import './styles.css';

export default function SetsDifference({ isVisible, currentPage }: PageProps) {
    return (
        <GenericPage
            name={'Difference'}
            isVisible={isVisible}
            description={description}
            currentPage={currentPage}
            textProcessor={difference}
            lightboxHeader={'A - B'} />
    )
}

const description: string = `
    The difference between two sets is the set of elements present in A but not in B.
`;
