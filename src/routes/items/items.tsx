import { css } from '@styled-system/css';
import { Flex } from '@styled-system/jsx';
import { FC } from 'react';

export type ItemsProps = {};

export const Items: FC<ItemsProps> = () => {
    return (
        <>
            <Flex direction={'column'} alignItems={'center'} maxW={'7xl'} gap={'3'}>
                <h1>Items</h1>
                <p className={css({ textAlign: 'center' })}>
                    An item is an object in the games which the player can pick up, keep in their
                    bag, and use in some manner. They have various uses, including healing, powering
                    up, helping catch Pokémon, or to access a new area.
                </p>
            </Flex>
        </>
    );
};
