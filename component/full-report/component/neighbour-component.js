import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SchoolIcon from '@material-ui/icons/School';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
export default class DescriptionCard extends React.Component {
 
  render(){
      return (
          <div  className="border border-3 rounded overflow-hidden mt-5">
         <div className="row"  style={{background:"#c1e8e4"}}>
             <div className="col-md-7">
             <CardMedia
                     style={{height:"100%",minHeight:"350px"}}
                     image="/map.webp"
                      title="Contemplative Reptile"
                        />
             </div>
             <div className="col-md-5 pt-5 pb-5 p-3">
                   <div className="d-flex row justify-content-between">
                         <div className="d-flex col-lg-6 col-6 col-md-12">
                                       <HomeOutlinedIcon className="mt-2" style={{fontSize:"2.1rem"}}/>
                                      <div className="ml-2">
                                         <div className="m-0  p-0">
                                          
                                                  <small>Buy</small>
                                           
                                         </div>
                                          <div className="color m-0 p-0 h6">
                                           <b > $398k-$1.7M</b>
                                          </div>
                                      </div>
                         </div>
                         <div className="d-flex  col-lg-6  col-6  col-md-12">
                                       <HomeOutlinedIcon className="mt-2" style={{fontSize:"2.1rem"}}/>
                                       <div className="ml-2">
                                         <div className="m-0  p-0 text-truncate ">
                                          
                                                  <small className="">For sale on TeraHome</small>
                                           
                                         </div>
                                          <div className="color m-0 p-0 h6">
                                           <b> 13 homes</b>
                                          </div>
                                      </div>
                         </div>
                   </div>
                   <div className="d-flex  row mt-4 justify-content-between">
                         <div className="d-flex col-lg-6  overflow-hidden col-6  col-md-12">
                                       <DriveEtaIcon className="mt-2 " style={{fontSize:"2.1rem"}}/>
                                      <div className="ml-2 ">
                                         <div className="m-0  text-truncate p-0">
                                          
                                                  <small >To Downrown Ontario</small>
                                           
                                         </div>
                                          <div className="color m-0 p-0 h6">
                                           <b> 30 minutes</b>
                                          </div>
                                      </div>
                         </div>
                         <div className="d-flex col-lg-6  col-6  col-md-12">
                                       <SchoolIcon className="mt-2" style={{fontSize:"2.1rem"}}/>
                                       <div className="ml-2">
                                         <div className="m-0 text-truncate p-0">
                                          
                                                  <small>7 schools</small>
                                           
                                         </div>
                                          <div className="color text-truncate m-0 p-0 h6">
                                           <b> 1Rated 1/10-7/10</b>
                                          </div>
                                      </div>
                         </div>
                   </div>
                   <div className="d-flex row mt-4 text-truncate  justify-content-between">
                         <div className="d-flex col-lg-6  col-6  col-md-12">
                                       <DriveEtaIcon className="mt-2" style={{fontSize:"2.1rem"}}/>
                                      <div className="ml-2 text-truncate">
                                         <div className="m-0  p-0">
                                          
                                                  <small>To Downrown Ontario</small>
                                           
                                         </div>
                                          <div className="color m-0 p-0 h6">
                                           <b> 30 minutes</b>
                                          </div>
                                      </div>
                         </div>
                         <div className="d-flex  col-lg-6  col-6  col-md-12">
                                       <SchoolIcon className="mt-2" style={{fontSize:"2.1rem"}}/>
                                       <div className="ml-2">
                                         <div className="m-0  text-truncate p-0">
                                          
                                                  <small>7 schools</small>
                                           
                                         </div>
                                          <div className="color m-0 p-0 h6">
                                           <b> Rated 1/10-7/10</b>
                                          </div>
                                      </div>
                         </div>
                   </div>
                   <div className="d-flex row mt-4 justify-content-between">
                         <div className="d-flex col-lg-6  col-6  col-md-12">
                                       <DriveEtaIcon className="mt-2" style={{fontSize:"2.1rem"}}/>
                                      <div className="ml-2">
                                         <div className="m-0  p-0">
                                          
                                                  <small>To Downrown Ontario</small>
                                           
                                         </div>
                                          <div className="color m-0 p-0 h6">
                                           <b> 30 minutes</b>
                                          </div>
                                      </div>
                         </div>
                         <div className="d-flex  col-lg-6  col-6  col-md-12">
                                       <SchoolIcon className="mt-2" style={{fontSize:"2.1rem"}}/>
                                       <div className="ml-2">
                                         <div className="m-0 text-truncate p-0">
                                          
                                                  <small>7 schools</small>
                                           
                                         </div>
                                          <div className="color m-0 p-0 h6">
                                           <b>  Rated 1/10-7/10</b>
                                          </div>
                                      </div>
                         </div>
                   </div>
             </div>
             
         </div>
          </div>
      )
  }
}
