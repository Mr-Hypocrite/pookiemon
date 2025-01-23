import { Resource, useGetResource } from '@/hooks';
import { css } from '@styled-system/css';
import { Container, Flex, Grid } from '@styled-system/jsx';
import { FC } from 'react';
import { useParams } from 'react-router';

export type ItemProps = {};

export const Item: FC<ItemProps> = () => {
    const { nameOrId } = useParams();
    const { data, error, isLoading } = useGetResource({
        resourceName: Resource.Item,
        resourceEntityName: nameOrId,
        paginationParam: {}
    });
    return (
        <>
            {!isLoading && !error && data && (
                <>
                    <Flex direction={'column'} alignItems={'center'} mb={'12'}>
                        <img
                            src={data?.sprites?.default}
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
                            gridTemplateColumns={'repeat(2, minmax(0, 1fr))'}
                            mb={'12'}
                            rowGap={'8'}
                        >
                            <Flex direction={'column'}>
                                <p className={css({ fontWeight: 'medium' })}>cost</p>
                                <p>{data?.cost}</p>
                            </Flex>
                            <Flex direction={'column'}>
                                <p className={css({ fontWeight: 'medium' })}>category</p>
                                <p>{data?.category?.name}</p>
                            </Flex>
                        </Grid>
                        <Flex direction={'column'}>
                            <p className={css({ fontWeight: 'medium' })}>effects</p>
                            <Flex gap={'2'} wrap={'wrap'}>
                                {data?.effect_entries?.map(
                                    ({ short_effect }: any, index: number) => (
                                        <p key={index} className={css({ whiteSpace: 'pre-wrap' })}>
                                            {short_effect}
                                        </p>
                                    )
                                )}
                            </Flex>
                        </Flex>
                    </Container>
                </>
            )}
        </>
    );
};
