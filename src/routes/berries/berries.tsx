import { css } from '@styled-system/css';
import { Flex } from '@styled-system/jsx';
import { FC } from 'react';

export type BerriesProps = {};

export const Berries: FC<BerriesProps> = () => {
    return (
        <>
            <Flex direction={'column'} alignItems={'center'} maxW={'7xl'} gap={'3'}>
                <h1>Berries</h1>
                <p className={css({ textAlign: 'center' })}>
                    Berries are small fruits that can provide HP and status condition restoration,
                    stat enhancement, and even damage negation when eaten by Pokémon.
                </p>
            </Flex>
        </>
    );
};
