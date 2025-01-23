import { cva } from '@styled-system/css';

export const linkStyle = cva({
    base: {
        transition: 'color .3s ease-in-out',
        _hover: {
            color: 'pink.300'
        }
    }
});
