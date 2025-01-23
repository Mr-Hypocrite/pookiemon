import { BodyText, LoadingGrid, ResourceCard, ResourceGrid, ResourceHeading } from '@/components';
import { Resource, useGetResource } from '@/hooks';
import { css } from '@styled-system/css';
import { Flex } from '@styled-system/jsx';
import { FC } from 'react';
import { Link, useSearchParams } from 'react-router';

export type BerriesProps = {};

export const Berries: FC<BerriesProps> = () => {
    const [searchParams] = useSearchParams();
    const { data, error, isLoading } = useGetResource({
        resourceName: Resource.Berry,
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
                <ResourceHeading>berries</ResourceHeading>
                <BodyText>
                    berries are small fruits that can provide HP and status condition restoration,
                    stat enhancement, and even damage negation when eaten by Pokémon.
                </BodyText>
            </div>
            {isLoading && !error ? (
                <LoadingGrid count={15} />
            ) : data?.results?.length > 0 ? (
                <ResourceGrid>
                    {data?.results?.map(({ name, url }: { name: string; url: string }) => (
                        <Link to={`/berries/${name}`} key={url} className={css({ width: 'full' })}>
                            <ResourceCard name={name} url={url} resourceType="berry" />
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
