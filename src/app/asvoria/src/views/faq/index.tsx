import { useState } from 'react'
import type { SyntheticEvent } from 'react'

import Accordion from '@mui/material/Accordion'
import Typography from '@mui/material/Typography'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'

const FAQ = () => {
  // States
  const [expanded, setExpanded] = useState<string | false>(false)

  const handleChange = (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <div className='mt-8'>
      <Typography variant='h6' component={'h6'} mb={2}>
        Frequently Asked Questions
      </Typography>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary id='controlled-panel-header-1' aria-controls='controlled-panel-content-1'>
          <Typography>Why Asvoria Launchpad?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Solana&apos;s Lack of a presale platform makes it&apos;s token space hard to follow and to trust. Asvoria is
            here to change that.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary id='controlled-panel-header-2' aria-controls='controlled-panel-content-2'>
          <Typography>Whats a presale?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A Solana presale is a sale of tokens before the official launch of a project. It&apos;s a way for the
            project to raise funds and for the community to get in early.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default FAQ
