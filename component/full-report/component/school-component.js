import React from 'react'
import Rating from '@material-ui/lab/Rating';
import ReactECharts from 'echarts-for-react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { green } from '@material-ui/core/colors';
export default class SchoolComponent extends React.Component{
render(){
    const r=7
 const option = {

    legend: {
     
      
        top:"0px",
        data: ['a', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
    },
    color:["#FFD700","#b2b3ab"],
    series: [
        {
            name: 'Ratings',
            type: 'pie',
            radius: ['80%', '100%'],
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
          
            labelLine: {
                show: false
            },
            data: [
                {value: r,name:r/10+"/10"},
                {value: 10-r},
               
            ]
        }
    ]
  };
    return (
        <Card className="  bg-white mt-3 rounded border" >
        <CardContent>
          <p className="h6 m-0 text-black-50 text-truncate"><b>bagby Elementary School</b></p>
            <div className="d-flex overflow-hidden text-truncate">
              <small className="small color "> KS</small>
              <small className="small color ml-2"><FiberManualRecordIcon className="color"  style={{fontSize:"10px"}}/> public</small>
              <small className="small color ml-2 text-truncate"><FiberManualRecordIcon className="color"  style={{fontSize:"10px"}}/> 500 students</small>
            </div>
            <small className="small text-black-50 "> combrian school district</small>
            <div className="d-flex mt-2  pb-0 ">
                <div className="col-6 p-0 m-0">
                       <div  >
                           <ReactECharts option={option} style={{height: '60px' }}/>
                        </div>

                   <div className="text-center small p-0 m-0 fw-lighter ">
                          <small  style={{opacity:"0.6"}}>Great School Rating</small>
                   </div>
                </div>
                  <div className="w-50 border-left d-flex flex-column justify-content-start">
                            <p className="small text-center mt-3 p-0 mb-0"><b>3.6/5</b></p>
                                             <div className="text-center p-0 m-0" >  
                                                           <Rating name="disabled" value={3.6} readOnly precision={0.1} style={{fontSize:"0.9rem"}} />
                                                  </div>
                                                  <div className="text-center small mt-1 fw-lighter ">
                                                        <small  style={{opacity:"0.6"}}>Parent Rating Average</small>
                                                     </div>
                 </div>
            </div>
        </CardContent>
</Card>
    )
}

}