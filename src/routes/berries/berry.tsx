import { Resource, useGetResource } from '@/hooks';
import { css } from '@styled-system/css';
import { Container, Flex, Grid } from '@styled-system/jsx';
import { FC } from 'react';
import { useParams } from 'react-router';

export type BerryProps = {};

export const Berry: FC<BerryProps> = () => {
    const { nameOrId } = useParams();

    const { data, error, isLoading } = useGetResource({
        resourceName: Resource.Berry,
        resourceEntityName: nameOrId,
        paginationParam: {}
    });

    return (
        <>
            {!isLoading && !error && data && (
                <>
                    <Flex direction={'column'} alignItems={'center'} mb={'12'}>
                        <img
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${data?.name}-berry.png`}
                            alt={`${data?.name} picture`}
                            width={200}
                            height={200}
                        />
                        <h2 className={css({ fontSize: '2xl', fontFamily: 'pixelated' })}>
                            {data?.name}
                        </h2>
                    </Flex>
                    <Container maxW={'4xl'}>
                        <Grid
                            gridTemplateColumns={'repeat(3, minmax(0, 1fr))'}
                            mb={'12'}
                            rowGap={'8'}
                        >
                            <Flex direction={'column'}>
                                <p className={css({ fontWeight: 'medium' })}>firmness</p>
                                <p>{data?.firmness?.name}</p>
                            </Flex>
                            <Flex direction={'column'}>
                                <p className={css({ fontWeight: 'medium' })}>growth time</p>
                                <p>{data?.growth_time}</p>
                            </Flex>
                            <Flex direction={'column'}>
                                <p className={css({ fontWeight: 'medium' })}>max harvest</p>
                                <p>{data?.max_harvest}</p>
                            </Flex>
                            <Flex direction={'column'}>
                                <p className={css({ fontWeight: 'medium' })}>natural gift type</p>
                                <p>{data?.natural_gift_type?.name}</p>
                            </Flex>
                            <Flex direction={'column'}>
                                <p className={css({ fontWeight: 'medium' })}>natural gift power</p>
                                <p>{data?.natural_gift_power}</p>
                            </Flex>
                            <Flex direction={'column'}>
                                <p className={css({ fontWeight: 'medium' })}>size</p>
                                <p>{data?.size}</p>
                            </Flex>
                            <Flex direction={'column'}>
                                <p className={css({ fontWeight: 'medium' })}>smoothness</p>
                                <p>{data?.smoothness}</p>
                            </Flex>
                            <Flex direction={'column'}>
                                <p className={css({ fontWeight: 'medium' })}>soil dryness</p>
                                <p>{data?.soil_dryness}</p>
                            </Flex>
                            <Flex direction={'column'}>
                                <p className={css({ fontWeight: 'medium' })}>flavors</p>
                                <Flex gap={'4'} overflowX={'auto'}>
                                    {data?.flavors?.map(({ flavor }: any) => (
                                        <p
                                            key={flavor?.url}
                                            className={css({ whiteSpace: 'nowrap' })}
                                        >
                                            {flavor?.name}
                                        </p>
                                    ))}
                                </Flex>
                            </Flex>
                        </Grid>
                    </Container>
                </>
            )}
        </>
    );
};
