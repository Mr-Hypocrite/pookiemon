import { Grid, GridProps } from '@styled-system/jsx';
import { FC, PropsWithChildren } from 'react';
import { LoadingCard } from '../cards';

export type ResourceGridProps = {} & PropsWithChildren & GridProps;

const resourceGridStyles: GridProps = {
    gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
    w: 'full',
    alignItems: 'center',
    justifyItems: 'center',
    mt: '4',
    mb: '16',
    lg: {
        my: '20'
    }
};

export const ResourceGrid: FC<ResourceGridProps> = ({ children, ...props }) => {
    return (
        <Grid {...resourceGridStyles} {...props}>
            {children}
        </Grid>
    );
};

export const LoadingGrid: FC<ResourceGridProps & { count: number }> = ({ count }) => {
    return (
        <Grid {...resourceGridStyles}>
            {Array.from(Array(count).keys())?.map((_tile: number, index: number) => (
                <LoadingCard key={index} />
            ))}
        </Grid>
    );
};
