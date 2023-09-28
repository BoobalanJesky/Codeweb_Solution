import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

interface MyAccordionProps {
  title: string;
  content: string;
  expanded: boolean;
  onChange: () => void;
  sx?: object;
  contentSx? :object;
  addSx? :object;
  removeSx? :object;
  titleSx?: object;
}

function MyAccordion({ title, content, expanded, onChange, sx,contentSx,removeSx,addSx,titleSx }: MyAccordionProps) {
  return (
    <Accordion expanded={expanded} onChange={onChange} sx={sx}>
      <AccordionSummary
        expandIcon={expanded ? <RemoveIcon sx={removeSx}/> : <AddIcon sx={addSx} />}
        aria-controls="panel-content"
        id="panel-header"
      >
        <Typography sx={titleSx}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography sx={contentSx}>{content}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default MyAccordion;