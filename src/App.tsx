import React, { useState } from 'react';
import CardList from './components/CardList';
import Search from './components/Search';
import Spinner from './components/Spinner';
import useFetch from './hooks/useFetch';

function App() {
  const [searchText, setSearchText] = useState('');
  const [page, setPage] = useState(1);
  const { data, loading } = useFetch(searchText, page);
  return (
    <div className='App'>
      <Search setSearchText={setSearchText} />
      <CardList data={data} loadMore={() => setPage((prev) => prev + 1)} />
      {loading && <Spinner />}
    </div>
  );
}

export default App;
