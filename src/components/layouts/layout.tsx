import { Container } from '@styled-system/jsx';
import { FC } from 'react';
import { Outlet } from 'react-router';
import { Header } from '../header/header';

export type LayoutProps = {};

export const Layout: FC<LayoutProps> = () => {
    return (
        <>
            <Header />
            <Container maxW={'breakpoint-2xl'} pt={'8'}>
                <Outlet />
            </Container>
        </>
    );
};
