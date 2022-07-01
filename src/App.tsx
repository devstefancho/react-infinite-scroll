import React, { useState } from 'react';
import CardList from './components/CardList';
import Search from './components/Search';
import useFetch from './hooks/useFetch';

function App() {
  const [searchText, setSearchText] = useState('');
  const [page, setPage] = useState(1);
  const { data } = useFetch(searchText, page);
  return (
    <div className='App'>
      <Search setSearchText={setSearchText} />
      <CardList data={data} setPage={() => setPage((prev) => prev + 1)} />
    </div>
  );
}

export default App;
