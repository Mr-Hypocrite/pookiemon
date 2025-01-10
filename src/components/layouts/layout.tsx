import { FC } from 'react';
import { Outlet } from 'react-router';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';

export type LayoutProps = {};

export const Layout: FC<LayoutProps> = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};
