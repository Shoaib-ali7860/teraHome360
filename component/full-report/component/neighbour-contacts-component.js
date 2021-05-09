import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Contact from './contact'


export default function NeighbourContactComponent() {

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
   const contact=[
       {name:"Real Estate Agents"},
       {name:"Lawyers"},
       {name:"Mortage Brokers"},
       {name:"House Inspector"},
   ]
  return (
    <div className={` mt-5`}>
    
    
   
      {contact.map((data,i)=>
      <Accordion expanded={expanded === `panel${i}`} onChange={handleChange(`panel${i}`)} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:"white"}}/>}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          className="bg-dark  rounded p-2 text-white mt-3 "
        >
          <Typography >{data.name}</Typography>
        </AccordionSummary>
        <AccordionDetails className="bg-white text-dark">
        <div className="row">
        {contact.map(data=>
            <div className="col-md-6 col-sm-12 col-lg-3">
                <Contact/>
            </div>
            )}
        </div>
        </AccordionDetails>
      </Accordion>)}
    </div>
  );
}
