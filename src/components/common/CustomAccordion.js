import * as React from 'react';
import PropTypes from 'prop-types';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function CustomAccordion({ title, detail, styles }) {
    return (
        <>
            <Accordion sx={{ ...styles }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>{title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>{detail}</Typography>
                </AccordionDetails>
            </Accordion>
        </>
    );
}

CustomAccordion.propTypes = {
    title: PropTypes.string,
    detail: PropTypes.string,
    styles: PropTypes.object
};
