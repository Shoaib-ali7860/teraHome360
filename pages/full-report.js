import Head from 'next/head'

import ReactECharts from 'echarts-for-react';
import React from 'react';
import FullReportComponent from '../component/full-report/full-report'
export default function FullReport() {
 
  return (
    <div >
      
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div >
       <FullReportComponent/>
       
    </div>

    </div>
  )
}
