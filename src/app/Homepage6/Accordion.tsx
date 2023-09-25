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
    <Accordion expanded={expanded} onChange={onChange} className='bg-[#1E1E1E] rounded-xl'>
      <AccordionSummary
        expandIcon={expanded ? <RemoveIcon className='text-[#fff]' /> : <AddIcon className='text-[#fff]' />}
        aria-controls="panel-content"
        id="panel-header"
      >
        <Typography className='text-[16px] md:text-[18px] leading-[18px] font-medium text-[#fff] py-[30px] px-[20px] bg-[#1E1E1E]'>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography className='text-[14px] leading-[30px] text-[#fff] bg-[#1E1E1E] max-w-[650px]'>{content}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default MyAccordion;

