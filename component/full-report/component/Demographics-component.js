import React from 'react';
import SchoolTwoToneIcon from '@material-ui/icons/SchoolTwoTone';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import TrainIcon from '@material-ui/icons/Train';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import ReactECharts from 'echarts-for-react';
import PieCharts from './pie-charts'
export default class DemographicsComponent extends React.Component {
 
  render(){
    const arr=[{lang:"English",bgcolor:"#c6eef5",color:"#000000",per:"50%"},{lang:"English",bgcolor:"#42b3c7",color:"#000000",per:"90%"},{lang:"English",bgcolor:"#0c6a7a" ,color:"#ffff",per:"30%"}]
    const option = {

        legend: {
         
            orient: 'horizontal',
            
            bottom:'start', 
            left:'start' ,   
            bottom:"0px",
            data: ['73% have no kids', '27% have kids']
        },
     
        series: [
            {
                name: 'Ratings',
                type: 'pie',
              
                radius: ['53%', '83%'],
                avoidLabelOverlap: false,
                label: {
                    show: true,
                    position: 'center'
                },
                emphasis: {
                  label: {
                      show:true,
                   
                  }
              },
              label: {
                show: false,
                position: 'right'
            },
              
                labelLine: {
                    show: true
                },
                data: [
                    {value: 73,name:"73% have no kids"},
                    {value: 27,name:"27% have kids"},
                   
                ]
            }
        ]
      };
      return (
          <div  className="mt-5">
                <div>
                      <div className="row">
                              <div className="col-sm-12 d-flex col-md-6">
                                    <div className="col-md-6 border-right">
                                        <div className="h5">Education</div>
                                        <div className="d-flex">
                                              <SchoolTwoToneIcon fontSize="large" className="color"/>
                                              <div className="ml-3">
                                                  <div className="color h6 m-0 p-0">
                                                      37.7%
                                                  </div>
                                                  <div className="small m-0 p-0">
                                                      <small>index 155</small>
                                                  </div>
                                              </div>

                                        </div>
                                        <div className="small">
                                                      <small>University Degree </small>
                                                  </div>
                                     </div>
                                     <div className="col-md-6 border-right">
                                        <div className="h5">Average Household Income</div>
                                        <div className="d-flex">
                                              <HomeOutlinedIcon fontSize="large" className="color"/>
                                              <div className="ml-3">
                                                  <div className="color h6  m-0 p-0 ">
                                                      $2000
                                                  </div>
                                                  <div className="small">
                                                      <small>index 95</small>
                                                  </div>
                                              </div>

                                        </div>
                                        <div className="small">
                                                      <small>University Degree </small>
                                                  </div>
                                     </div>
                              </div>
                              <div className="col-sm-12 col-md-6">
                                              <div className="h5">Method of Traveling to work:Top 2</div>  
                                              <div className="d-flex">
                                              <div className="d-flex col-6 justify-content-between">
                                                  <div>
                                                      <div className="d-flex">
                                                           <DriveEtaIcon fontSize="large" className="color"/>
                                                          <div className="ml-3">
                                                                 <div className="color h6  m-0 p-0 ">
                                                                      37.7%
                                                                 </div>
                                                                 <div className="small ">
                                                                      <small>index 135</small>
                                                                  </div>
                                                         </div>

                                                     </div>
                                                      <div className="small">
                                                           <small>Travel to work by car </small>
                                                      </div>
                                                  </div>
                                                  
                                             </div> 
                                             <div className="d-flex col-6 justify-content-between">
                                                  <div>
                                                      <div className="d-flex">
                                                           <TrainIcon className="color" fontSize="large"/>
                                                          <div className="ml-3">
                                                                 <div className="color h6  m-0 p-0 ">
                                                                      37.7%
                                                                 </div>
                                                                 <div className="small ">
                                                                      <small>index 135</small>
                                                                  </div>
                                                         </div>

                                                     </div>
                                                      <div className="small">
                                                           <small>Travel to work by car </small>
                                                      </div>
                                                  </div>
                                                  
                                             </div> 
                                             </div>
                                                
                              </div>
                          </div>  
                </div>
                <div className="row mt-5">
                     <div className="col-sm-12 col-md-6">
                            <div className=" border-bottom border-success h4 pb-2 ">
                                <b> Languages Spoken</b>
                           </div>
                           <div className="mt-5 ">
                           {arr.map(value=><div style={{width:value.per,backgroundColor:value.bgcolor,color:value.color}} className="p-2 rounded border-none mt-2 text-truncate h4 overflow-hidden">

                                             <div className="d-flex justify-content-between ">
                                             <div className="text-truncate overflow-hidden ">{value.lang}</div>
                                             <div className="text-truncate overflow-hidden ml-2">{value.per}</div>
                                               </div>
                                             </div>
                                      )}
                               </div>
                     </div>
                     <div className="col-sm-12 col-md-6">
                            <div className=" border-bottom border-success h4 pb-2 ">
                                <b> Age break-up</b>
                             
                           </div>
                          <div className="d-flex">
                              <div className=" col-8 " >
                                      <ReactECharts option={option}  />
                               </div>
                                <div>
                                <div className="d-flex mt-5">
                                                           <HomeOutlinedIcon  style={{fontSize:"3rem"}}/>
                                                          <div className="ml-1">
                                                                 <div className=" h5  m-0 p-0 ">
                                                                   Population
                                                                 </div>
                                                                 <div className="h5 color ">
                                                                     <b>78,465</b>
                                                                  </div>
                                                         </div>

                                                     </div>
                                                     <div className="d-flex">
                                                           <HomeOutlinedIcon  style={{fontSize:"3rem"}}/>
                                                          <div className="ml-1">
                                                                 <div className=" h5  m-0 p-0 ">
                                                                   Population
                                                                 </div>
                                                                 <div className="h5 color ">
                                                                     <b>78,465</b>
                                                                  </div>
                                                         </div>

                                                     </div>
                                </div>
                               
                          </div>
                     </div>
                   
                </div>
                <div className="row mt-5">
                     <div className="col-sm-12 col-md-6">
                            <div className=" border-bottom border-success h4 pb-2 ">
                                <b> Languages Spoken</b>
                           </div>
                           <div className="mt-5 ">
                           {arr.map(value=><div style={{width:value.per,backgroundColor:value.bgcolor,color:value.color}} className="p-2 rounded border-none mt-2 text-truncate h4 overflow-hidden">

                                             <div className="d-flex justify-content-between ">
                                             <div className="text-truncate overflow-hidden ">{value.lang}</div>
                                             <div className="text-truncate overflow-hidden ml-2">{value.per}</div>
                                               </div>
                                             </div>
                                      )}
                               </div>
                     </div>
                     <div className="col-sm-12 col-md-6">
                            <div className=" border-bottom border-success h4 pb-2 ">
                                <b> Household Income</b>
                           </div>
                           <div className="mt-5 ">
                                   <PieCharts/>
                            </div>
                     </div>
                     
                     </div>
          </div>
      )
  }
}
