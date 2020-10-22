import React, {useState, useEffect} from 'react';
import Box from './Box';

function Home() {
    const [data, setData] = useState([]);

  useEffect( () => {
    loadData();
    //getData();
  }, []);

  const loadData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => setData(data));
  }

    return (
        <div>
        {data.map(user =>(
        <Box {...user} key={user.id}></Box>
        ))}
        </div>
    )
}

export default Home
