import { getResourceDefaultSprite } from '@/utils';
import { Flex, FlexProps } from '@styled-system/jsx';
import { FC, PropsWithChildren, useMemo } from 'react';
import { BodyText } from '../text';

export type ResourceCardProps = {
    name: string;
    url: string;
    resourceType: 'pokemon' | 'item' | 'berry';
    isLoading?: boolean;
} & PropsWithChildren &
    FlexProps;

const resourceCardStyle: FlexProps = {
    direction: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 'md',
    pb: '2',
    px: '4',
    transition: 'background 0.2s ease-in-out',
    _hover: {
        bgColor: 'accent'
    }
};

const defaultSprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png`;

export const ResourceCard: FC<ResourceCardProps> = ({ name, url, resourceType, ...props }) => {
    const resourceSprite = useMemo(() => {
        return getResourceDefaultSprite(resourceType, name, url);
    }, [resourceType, name, url]);

    return (
        <Flex {...resourceCardStyle} {...props}>
            <img src={resourceSprite} alt={`${name} sprite`} width={150} height={150} />
            <BodyText>{name}</BodyText>
        </Flex>
    );
};

export const LoadingCard: FC<FlexProps> = ({ ...props }) => {
    return (
        <Flex {...resourceCardStyle} w={'full'} {...props}>
            <img src={defaultSprite} alt={`resource sprite`} width={150} height={150} />
            <BodyText>Loading...</BodyText>
        </Flex>
    );
};
