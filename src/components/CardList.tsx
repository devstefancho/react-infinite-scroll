import { FC } from 'react';
import styled from 'styled-components';
import { Docs } from '../hooks/useFetch';
import useInfiniteScroll from '../hooks/useInfiniteScroll';
import CardItem from './CardItem';

/* 바깥쪽에 두면 useCallback으로 감쌀수 없으므로, 계속 해서 콜백이 실행됨
 * observer에 포착된(isIntersecting) element들이 entries에 들어간다.
 * 예를 들어 한줄에 4개 item이 있고, 매 줄마다 callback이 실행된다면, entries는 4개가 들어감
 */
/*
const ob = new IntersectionObserver((entries) => {
  console.log('entries: ', entries);
});
*/

const CardList: FC<{ data: Docs[]; loadMore: () => void }> = ({
  data,
  loadMore,
}) => {
  const { lastItemRef } = useInfiniteScroll(loadMore);

  return (
    <StyledCardList>
      {data?.map((book, index) => {
        if (index === data.length - 1) {
          return (
            <div ref={lastItemRef} key={index}>
              <CardItem book={book} />
            </div>
          );
        }
        return <CardItem book={book} key={index} />;
      })}
    </StyledCardList>
  );
};

const StyledCardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-inline: 50px;
`;
export default CardList;
