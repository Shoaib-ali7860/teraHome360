import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { green } from '@material-ui/core/colors';

import VisibilityIcon from '@material-ui/icons/Visibility';
  export default function MediaCard() {
 
    return (
      <Card className="ml-auto mr-auto mt-5 mb-5 " style={{width:"20%"}}>
        
          <CardMedia
            style={{height:"150px"}}
            image="/images.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
          <div className="text-success m-0 h5">North west territories</div>
                   <div className="small m-0 " style={{opacity:"0.6"}}> sub header</div>

           <div className="row mt-4 ">
               <div className="col-3 ">
               <div className="text-success m-0 h5">8/10</div>
                   <div className="small m-0 " style={{opacity:"0.6"}}> Score</div>
               </div>
               <div className="col-3  "><div className="text-success m-0 h5">25</div>
                   <div className="small m-0 " style={{opacity:"0.6"}}> Listing</div>
                       </div>
            <div className="col-6 ">
            <div className="text-success m-0 h5">05-04-2021</div>
                   <div className="small m-0 " style={{opacity:"0.6"}}> Expiry</div>

</div>
           </div>
          </CardContent>
       
        <CardMedia> <div className="w-100 btn btn-light p-2 small " style={{opacity:"0.6"}}><small><VisibilityIcon fontSize="small"  /><b className="ml-2"> View neighbourhood Report</b></small></div></CardMedia>
      </Card>
    );
  }