import { getPokemonIdFromUrl } from '@/utils';
import { Flex } from '@styled-system/jsx';
import { FC, useMemo } from 'react';
import { Link } from 'react-router';

export type PokemonCardProps = {
    name: string;
    url: string;
};

export const PokemonCard: FC<PokemonCardProps> = ({ name, url }) => {
    const pokemonId = useMemo(() => {
        return getPokemonIdFromUrl(url);
    }, [url]);

    return (
        <Link to={`/pokemon/${name}`}>
            <Flex direction={'column'} alignItems={'center'} justifyContent={'center'}>
                <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId || 0}.png`}
                    alt={`${name} sprite`}
                    width={150}
                    height={150}
                />
                <h3>{name}</h3>
            </Flex>
        </Link>
    );
};
