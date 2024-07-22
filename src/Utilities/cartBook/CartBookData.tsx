import {cartBookDataType} from './CartBookDataType';
import { AuthorsIcon, ReadingBook, ReadBook} from '../../Assets/icons/Icons';


export const CartBookData: cartBookDataType[] = [
    {
        id: 'cartBook_1',
        icon: <ReadBook />,
        value: '20',
        description: 'Read Books'	
    },

    {
        id: 'cartBook_3',
        icon: <AuthorsIcon />,
        value: '03',
        description: 'Authors'
    },

    {
        id: 'cartBook_2',
        icon: <ReadingBook />,
        value: '20',
        description: 'Reading Books'	
    }
];