import { FC, useCallback, useRef } from 'react';
import styled from 'styled-components';
import { Docs } from '../hooks/useFetch';
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

const CardList: FC<{ data: Docs[]; setPage: () => void }> = ({
  data,
  setPage,
}) => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  const lastBookElementRef = useCallback((node: HTMLDivElement) => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
    observerRef.current = new IntersectionObserver((entries) => {
      console.log('entries: ', entries);
      if (entries[0].isIntersecting) {
        console.log('load more page');
        setPage();
      }
    });
    if (node) {
      observerRef.current.observe(node);
    }
  }, []);

  return (
    <StyledCardList>
      {data?.map((book, index) => {
        if (index === data.length - 1) {
          return (
            <div ref={lastBookElementRef}>
              <CardItem book={book} key={index} />
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
