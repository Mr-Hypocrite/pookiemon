import { BodyText, LoadingGrid, ResourceCard, ResourceGrid, ResourceHeading } from '@/components';
import { Resource, useGetResource } from '@/hooks';
import { css } from '@styled-system/css';
import { Flex } from '@styled-system/jsx';
import { FC } from 'react';
import { Link, useSearchParams } from 'react-router';

export type PokemonsProps = {};

export const Pokemons: FC<PokemonsProps> = () => {
    const [searchParams] = useSearchParams();

    const { data, error, isLoading } = useGetResource({
        resourceName: Resource.Pokemon,
        paginationParam: {
            page: Number(searchParams.get('page')) || 1
        }
    });

    return (
        <>
            <div
                className={css({
                    textAlign: 'center',
                    maxW: '5xl',
                    mx: 'auto'
                })}
            >
                <ResourceHeading>pokémon</ResourceHeading>
                <BodyText>
                    pokémon are the creatures that inhabit the world of the pokémon games. they can
                    be caught using pokéballs and trained by battling with other pokémon.
                </BodyText>
            </div>
            {isLoading && !error ? (
                <LoadingGrid count={15} />
            ) : data?.results?.length > 0 ? (
                <ResourceGrid>
                    {data?.results?.map(({ name, url }: { name: string; url: string }) => (
                        <Link to={`/pokemon/${name}`} key={url} className={css({ width: 'full' })}>
                            <ResourceCard name={name} url={url} resourceType="pokemon" />
                        </Link>
                    ))}
                </ResourceGrid>
            ) : (
                <Flex w={'full'} minH={'sm'} alignItems={'center'} justifyContent={'center'}>
                    <BodyText variant="attributeHeading">
                        No results found for page number: {searchParams.get('page')}
                    </BodyText>
                </Flex>
            )}
        </>
    );
};
