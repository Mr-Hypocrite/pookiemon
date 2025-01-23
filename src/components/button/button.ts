import { styled } from '@styled-system/jsx';

export const PaginationButton = styled('button', {
    base: {
        cursor: 'pointer',
        p: '1',
        borderRadius: 'md',
        _disabled: {
            pointerEvents: 'none',
            color: 'neutral.600'
        },
        _hover: {
            backgroundColor: 'accent'
        }
    },
    variants: {}
});
