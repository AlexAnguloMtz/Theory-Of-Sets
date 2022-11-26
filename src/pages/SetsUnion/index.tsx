import { PageProps } from '../../App';
import { union } from '../../model/union';
import GenericPage from '../GenericPage';
import './styles.css';

export default function SetsUnion({ isVisible, currentPage }: PageProps) {
    return (
        <GenericPage
            name={'Union'}
            isVisible={isVisible}
            description={description}
            currentPage={currentPage}
            textProcessor={union}
            lightboxHeader={'A U B'} />
    )
}

const description: string = `
    The union of set A and set B is equal to the set containing all the elements in A and B.
`;