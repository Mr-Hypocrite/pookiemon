import { FC } from 'react';
import { Outlet } from 'react-router';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { Container } from '@styled-system/jsx';

export type LayoutProps = {};

export const Layout: FC<LayoutProps> = () => {
    return (
        <>
            <Header />
            <Container
                maxW={'breakpoint-2xl'}
                minH={'screen'}
                display={'flex'}
                justifyContent={'center'}
            >
                <Outlet />
            </Container>
            <Footer />
        </>
    );
};
