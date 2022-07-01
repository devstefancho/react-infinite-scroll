import { FC } from 'react';
import styled from 'styled-components';
import { Docs } from '../hooks/useFetch';
const CardItem: FC<{ book: Docs }> = ({ book }) => {
  return (
    <StyledCard>
      <div className='image'></div>
      <div className='title'>{book.title}</div>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  .title {
    max-width: 90px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .image {
    width: 100px;
    height: 100px;
    border-radius: 5px;
    background-color: #eee;
  }
`;

export default CardItem;
