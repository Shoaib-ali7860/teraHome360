import React from 'react';
import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined';
export default class DescriptionCard extends React.Component {
 
  render(){
      return (
          <div  className="border border-3 rounded p-3">
               <div className="d-flex p-1 ">
                   <AccountBalanceOutlinedIcon className="color" />
                   <div className="h5 ml-1 text-black-50 text-truncate">
                     <b> {this.props.val.head}</b>
                     
                   </div>
                 

               </div>
               {this.props.val.value.map(data=><div className="d-flex text-black-50 justify-content-between">
                       <small> {data.title}</small>
                       <small> {data.per}</small>
                   </div>)}
          </div>
      )
  }
}
