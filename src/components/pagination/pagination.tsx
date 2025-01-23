import { Flex, FlexProps } from '@styled-system/jsx';
import { FC } from 'react';
import ResponsivePaginationComponent from 'react-responsive-pagination';

export type PaginationProps = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    rootContainerProps?: FlexProps;
} & FlexProps;

export const Pagination: FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
    ...props
}) => {
    return (
        <Flex alignItems={'center'} justifyContent={'center'} maxW={'sm'} mx={'auto'} {...props}>
            <ResponsivePaginationComponent
                current={currentPage}
                total={totalPages}
                onPageChange={onPageChange}
            />
        </Flex>
    );
};
