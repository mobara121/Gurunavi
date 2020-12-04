import React, {useState} from 'react';
import {makeStyles, createStyles, Hidden} from '@material-ui/core';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles(()=>
    createStyles({
        res:{
            width: '345px',
            minHeight: '380px',
            margin:'10px',    
        },
        container:{
            display: 'flex',
            flexDirection: 'column',
            padding: '20px',
            alignContent:'space-around'
        },
        name:{
            textAlign:'left',
            fontSize: '1rem',
            height: '48px',
            fontWeight: '800'
        },
        slide:{
            position: 'relative',
            width: '244px',
            height: '244px',
            overflow: 'hidden',
            margin:'0 auto'
        },
        image:{
            position: 'absolute',
            top:'50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            margin:'auto 0',
        },
        
        btn:{
            margin:'15px auto',
            
        },
        btnText:{
            fontWeight: '400',
            color: '#fff',
            backgroundColor: '#e50914',
            borderRadius: '5px',
            borderColor: '#e50915',
            '&:hover':{
                backgroundColor:'#df6767'
              }
        },
        details:{
            textAlign:'left',
            fontSize:'0.8rem',
            padding: '10px auto',
            width: '295px'
        },
        link:{
            fontSize: '0.6rem'
        }
    })
)

function Restaurants(props){
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleClick = e =>{
        setOpen(!open)
    }

    return(
        <div>
            
            <Card className={classes.res}>
                <div className={classes.container}>
                    <p className={classes.name}>{props.name}</p>            

                    <div className={classes.slide}>
                        <img className={classes.image} src={props.image.shop_image1}  alt="new" />
                    </div>
                    <span className={classes.btn}><button  className={classes.btnText}onClick={handleClick}>お店の詳細をみる　⇩</button></span>
                    {open? 
                        <div className={classes.details}>
                            <p>{props.pr.pr_short}</p>
                            <p>{props.address}</p>
                            <p>{props.tel}</p>
                            <p><a className={classes.link} href={props.url}>{props.url}</a></p>
                        </div>
                    : ""}
                </div>
            </Card> 
        </div>
    )
}

export default Restaurants;