import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import MessageIcon from '@material-ui/icons/Message';
  export default class Contact1 extends React.Component {
 render(){
   
  return (
    <Card className="ml-auto mr-auto  mb-5 shadow bg-white rounded" >
      
        <CardContent>
         <div className="d-flex "><Avatar alt="Remy Sharp" >Pro</Avatar>
        <div className="ml-3">
            <div className="h6 m-0">Bessie Cooper</div>
            <div className="h6 m-0 " style={{opacity:"0.6"}}>Gillette</div>
        </div>
        </div>
        <div className="h6 text-danger mt-3">About</div>
        <div className="small  " ><small className=" bg-success border rounded p-1 pl-2 pr-2" >neighbourhood1</small></div>
        <div><small>{this.props.data?this.props.data:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"}</small></div>
        <div className="h6 text-danger mt-2">Specialities</div>
      
        <div className="small  " ><small className=" bg-warning border rounded p-1 pl-2 pr-2" >Buyer Agents</small></div>
        </CardContent>
     
      <CardMedia> <div className="w-100 btn btn-light p-3 small  " style={{opacity:"0.6"}}><small><b className="ml-2"><MessageIcon/> Contact Brooklyn</b></small></div></CardMedia>
    </Card>
  );
 }
  }