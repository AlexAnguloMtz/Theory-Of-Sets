import { PageProps } from '../../App';
import { difference } from '../../model/difference';
import GenericPage from '../GenericPage';
import './styles.css';

export default function SetsComplement({ isVisible, currentPage }: PageProps) {
    return (
        <GenericPage
            name={'Complement'}
            isVisible={isVisible}
            description={description}
            currentPage={currentPage}
            textProcessor={difference}
            lightboxHeader={'Complement of A'}
            firstTextAreaHeader={'Universe'}
            secondTextAreaHeader={'Set'} />
    )
}

const description: string = `
The complement of a set is the set that includes all the elements of the universal set that are not present in the given set. 
`;