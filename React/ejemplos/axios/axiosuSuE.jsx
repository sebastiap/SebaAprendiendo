import { useState,useEffect } from "react";
import axios from "axios";


const ApiProp = () => {
    const [data, setData] = useState({ hits: [] });
    const [query, setQuery] = useState('redux');
    const [url, setUrl] = useState(
      'https://hn.algolia.com/api/v1/search?query=redux',
    );

    const [isLoading,setLoading] = useState(false)
    const [isError, setIsError] = useState(false);

    useEffect(() => {
      const fetchData = async () => {
        setIsError(false);
        setLoading(true);
        try
        {        
          const result = await axios(url);
          setData(result.data);
        }
        catch (error) {
          setIsError(true);
        }
        setLoading(false);
      };
  
      fetchData();
    }, [url]);
    
    return (
        <>
      <input
        type="text"
        value={query}
        onChange={event => setQuery(event.target.value)}
      />
      <button
        type="button"
        onClick={() =>
          setUrl(`http://hn.algolia.com/api/v1/search?query=${query}`)
        }
      >
        Search
      </button>

      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <ul>
        {data.hits.map( item => (
            <li key={item.objectId}>
                <a href={item.url}>{item.title}</a>
            </li>
            ))}
        </ul>
      )}
        </>
    );
    
}

export default ApiProp;
