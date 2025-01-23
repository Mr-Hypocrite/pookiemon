import { client } from '@/utils';
import { useQuery } from '@tanstack/react-query';

export enum Resource {
    Pokemon = 'pokemon',
    Berry = 'berry',
    Item = 'item'
}

interface PaginationParams {
    page?: number;
    perPage?: number;
}

interface GetResourceProps {
    resourceName: Resource;
    resourceEntityName?: string;
    paginationParam: PaginationParams;
}

const getResource = async ({
    resourceName,
    resourceEntityName,
    paginationParam: { page = 1, perPage = 15 }
}: GetResourceProps) => {
    let resourceData;
    if (resourceEntityName) {
        const { data } = await client.get(`${resourceName}/${resourceEntityName}`);
        resourceData = data;
    } else {
        const { data } = await client.get(
            `${resourceName}?limit=${perPage}&offset=${(page - 1) * perPage}`
        );
        resourceData = data;
    }
    return resourceData;
};

export const useGetResource = ({
    resourceName,
    resourceEntityName,
    paginationParam: { page, perPage = 15 }
}: GetResourceProps) => {
    return useQuery({
        queryKey: ['get-resource', resourceName, resourceEntityName, page, perPage],
        queryFn: () =>
            getResource({
                resourceName,
                resourceEntityName,
                paginationParam: {
                    page,
                    perPage
                }
            })
    });
};
