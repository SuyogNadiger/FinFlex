import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionTransition() {
  const [expanded, setExpanded] = React.useState(null);

  const accordionData = [
    {
      title: 'What is FinFlex?',
      content: 'FinFlex is your personal finance hub offering tools for investment planning, educational resources, and a digital library.',
    },
    {
      title: 'How does FinBot assist?',
      content: 'FinBot provides AI-powered answers to your financial questions, personalized advice, and real-time support.',
    },
    {
      title: 'Why should you invest?',
      content: 'Explore the investment documentation to learn why to invest, where to invest, how to invest, and what investment is all about.',
    },
    {
      title: 'What books are available in the digital library?',
      content: 'The digital library features a curated collection of books on financial literacy, investment strategies, and money management.',
    },
    {
      title: 'How secure is FinFlex?',
      content: 'FinFlex uses state-of-the-art encryption and secure cloud storage to protect your data.',
    },
    {
      title: 'What are the future features?',
      content: 'Upcoming features include detailed market analysis, goal-based planning, and more.',
    },
  ];

  const handleExpansion = (panel) => {
    setExpanded((prevExpanded) => (prevExpanded === panel ? null : panel));
  };

  return (
    <div className="flex justify-center items-center my-20">
      <div className="w-5/6 lg:w-2/3">
        {accordionData.map((item, index) => (
          <Accordion
            key={index}
            expanded={expanded === index}
            onChange={() => handleExpansion(index)}
            sx={{
              background: 'linear-gradient(to right, #0f172a, #000000)', // Gradient from slate-900 to black
              borderRadius: '10px',
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.4)',
              marginBottom: 2,
              overflow: 'hidden',
              '& .MuiAccordionSummary-root': {
                background: 'linear-gradient(to left, #000000, #191970)', // Gradient for summary
                color: '#e5e7eb',
                padding: '15px',
                borderTopLeftRadius: '10px',
                borderTopRightRadius: '10px',
                '&:hover': {
                  background: 'linear-gradient(to left, #1e293b, #0f172a)', // Slightly lighter slate-900 on hover
                },
              },
              '& .MuiAccordionDetails-root': {
                background: '#101828', // Solid dark slate-like color for details
                color: '#d1d5db',
                padding: '20px',
                borderBottomLeftRadius: '10px',
                borderBottomRightRadius: '10px',
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: '#9ca3af' }} />}
              aria-controls={`panel${index + 1}-content`}
              id={`panel${index + 1}-header`}
            >
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                {item.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">{item.content}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
}
