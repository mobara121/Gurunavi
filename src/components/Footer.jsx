import { createStyles } from '@material-ui/core';
import React from 'react';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles(()=>
  createStyles({
    footer:{
      height: '60px',
      width: '100%',
      lineHeight: '60px',
      backgroundImage: 'linear-gradient(to right, #57370D, #FFE998)',
      borderStyle:'double'
    },
    p:{
        color: '#fff',
        fontSize: '1rem',
        
    }
  })
)

const Footer=()=>{
    const classes = useStyles()
    return(
        <div className={classes.footer}>
            <div className={classes.p}>&copy;MIZUE O'BARA, 2020</div>
        </div>
    )
}

export default Footer;