import React, {useState, useEffect} from 'react';
import Restaurants from './Restaurants';
import {makeStyles, createStyles} from '@material-ui/core';

const useStyles = makeStyles(()=>
  createStyles({
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
      padding: '3px 10px',
      '&:hover':{
        backgroundColor:'#df6767'
      }
    },
    titleContainer:{
      backgroundImage:'linear-gradient(to right, #57370D, #FFE998)',
      margin:'50px auto',
      width:'345px',
      minWidth: '30vw',
      height: '10vh',
      lineHeight: '10vh',
      borderRadius: '10px',
      borderStyle: 'double'
    },
    title:{
      fontSize: '4rem',
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

function Home(){
    const classes =useStyles();
    const [query, setQuery] =useState('');
    const [results, setResults] = useState([]);
    const [filter, setFilter] = useState('');

    const baseURL= 'https://api.gnavi.co.jp/RestSearchAPI/v3/';
    const keyid = 'f99b44114153112a2e6302d0433ad838';

    useEffect(()=>{
        const fetcher=()=>{
          fetch(`${baseURL}?keyid=${keyid}&hit_per_page=12&freeword=${query}`)
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
    return(
        <header className={classes.appHeader}>
            <div className={classes.titleContainer}><span className={classes.title}>ぐるなび</span></div>
            <form onSubmit={handleSubmit}>
            <input value={filter} onChange={e=>setFilter(e.target.value)} className={classes.input} placeholder='例：ラーメン'></input>
            <button className={classes.btn} type='submit'>お店を検索</button>
            </form>

            <div className={classes.card}>
              
            { results.map(result=>{
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
        </header>
    )
}

export default Home;