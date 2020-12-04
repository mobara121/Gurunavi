import './App.css';
import Home from './components/Home';
import Footer from './components/Footer.jsx';
import {makeStyles, createStyles} from '@material-ui/core';

const useStyles = makeStyles(()=>
  createStyles({
    app:{
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.2)'
    },
  })
)

function App() {
  const classes =useStyles();

  return (    
    <div className={classes.app}>
        <Home/>
        <Footer/>
    </div>
  );
}

export default App;
