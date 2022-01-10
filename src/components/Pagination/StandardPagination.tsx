import React, { Children, useState } from 'react';
import { Container } from '..';
import { ContainerProps } from '../Container/Container.types';
import { StyledPaginationButton } from './PaginationButton.styled';

type StandardPaginationProps = {
  container?: ContainerProps;
  pageSize?: number;
} & ContainerProps;

const StandardPagination = ({
  children,
  container,
  pageSize = 3,
  ...props
}: StandardPaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const items = Children.toArray(children);
  const indexOfLastItem = currentPage * pageSize;
  const indexOfFirstItem = indexOfLastItem - pageSize;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
  let pageNumbers: number[] = [];
  for (let i = 1; i <= Math.ceil(items.length / pageSize); i++) {
    pageNumbers.push(i);
  }
  return (
    <Container
      flowType="flex"
      elementType="container"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      rowGap="1rem"
      {...props}
    >
      <Container {...container}>{currentItems.map(item => item)}</Container>
      <Container
        flexDirection="row"
        justifyContent="space-evenly"
        alignItems="center"
        columnGap="0.5rem"
      >
        <StyledPaginationButton
          disabled={currentPage === 1}
          size="xs"
          rounded="circle"
          varient="outlined"
          onClick={() => setCurrentPage(1)}
        >
          &laquo;
        </StyledPaginationButton>
        <StyledPaginationButton
          disabled={currentPage === 1}
          size="xs"
          rounded="circle"
          varient="outlined"
          onClick={() => setCurrentPage(prev => prev - 1)}
        >
          &lsaquo;
        </StyledPaginationButton>
        {pageNumbers
          .slice(
            currentPage === pageNumbers.length ||
              currentPage === pageNumbers.length - 1
              ? pageNumbers.length - 3
              : currentPage - 1,
            currentPage === pageNumbers.length ||
              currentPage === pageNumbers.length - 1
              ? pageNumbers.length
              : currentPage + 2
          )
          .map(number => (
            <StyledPaginationButton
              size="xs"
              rounded="circle"
              varient="outlined"
              onClick={() => setCurrentPage(number)}
              hover={currentPage === number}
            >
              {number}
            </StyledPaginationButton>
          ))}
        <StyledPaginationButton
          disabled={currentPage === pageNumbers.length}
          size="xs"
          rounded="circle"
          varient="outlined"
          onClick={() => setCurrentPage(prev => prev + 1)}
        >
          &rsaquo;
        </StyledPaginationButton>
        <StyledPaginationButton
          disabled={currentPage === pageNumbers.length}
          size="xs"
          rounded="circle"
          varient="outlined"
          onClick={() => setCurrentPage(pageNumbers.length)}
        >
          &raquo;
        </StyledPaginationButton>
      </Container>
    </Container>
  );
};

export default StandardPagination;
