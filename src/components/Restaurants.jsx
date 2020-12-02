import React, {useState} from 'react';
import {makeStyles, createStyles} from '@material-ui/core';
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
        image:{
            height:'244px',
            lineHeight:'244px',
            width: '244px',
            margin:'auto 0'
        },
        btn:{
            margin:'15px auto'
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

                    <div><img className={classes.image} src={props.image.shop_image1}  alt="new" /></div>
                    <span className={classes.btn}><button onClick={handleClick}>お店の詳細をみる　⇩</button></span>
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