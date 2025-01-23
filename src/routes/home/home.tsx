import { BodyText } from '@/components';
import { css } from '@styled-system/css';
import { Container, Flex } from '@styled-system/jsx';
import { FC } from 'react';
import { HiArrowUpRight } from 'react-icons/hi2';
import { Link } from 'react-router';
import homebg from '@/assets/home-bg.jpg';

export type HomeProps = {};

export const Home: FC<HomeProps> = () => {
    return (
        <Container
            maxW={'breakpoint-2xl'}
            minH={'screen'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            flexDir={'column'}
        >
            <BgImg imgSrc={homebg} />
            <Flex direction={'column'} className={css({ textAlign: 'center', mb: '1' })}>
                <h1
                    className={css({
                        fontSize: '4xl',
                        md: {
                            fontSize: '6xl'
                        },
                        fontFamily: 'logo',
                        lineHeight: 1.1
                    })}
                >
                    <span className={css({ color: 'pink.300' })}>pookié</span>mon
                </h1>
                <BodyText>explore the world the of pokémon</BodyText>
            </Flex>
            <Flex gap={'8'} alignItems={'center'} justifyContent={'center'} mt={'6'}>
                <Link
                    to={'/pokemon'}
                    className={css({
                        transition: 'color .3s ease-in-out',
                        _hover: {
                            color: 'pink.300'
                        }
                    })}
                >
                    <Flex alignItems={'center'} gap={1}>
                        <BodyText>pokémon</BodyText>
                        <HiArrowUpRight strokeWidth={1} />
                    </Flex>
                </Link>
                <Link to={'/berries'}>
                    <Flex alignItems={'center'} gap={1}>
                        <BodyText>berries</BodyText>
                        <HiArrowUpRight strokeWidth={1} />
                    </Flex>
                </Link>
                <Link to={'/items'}>
                    <Flex alignItems={'center'} gap={1}>
                        <BodyText>items</BodyText>
                        <HiArrowUpRight strokeWidth={1} />
                    </Flex>
                </Link>
            </Flex>
        </Container>
    );
};

interface BgImgProps {
    imgSrc: string;
}
const BgImg: FC<BgImgProps> = ({ imgSrc }) => {
    return (
        <img
            className={css({
                position: 'fixed',
                top: 0,
                left: 0,
                width: 'screen',
                height: 'screen',
                objectFit: 'cover',
                opacity: '15%',
                zIndex: -1
            })}
            src={imgSrc}
            alt="bg image"
            loading="eager"
        />
    );
};
