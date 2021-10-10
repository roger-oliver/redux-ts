import { useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const RepositoriesList: React.FC = () => {

  const [term, setTerm] = useState('');
  const { searchRepositories } = useActions();
  const { loading, data , error } = useTypedSelector((state) => state.repositories);
  console.log(loading, data, error);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    searchRepositories(term);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!loading && !error && 
        <ul>
          {data.map((item) => <li key={item}>{item}</li>)}
        </ul>
      }
    </div>
  );
}

export default RepositoriesList;