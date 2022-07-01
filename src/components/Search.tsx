import { FC, useState } from 'react';
import styled from 'styled-components';

const Search: FC<{ setSearchText: (text: string) => any }> = ({
  setSearchText,
}) => {
  const [value, setValue] = useState('');
  return (
    <StyledInput
      type='text'
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onKeyUp={(e) => {
        if (e.code === 'Enter') {
          setSearchText(value);
        }
      }}
    />
  );
};

const StyledInput = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-block: 30px;
  margin-inline: auto;
  width: 200px;
  height: 30px;
`;

export default Search;
