import React from 'react';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Rating from '@material-ui/lab/Rating';
export default class GroceryComponent extends React.Component {
 
  render(){
      return (
          <div  className="border border-3 text-black-50 rounded mt-3 mb-3 p-3">
             <div className="row">
                 <div className="col-6 border-right overflow-hidden ">
                     <div className="d-flex">
                         <div className="h6"> <b>Lobalaws</b></div>
                          <div className="ml-2" >  
                              <Rating name="disabled" value={3.6} readOnly precision={0.1}  style={{fontSize:"1rem"}} size="small"/>
                          </div>
                     </div>
                     <div className="small">
                              <small>720 Broadview Ave,Toronto,ON,M4K2p1</small>
                     </div>


                 </div>
                 <div className="col-6 d-flex">
                     <div className="col-6 border-right text-center">
                                <DirectionsWalkIcon fontSize="medium" className="color"/>
                                <div className="small">
                                    <small>13 minute walk</small>
                                </div>
                     </div>
                     <div className=" col-6 text-center">
                                <LocationOnIcon fontSize="medium" className="color"/>
                                <div className="small">
                                    <small>1 KM away</small>
                                </div>
                     </div>

                 </div>
             
             </div>
          </div>
      )
  }
}
