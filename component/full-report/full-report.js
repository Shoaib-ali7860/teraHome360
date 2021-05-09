import React from 'react';
import GetAppIcon from '@material-ui/icons/GetApp';
import HomeIcon from '@material-ui/icons/Home';
import Contact from './component/contact'
import ImageIcon from '@material-ui/icons/Image';
import SchoolIcon from '@material-ui/icons/School';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import PieCharts from './component/pie-charts'
import BookIcon from '@material-ui/icons/Book';
import NeighbourComponent from './component/neighbour-component'
import GroceryComponent from './component/grocery-component'
import DescriptionCard from './component/description-card'
import SchoolComponent from './component/school-component'
import ParkComponent from './component/park-component';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
import DemographicsComponent from './component/Demographics-component'
import PersonIcon from '@material-ui/icons/Person';
import NeighbourhoodContacts from './component/neighbour-contacts-component'
export default class FullReportComponent extends React.Component {
  render(){
    const data=[
      {
        head:"Detached house",
        value:[
          {
            title: "1 year value change",
            per:"+15%"
          },
          {
           title: "1 year value change",
           per:"+15%"
         }
        ]
      },
      {
       head:"Semi / TownHouse",
       value:[
         {
           title: "1 year value change",
           per:"+15%"
         },
         {
          title: "1 year value change",
          per:"+15%"
        }
       ]
      },{
       head:"Condo / Apartment",
       value:[
         {
           title: "1 year value change",
           per:"+15%"
         },
         {
          title: "1 year value change",
          per:"+15%"
        }
       ]
      },{
       head:"Any type of home",
       value:[
         {
           title: "1 year value change",
           per:"+15%"
         },
         {
          title: "1 year value change",
          per:"+15%"
        }
       ]
      }
    ]
    const data1=[
     {
       head:"Detached house",
       value:[
         {
           title: "Property Make-Up",
           per:"44%"
         },
         {
          title: "Average Lot Size",
          per:"5,270 Sqft"
        },
        {
         title: "Average Living space",
         per:"2,170 Sqft"
       }
       ]
     },
     {
      head:"Semi / TownHouse",
      value:[
       {
         title: "Property Make-Up",
         per:"44%"
       },
       {
        title: "Average Lot Size",
        per:"5,270 Sqft"
      },
      {
       title: "Average Living space",
       per:"2,170 Sqft"
     }
     ]
     },{
      head:"Condo / Apartment",
      value:[
       {
         title: "Property Make-Up",
         per:"44%"
       },
       {
        title: "Average Lot Size",
        per:"5,270 Sqft"
      },
      {
       title: "Average Living space",
       per:"2,170 Sqft"
     }
     ]
     },{
      head:"Any type of home",
      value:[
       {
         title: "Property Make-Up",
         per:"44%"
       },
       {
        title: "Average Lot Size",
        per:"5,270 Sqft"
      },
      {
       title: "Average Living space",
       per:"2,170 Sqft"
     }
     ]
     }
   ]
     return (
   
       <div className="col-9  m-auto p-5" >
         <div className="d-flex justify-content-between">
           <div className="h4">
            <b> Neighbourhood Report</b> 
           </div>
           <GetAppIcon/>
         </div>
         <div className="d-flex  row justify-content-between mt-5">
           <div className="col-md-6 col-lg-8 col-12 p-0 ">
                 <div>
                   <div className="color h1 ">
                     <b>Beautiful Neighbourhood</b>
                   </div>
                   <div className="h2 text-black-50">
                            Ontario,Canada
                   </div>
                 </div>
              
           </div>
           <div className="col-6 col-lg-3 " >
           <Contact data={"Agent for neighbourhood1"}/>
           </div>
   
         </div>
   <div>
   <div className="border-global mt-3" >
                <div className="d-flex justify-content-between">
                    <div className="d-flex" >
                        <ImageIcon fontSize="large" className="color" style={{fontSize:"3.2rem"}}/>
                        <div className="color ml-3 h1">
                         <b> Neighbourhood</b>
                        </div>
                    </div>
                    <div className="color mt-2 h3">
                     <b> OverView</b>
                      </div>
                </div>
   
         </div>
         <NeighbourComponent/>
   </div>
           <div>
              <div className="border-global  mt-3" >
                <div className="d-flex justify-content-between">
                    <div className="d-flex" >
                        <HomeIcon fontSize="large" className="color" style={{fontSize:"3.2rem"}}/>
                        <div className="color ml-3 h1">
                         <b> Real Estate Data</b>
                        </div>
                    </div>
                    <div className="color mt-2 h3">
                     <b> Statistics</b>
                      </div>
                </div>
              
   
              </div>
              <div className="pt-4 d-flex row">
                   <div  className="col-md-6 col-12 ">
                       <div className="h3 border-bottom border-success col-12 overflow-hide text-truncate">
                             <b>Year of construction</b>
                       </div>
                       <PieCharts/>
                   </div>
                   <div  className="col-md-6 col-12">
                       <div className="h3 border-bottom border-success col-12 ">
                             <b>Dwelling Type</b>
                       </div>
                       <PieCharts/>
                   </div>
   
              </div>
              <div>
                   <div className="border-bottom border-success mt-5">
                      <div className="h3">
                            <b>Value Change</b>
                      </div>
                   </div>
                   <div className=" row">
   
                        {data.map(value=><div className="p-3 col-md-6 col-sm-12 col-lg-3">
                               <DescriptionCard val={value}/>
                        </div>)}
                   </div>
              </div>
              <div>
                   <div className="border-bottom border-success mt-2">
                      <div className="h3">
                            <b>Property Statistics</b>
                      </div>
                   </div>
                   <div className=" row">
   
                        {data1.map(value=><div className="p-3  col-md-6 col-sm-12 col-lg-3">
                               <DescriptionCard val={value}/>
                        </div>)}
                   </div>
              </div>
           </div>
           <div>
              <div className="border-global  mt-3" >
                <div className="d-flex justify-content-between">
                    <div className="d-flex" >
                        <SchoolIcon fontSize="large" className="color" style={{fontSize:"3.2rem"}}/>
                        <div className="color ml-3 h1">
                         <b> Schools</b>
                        </div>
                    </div>
                    <div className=" mt-2 h3">
                     <b> Priority1</b>
                      </div>
                </div>
              </div>
              <div>
                   <div className="color h5 mt-3">
                        Elementary
                   </div>
                   <div className="row">
                        {data.map(val=><div className="col-md-6 col-sm-12 col-lg-3 pl-3"><SchoolComponent/>  </div>)}
                         
                   </div>
   
              </div>
              <div>
                   <div className="color h5 mt-3">
                        High
                   </div>
                   <div className="row">
                        {data.map(val=><div className="col-md-6 col-sm-12 col-lg-3 pl-3"><SchoolComponent/>  </div>)}
                         
                   </div>
   
              </div>
              <div>
                   <div className="color h5 mt-3">
                        Middle
                   </div>
                   <div className="row">
                        {data.map(val=><div className="col-md-6 col-sm-12 col-lg-3 pl-3"><SchoolComponent/>  </div>)}
                         
                   </div>
   
              </div>
   
           </div>
   
           <div>
             <div className="border-global mt-5" >
                <div className="d-flex justify-content-between">
                    <div className="d-flex" >
                        <ShoppingCartIcon fontSize="large" className="color" style={{fontSize:"3.2rem"}}/>
                        <div className="color ml-3 h1">
                         <b> Groceries</b>
                        </div>
                    </div>
                    <div className=" mt-2 h3">
                     <b> Priority2</b>
                      </div>
                </div>
   
              </div>
              <div className="row m-3">
                        {data.map(val=><div className="col-md-12 col-lg-6  pl-3"><GroceryComponent/>  </div>)}
                         
                   </div>
           </div>
           <div>
             <div className="border-global mt-5" >
                <div className="d-flex justify-content-between">
                    <div className="d-flex" >
                        <LocalBarIcon fontSize="large" className="color" style={{fontSize:"3.2rem"}}/>
                        <div className="color ml-3 h1">
                         <b> Restaurant and Bars</b>
                        </div>
                    </div>
                    <div className=" mt-2 h3">
                     <b> Priority3</b>
                      </div>
                </div>
   
              </div>
              <div className="row m-3">
                        {data.map(val=><div className="col-md-12 col-lg-6  pl-3"><GroceryComponent/>  </div>)}
                         
                   </div>
           </div>
       <div>
       <div className="border-global  mt-3" >
                <div className="d-flex justify-content-between">
                    <div className="d-flex" >
                        <ChildFriendlyIcon fontSize="large" className="color" style={{fontSize:"3.2rem"}}/>
                        <div className="color ml-3 h1">
                         <b> Day Care</b>
                        </div>
                    </div>
                    <div className=" mt-2 h3">
                     <b> Priority4</b>
                      </div>
                </div>
              </div>
              <div>
                  
                   <div className="row mt-5">
                        {data.map(val=><div className="col-md-6 col-sm-12 col-lg-3 pl-3"><SchoolComponent/>  </div>)}
                         
                   </div>
   
              </div>
   
       </div>
   
       <div>
       <div className="border-global  mt-5" >
                <div className="d-flex justify-content-between">
                    <div className="d-flex" >
                        <LocalFloristIcon fontSize="large" className="color" style={{fontSize:"3.2rem"}}/>
                        <div className="color ml-3 h1">
                         <b> Parks</b>
                        </div>
                    </div>
                    <div className=" mt-2 h3">
                     <b> Priority5</b>
                      </div>
                </div>
              </div>
              <div>
                   <div className="row">
                        {data.map(val=><div className="col-md-6 col-sm-12 col-lg-3 pl-3"><ParkComponent/>  </div>)}
                         
                   </div>
              </div>
       </div>
            <div>
            <div className="border-global  mt-5" >
                <div className="d-flex justify-content-between">
                    <div className="d-flex" >
                        <PeopleIcon fontSize="large" className="color" style={{fontSize:"3.2rem"}}/>
                        <div className="color ml-3 h1">
                         <b> Demographics</b>
                        </div>
                    </div>
                    <div className="color mt-2 h3">
                     <b> Education & Employment</b>
                      </div>
                </div>
              </div>
              <DemographicsComponent/>
           </div>
           <div>
            <div className="border-global  mt-5" >
                <div className="d-flex justify-content-between">
                    <div className="d-flex" >
                        <PersonIcon fontSize="large" className="color" style={{fontSize:"3.2rem"}}/>
                        <div className="color ml-3 h1">
                         <b> Professinal</b>
                        </div>
                    </div>
                    <div className="color mt-2 h3">
                     <b> Contacts</b>
                      </div>
                </div>
              </div>
             <NeighbourhoodContacts/>
           </div>
           <div>
           <div className="border-global  mt-5" >
                <div className="d-flex justify-content-between">
                    <div className="d-flex" >
                        <BookIcon fontSize="large" className="color" style={{fontSize:"3.2rem"}}/>
                        <div className="color ml-3 h1">
                         <b> Legal</b>
                        </div>
                    </div>
                    <div className="color mt-2 h3">
                     <b> Contacts</b>
                      </div>
                </div>
    
              </div>
              <div className="mt-5">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                </div>
           </div>
       </div>
   
      
     )
   
  }
}
