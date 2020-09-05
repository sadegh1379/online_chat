import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';
import SocketIOClient from "socket.io-client";
import man from './img/boy.png';
import woman from './img/woman.png'
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";


const useStyles = makeStyles((theme) => ({
    input: {
        borderRadius:'100px',
      width : 'auto',
      textAlign:'right',
      direction:'rtl',
      fontFamily : 'BYekan' ,
      width:'100%',
      wordBreak :'break-all;'
     
      },
      grid :{
          
          position : 'fixed',
          width:'100%',
          bottom : '0px',
          
          opacity:'0.9',
          padding:'10px'

      },
      text:{
          border:'1px solid gray'
          ,padding:'10px',
          borderRadius:'10px',
        margin:'10px',
        wordBreak :'break-all;',
        with:'100%',
        textAlign :'right',
        display:'flex',
        flexDirection:'column'
          
        
      },

   

      chat : {
          backgroundColor:'#ebebeb',
          height:'500px',
          margin:'10px',
          padding:'10px',
          overflowY:'auto',
          scrollBehavior: 'smooth'

      },
      sendbtn:{
          border:'1px solid blue',
          borderRadius:'5px',
          margin:'3px',
      }
    
  }));

function ChatRoom(props) {
    const classes = useStyles()
    // const scrolableGrid = React.useRef()
    const [listMsg, setListMsg] = React.useState([])
    const [message , setMessage]= React.useState('');
    
    const user = props.location.state; 
    const socket = React.useRef(SocketIOClient.connect("http://localhost:3010/socket"));
    

    React.useEffect(() => {
       socket.current.on("newMessage" , (message)=>{
           setListMsg(msg=>msg.concat(message));
        //    scrolableGrid.current.scroll(0 , scrolableGrid.current.scrollHeight)

       })
    },[]);

    const sendMsg = ()=>{
        if(message === '')
            return;

            const sended = {
                id:"",
                msg: message,
                    sender :{
                        name: user.name,
                        gender : user.gender
                    }
            }
            socket.current.emit("newMessage", sended);
            setMessage('')
    }

    const press = (e)=>{
        if(e.key === 'Enter'){

            if(message === '')
            return;

            const sended = {
                id:"",
                msg: message,
                    sender :{
                        name: user.name,
                        gender : user.gender
                    }
            }
            socket.current.emit("newMessage", sended);
            setMessage('');
        }
    }


    return (
        <>
        <Grid  className={classes.chat} >
            {listMsg.length>0? listMsg.map((message, i)=>{
                return(
                     <div  key={i} style={{display:'flex' , alignItems:'center' ,flexDirection: message.sender.name === user.name ? 'row-reverse' : 'flex-end'}}>
                       <Grid>
                            <img title={message.sender.name}  style={{width:'50px' , borderRadius:'50%'}} 
                            src={message.sender.gender == 0? woman : man}
                             alt={message.sender.name}/>
                        </Grid>
                        <Grid className={classes.text}>
                                <small style={{opacity:'0.5' , margin:'5px 0' , textAlign: message.sender.name === user.name ? 'right':'left'}}>{message.sender.name}</small>
                                <b>{message.msg}</b>
                                <p style={{opacity:'0.7' , margin:'5px 0' , textAlign: message.sender.name === user.name ? 'right':'left'}}>{message.date  }</p>

                               
                        </Grid>
                        
                    </div>
                )
                 
            }) : null}
          
        </Grid>

        <Grid className={classes.grid}>
                
        <div style={{display:'flex' , justifyContent:'center'}}>
            <TextField autoFocus onKeyPress={(e)=>press(e)} autoComplete="off" variant="outlined" className={classes.input} id="standard-basic" label="تایپ کنید"
            onChange={(e)=>setMessage(e.target.value)}
            value={message}
            />
            <Button onClick={sendMsg} className={classes.sendbtn}><SendIcon color="primary"/> </Button>
        </div>
        
        </Grid>

        </>
    )
}

export default ChatRoom
