import React from "react";
import {Button,Typography} from "@mui/material";
import {AppBar,Toolbar,List,ListItem,ListItemText} from "@mui/material";
import {useNavigate} from "react-router-dom";
import n from "./images/Nike-Logo.png";
import a from "./images/a.png";
import f from "./images/f.jpg";
import s from "./images/shoe_image.png";
import "./App.css";
function Pro1(){
    const navigate=useNavigate();
    //const para=["YOUR FEET DESERVE THE BEST AND WE ARE HERE TO<br/>HELP YOU WITH OUR SHOES.YOUR FEET DESERVE <br/>THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES"]
    return(
        
        <div style={{gap:"5%"}}>
        <AppBar position="static" color="transparent">
            <Toolbar style={{flexGrow:"1"}}>
                <img src={n} alt="nike" style={{maxHeight:"25px",maxHeight:"25px"}}></img>
                <List style={{display:"flex"}}>
                <ListItem Button onClick={()=>navigate("/Menu")}>
               <ListItemText primary="Menu"></ListItemText>
                </ListItem>
                <ListItem Button onClick={()=>navigate("/Location")}>
                <ListItemText primary="Location"></ListItemText>
                </ListItem>
                <ListItem Button onClick={()=>navigate("/About")}>
                <ListItemText primary="About"></ListItemText>
                </ListItem>
                <ListItem Button onClick={()=>navigate("/Contact")}>
                <ListItemText primary="Contact"></ListItemText>
                </ListItem>
                </List>
                <Button variant="contained" color="error">LOGIN</Button>
            </Toolbar>
        </AppBar>
        <div style={{display:"flex"}}>
        <div style={{margin:"2%"}}>
        <h1 style={{fontFamily:"initial",fontSize:"600%"}}>YOUR FEET <br/>DESERVE <br/>THE BEST</h1>
        <Typography variant="h5" color="GrayText">YOUR FEET DESERVE THE BEST AND WE ARE HERE TO<br/>HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE<br/> BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES</Typography>
        <div style={{display:"flex",gap:"30px"}}>
        <Button variant="contained" color="error">SHOP NOW</Button>
        <Button variant="outlined" color="error">CATEGORY</Button>
        </div>
        <Typography variant="body1">Also available on</Typography>
        <div style={{display:"flex",gap:"20px",cursor:"pointer"}}>
        <img src={a} alt="Amazon" style={{maxHeight:"20px",maxWidth:"20px"}}></img>
        <img src={f} alt="Flipkart" style={{maxHeight:"20px",maxWidth:"20px"}}></img>
        </div>
        </div>
        <div style={{marginTop:"5%"}}>
        <img src={s} alt="shoeimage"></img>
        </div>
        </div>
        </div>
    )
}
export default Pro1;
export function Menu()
{
    return(
        <h1>Menu is here!!</h1>
    )
}
export function Location()
{
    return(
        <h1>Location is here!!</h1>
    )
}
export function About()
{
    return(
        <h1>About is here!!</h1>
    )
}
export function Contact()
{
    return(
        <h1>contact is here!!</h1>
    )
}