import { useNavMenuStore } from '@/stores';
import { css } from '@styled-system/css';
import { Container, Flex } from '@styled-system/jsx';
import { FC } from 'react';
import { HiArrowUpRight } from 'react-icons/hi2';
import { RiMenu5Fill } from 'react-icons/ri';
import { Link } from 'react-router';
import { BodyText } from '../text';

export type HeaderProps = {};

export const Header: FC<HeaderProps> = () => {
    return (
        <>
            <DesktopHeader />
            <MobileMenu />
        </>
    );
};

const DesktopHeader: FC = () => {
    const { menuState, setMenuState } = useNavMenuStore();

    return (
        <>
            <div
                className={css({
                    pos: 'sticky',
                    top: 0,
                    left: 0,
                    w: 'full',
                    h: '20',
                    bgColor: 'background',
                    borderColor: 'pink.300',
                    borderBottom: '1px solid',
                    zIndex: '2',
                    md: {
                        h: '24'
                    }
                })}
            >
                <Container
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'right'}
                    maxW={'breakpoint-2xl'}
                    w={'full'}
                    h={'full'}
                >
                    <Link
                        to="/"
                        className={css({
                            position: 'absolute',
                            left: '0',
                            right: '0',
                            top: '50%',
                            transform: 'translateY(-35%)',
                            mx: 'auto',
                            w: 'fit'
                        })}
                    >
                        <h1 className={css({ fontSize: '2xl', fontFamily: 'logo' })}>
                            <span className={css({ color: 'pink.300' })}>pookié</span>mon
                        </h1>
                    </Link>

                    <Flex gap={'8'} className={css({ display: 'none', md: { display: 'flex' } })}>
                        <Link to={'/pokemon'}>
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

                    <RiMenu5Fill
                        size={24}
                        className={css({
                            color: `${menuState ? 'pink.300' : 'inherit'}`,
                            md: {
                                display: 'none'
                            }
                        })}
                        onClick={() => setMenuState(!menuState)}
                    />
                </Container>
            </div>
        </>
    );
};

interface MobileMenuProps {}

const MobileMenu: FC<MobileMenuProps> = () => {
    const { menuState, setMenuState } = useNavMenuStore();

    return (
        <div
            className={css({
                position: 'fixed',
                zIndex: '2',
                w: 'full',
                h: 'screen',
                display: `${menuState ? 'block' : 'none'}`,
                bgColor: 'overlay'
            })}
            onClick={() => setMenuState(false)}
        >
            <Container
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'end'}
                textAlign={'right'}
                gap={'2'}
                h={'fit'}
                w={'max-content'}
                mx={'unset'}
                ml={'auto'}
                py={'4'}
                borderBottomRadius={'sm'}
            >
                <Link to={'/pokemon'}>
                    <Flex textAlign={'inherit'} alignItems={'center'} gap={1}>
                        <BodyText>pokémon</BodyText>
                        <HiArrowUpRight size={10} strokeWidth={1} />
                    </Flex>
                </Link>
                <Link to={'/berries'}>
                    <Flex textAlign={'inherit'} alignItems={'center'} gap={1}>
                        <BodyText>berries</BodyText>
                        <HiArrowUpRight size={10} strokeWidth={1} />
                    </Flex>
                </Link>
                <Link to={'/items'}>
                    <Flex textAlign={'inherit'} alignItems={'center'} gap={1}>
                        <BodyText>items</BodyText>
                        <HiArrowUpRight size={10} strokeWidth={1} />
                    </Flex>
                </Link>
            </Container>
        </div>
    );
};
