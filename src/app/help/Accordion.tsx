"use client"
import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
function MyAccordion({ title, content, expanded, onChange }) {
    return (
      <Accordion expanded={expanded} onChange={onChange} sx={{border:"0.5px solid",borderBottom:"#005CFF 0.5px solid",borderTop:"#fff 0.5px solid",borderLeft:"#fff 0.5px solid",borderRight:"#fff 0.5px solid"}}>
        <AccordionSummary
          expandIcon={expanded ? <RemoveIcon className='text-[#005CFF]' /> : <AddIcon className='text-[#005CFF]'/>}
          aria-controls="panel-content"
          id="panel-header"
        >
          <Typography className='text-[14px] md:text-[18px] leading-[18px] font-semibold text-[#414141] py-[30px] md:px-[20px]'>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='text-[14px] leading-[30px] text-[#414141] md:px-[20px]'>{content}</Typography>
        </AccordionDetails>
      </Accordion>
  );
}

export default MyAccordion;

