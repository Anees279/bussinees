import React, { useState } from 'react';
import { Typography, Box } from '@mui/material';

const FAQSection = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null); // Track the currently open question

  // Function to handle toggling
  const handleToggle = (questionIndex: number) => {
    if (openQuestion === questionIndex) {
      setOpenQuestion(null); // Close if already open
    } else {
      setOpenQuestion(questionIndex); // Open the clicked question
    }
  };

  return (
    <div
      style={{
        maxWidth: '900px',
        margin: '0 auto',
        textAlign: 'justify',
        flex: 1, // Make this div take up available space equally
      }}
    >
      <Typography variant="h4" align="left" paddingTop="24px">
        FAQs
      </Typography>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {/* Question 1 */}
        <li>
          <Typography
            variant="body1"
            onClick={() => handleToggle(1)} // Toggle answer visibility for question 1
            style={{ cursor: 'pointer', fontWeight: 'bold' }}
          >
            Q: Can I sponsor my unmarried partner?
          </Typography>
          {openQuestion === 1 && (
            <Typography variant="body2" style={{ paddingLeft: '10px' }}>
              Answer: No. The UAE only recognizes legally married spouses.
            </Typography>
          )}
        </li>

        {/* Question 2 */}
        <li>
          <Typography
            variant="body1"
            onClick={() => handleToggle(2)} // Toggle answer visibility for question 2
            style={{ cursor: 'pointer', fontWeight: 'bold' }}
          >
            Q: Can a mother sponsor children without the father?
          </Typography>
          {openQuestion === 2 && (
            <Typography variant="body2" style={{ paddingLeft: '10px' }}>
              Answer: Yes, if she meets income requirements and has a court-approved guardianship letter.
            </Typography>
          )}
        </li>

        {/* Question 3 */}
        <li>
          <Typography
            variant="body1"
            onClick={() => handleToggle(3)} // Toggle answer visibility for question 3
            style={{ cursor: 'pointer', fontWeight: 'bold' }}
          >
            Q: How to convert a tourist visa to a family visa?
          </Typography>
          {openQuestion === 3 && (
            <Typography variant="body2" style={{ paddingLeft: '10px' }}>
              Answer: Apply for an in-country entry permit, then follow standard medical and stamping steps.
            </Typography>
          )}
        </li>
      </ul>
    </div>
  );
};

export default FAQSection;
