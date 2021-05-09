import React from 'react';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly';
import ChildCareIcon from '@material-ui/icons/ChildCare';
import PoolIcon from '@material-ui/icons/Pool';
import GolfCourseIcon from '@material-ui/icons/GolfCourse';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import SpaIcon from '@material-ui/icons/Spa';
import HotTubIcon from '@material-ui/icons/HotTub';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
export default class ParkComponent extends React.Component {
 
  render(){
      return (
          <div  className="border border-3 rounded mt-5 p-4">
              <div className="d-flex  text-black-50 justify-content-between">
           
                  <div> 
                        <div className="h6 fw-light m-0 p-0"><b>Riverdale Park East</b></div>  
                        <div className="small m-0 p-0">
                            <small>550 Broadview Ave</small>
                            </div>  
                  </div>
                  <div >
                      <DirectionsWalkIcon className="color"/>
                      <div className="small m-0 p-0 color">
                            <small>3 min</small>
                            </div> 
                  </div>
              </div>
              <div>
                     <div  className=" d-flex justify-content-between mt-2">
                         <ChildFriendlyIcon size="small"/>
                         <PoolIcon size="small"/>
                         <SpaIcon size="small"/>
                         <GolfCourseIcon size="small"/>

                     </div>
                     <div  className=" d-flex justify-content-between mt-2">
                       <BeachAccessIcon size="small"/>
                       <ChildCareIcon size="small"/>
                       <FitnessCenterIcon size="small"/>
                       <HotTubIcon size="small"/>

                     </div>


              </div>
          </div>
      )
  }
}
