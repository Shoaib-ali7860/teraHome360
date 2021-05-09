import React from 'react';
import ReactECharts from 'echarts-for-react';
export default function PieCharts() {
const data=[
    {
        name:"Aparments",
        val:27
    },
    {
        name:"Villa",
        val:21
    },
    {
        name:"Detached",
        val:23
    },
    {
        name:"Flat",
        val:29
    }
]
const sum=data.reduce((n, {val}) => n + val, 0)

  //9760875575
const option1 = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)',
        left:0
    },
 color:['#fc6746','#734a5d','#009f92','#f3c269'],
    legend: {
        orient: 'vertical',
        right:' 10%',
        top:'center',
    },
    series: [
        {
            name: 'Chart',
            type: 'pie',
            right:'50%',
            radius: ['60%', '100%'],
            avoidLabelOverlap: true,
            label: {
                show: false,
                position: 'right'
            },
         
          data:data.map(value=>{
            return {value:value.val,name:value.val*100/sum+"% -"+value.name}
        })
           
        }
    ]
  };
  return (
    <div className="mt-5" >
    <ReactECharts option={option1} style={{height: '200px' ,marginLeft:"-30px"}}/>

    </div>
  )
}









