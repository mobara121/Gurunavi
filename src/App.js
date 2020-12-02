import './App.css';
import React, {useState, useEffect} from 'react';
import Restaurants from './components/Restaurants';
import {makeStyles, createStyles} from '@material-ui/core';

const useStyles = makeStyles(()=>
  createStyles({
    app:{
      margin: '20px auto',
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
    },
    input:{
      height: '40px',
      width: '200px',
      margin: '0 15px',
      padding: '5px',
      borderRadius: '5px'
    },
    btn:{
      backgroundColor: '#e50914',
      fontWight: '400',
      fontSize: '1rem',
      color:'#fff',
      borderRadius: '5px',
      padding: '3px 10px'
    },
    title:{
      fontSize: '3.5rem',
      fontFamily: 'Gamja Flower, cursive',
      color:'#fff'
    },
    card:{
      display: 'flex',
      flexFlow: 'row wrap',
      margin: '5%',
      justifyContent: 'center',
      
    }
  })
)

function App() {
  const classes =useStyles();
  const [query, setQuery] =useState('');
  const [results, setResults] = useState([]);
  const [filter, setFilter] = useState('');

  const baseURL= 'https://api.gnavi.co.jp/RestSearchAPI/v3/';
  const keyid = 'f99b44114153112a2e6302d0433ad838';

  useEffect(()=>{
      const fetcher=()=>{
        fetch(`${baseURL}?keyid=${keyid}&freeword=${query}`)
        .then(res=>res.json())
        .then(results=>{
          console.log(results.rest)
          setResults(results.rest);
        })
        .catch(err=>console.log(err))
      }
      fetcher();
      console.log('Fetched!!')
    }, [query])

    const handleSubmit = e =>{
      e.preventDefault();
      setQuery(filter);
      setFilter('');
    }

  return (    
    <div className={classes.app}>
      <header className={classes.appHeader}>
        <h1 className={classes.title}>ぐるなびAPI</h1>
        <form onSubmit={handleSubmit}>
          <input value={filter} onChange={e=>setFilter(e.target.value)} className={classes.input} placeholder='例：ラーメン'></input>
          <button className={classes.btn} type='submit'>お店を検索</button>
        </form>
      </header>
        <div className={classes.card}>
          {results.map(result=>{
            return <Restaurants
            key={result.id}
            name={result.name}
            pr={result.pr}
            image={result.image_url}
            address={result.address}
            tel={result.tel}
            url={result.url}
            />
          })}
        </div>
      
    </div>
  );
}

export default App;
