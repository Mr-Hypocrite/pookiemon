import { FC } from 'react';
import { useRouteError } from 'react-router';

export type GlobalErrorLayoutProps = {};

export const GlobalErrorLayout: FC<GlobalErrorLayoutProps> = () => {
    const error = useRouteError();
    console.log(error);

    return <>error</>;
};
