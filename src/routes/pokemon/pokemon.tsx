import { css } from '@styled-system/css';
import { Flex } from '@styled-system/jsx';
import { FC } from 'react';

export type PokemonProps = {};

export const Pokemon: FC<PokemonProps> = () => {
    return (
        <>
            <Flex direction={'column'} alignItems={'center'} maxW={'7xl'} gap={'3'}>
                <h1>Pokemon</h1>
                <p className={css({ textAlign: 'center' })}>
                    Pokémon are the creatures that inhabit the world of the Pokémon games. They can
                    be caught using Pokéballs and trained by battling with other Pokémon. Each
                    Pokémon belongs to a specific species but may take on a variant which makes it
                    differ from other Pokémon of the same species, such as base stats, available
                    abilities and typings.
                </p>
            </Flex>
        </>
    );
};
