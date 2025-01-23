import { styled } from '@styled-system/jsx';

export const BodyText = styled('p', {
    base: {
        fontSize: 'xs',
        md: {
            fontSize: 'md'
        }
    },
    variants: {
        variant: {
            attributeHeading: {
                fontSize: 'sm',
                md: {
                    fontSize: 'lg'
                }
            }
        }
    }
});

export const ResourceHeading = styled('h1', {
    base: {
        fontSize: 'md',
        mb: '4',
        md: {
            fontSize: '2xl'
        },

        fontFamily: 'pixelated'
    }
});
