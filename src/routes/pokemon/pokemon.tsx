import { BodyText } from '@/components';
import { Resource, useGetResource } from '@/hooks';
import { css } from '@styled-system/css';
import { Container, Flex, Grid } from '@styled-system/jsx';
import { FC } from 'react';
import { useParams } from 'react-router';

export type PokemonProps = {};

export const Pokemon: FC<PokemonProps> = () => {
    const { nameOrId } = useParams();

    const { data, error, isLoading } = useGetResource({
        resourceName: Resource.Pokemon,
        resourceEntityName: nameOrId,
        paginationParam: {}
    });

    return (
        <>
            {!isLoading && !error && data && (
                <>
                    <Flex direction={'column'} alignItems={'center'} mb={'12'}>
                        <img
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data?.id || 0}.png`}
                            alt={`${data?.name} picture`}
                            width={300}
                            height={300}
                            className={css({ width: '200px', md: { width: '300px' } })}
                        />
                        <h2 className={css({ fontSize: '2xl', fontFamily: 'pixelated' })}>
                            {data?.name}
                        </h2>
                    </Flex>
                    <Container maxW={'4xl'}>
                        <Grid
                            columnGap={'4'}
                            rowGap={'4'}
                            gridTemplateColumns={'repeat(auto-fill, minmax(140px, 1fr))'}
                            md={{
                                columnGap: '8',
                                gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))'
                            }}
                            mb={'8'}
                        >
                            <Flex gap={'2'} direction={'column'}>
                                <BodyText
                                    variant="attributeHeading"
                                    className={css({ fontWeight: 'medium' })}
                                >
                                    height
                                </BodyText>
                                <BodyText>{data?.height} decimeters</BodyText>
                            </Flex>
                            <Flex gap={'2'} direction={'column'}>
                                <BodyText
                                    variant="attributeHeading"
                                    className={css({ fontWeight: 'medium' })}
                                >
                                    weight
                                </BodyText>
                                <BodyText>{data?.weight} hectograms</BodyText>
                            </Flex>
                            <Flex gap={'2'} direction={'column'}>
                                <BodyText
                                    variant="attributeHeading"
                                    className={css({ fontWeight: 'medium' })}
                                >
                                    base experience
                                </BodyText>
                                <BodyText>{data?.base_experience}</BodyText>
                            </Flex>
                            <Flex gap={'2'} direction={'column'}>
                                <BodyText
                                    variant="attributeHeading"
                                    className={css({ fontWeight: 'medium' })}
                                >
                                    types:{' '}
                                </BodyText>
                                <Flex gap={'4'}>
                                    {data?.types?.map(({ type }: any) => (
                                        <BodyText key={type?.url}>{type?.name}</BodyText>
                                    ))}
                                </Flex>
                            </Flex>
                        </Grid>
                        <Flex gap={'2'} mb={'8'} direction={'column'}>
                            <BodyText
                                variant="attributeHeading"
                                className={css({ fontWeight: 'medium' })}
                            >
                                abilities
                            </BodyText>
                            <Flex gap={'4'} overflowX={'auto'}>
                                {data?.abilities?.map(({ ability }: any) => (
                                    <BodyText
                                        key={ability?.url}
                                        className={css({ whiteSpace: 'nowrap' })}
                                    >
                                        {ability?.name}
                                    </BodyText>
                                ))}
                            </Flex>
                        </Flex>
                        <Flex gap={'2'} direction={'column'}>
                            <BodyText
                                variant="attributeHeading"
                                className={css({ fontWeight: 'medium' })}
                            >
                                moves
                            </BodyText>
                            <Grid
                                columnGap={'4'}
                                rowGap={'1'}
                                gridTemplateColumns={'repeat(auto-fill, minmax(140px, 1fr))'}
                                md={{
                                    columnGap: '8',
                                    gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))'
                                }}
                                mb={'12'}
                            >
                                {data?.moves?.map(({ move }: any) => (
                                    <BodyText key={move?.url}>{move?.name}</BodyText>
                                ))}
                            </Grid>
                        </Flex>
                    </Container>
                </>
            )}
        </>
    );
};
