import { BodyText, LoadingGrid, ResourceCard, ResourceGrid, ResourceHeading } from '@/components';
import { Resource, useGetResource } from '@/hooks';
import { css } from '@styled-system/css';
import { Flex } from '@styled-system/jsx';
import { FC } from 'react';
import { Link, useSearchParams } from 'react-router';

export type ItemsProps = {};

export const Items: FC<ItemsProps> = () => {
    const [searchParams] = useSearchParams();

    const { data, error, isLoading } = useGetResource({
        resourceName: Resource.Item,
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
                <ResourceHeading>items</ResourceHeading>
                <BodyText>
                    an item is an object in the games which the player can pick up, keep in their
                    bag, and use in some manner. they have various uses, including healing, powering
                    up, helping catch pokémon, or to access a new area.
                </BodyText>
            </div>
            {isLoading && !error ? (
                <LoadingGrid count={15} />
            ) : data?.results?.length > 0 ? (
                <ResourceGrid>
                    {data?.results?.map(({ name, url }: { name: string; url: string }) => (
                        <Link to={`/items/${name}`} key={url} className={css({ width: 'full' })}>
                            <ResourceCard name={name} url={url} resourceType="item" />
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
