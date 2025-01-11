import { css } from '@styled-system/css';
import { Container, Flex } from '@styled-system/jsx';
import { FC } from 'react';
import { Link } from 'react-router';

export type HomeProps = {};

export const Home: FC<HomeProps> = () => {
    return (
        <Container
            maxW={'breakpoint-2xl'}
            minH={'screen'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <Flex
                direction={'column'}
                alignItems={'center'}
                justifyContent={'center'}
                h={'full'}
                gap={'3'}
            >
                <div className={css({ textAlign: 'center', mb: '1' })}>
                    <h1 className={css({ fontSize: '3xl' })}>welcome to pookiémon</h1>
                    <p className={css({ fontSize: 'sm' })}>explore the world the of pokémon</p>
                </div>
                <Flex gap={'5'} alignItems={'center'} justifyContent={'center'}>
                    <Link to={'/pokemon'}>pokémon</Link>
                    <Link to={'/berries'}>berries</Link>
                    <Link to={'/items'}>items</Link>
                </Flex>
            </Flex>
        </Container>
    );
};
