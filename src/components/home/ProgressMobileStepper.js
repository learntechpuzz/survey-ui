import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import content from './../utils/ContentUtil';
import Question from './Question';
import Box from '@material-ui/core/Box'

const useStyles = makeStyles({
  root: {
    maxWidth: 780,
    flexGrow: 1,
  },
});

export default function ProgressMobileStepper({ questions }) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <div>
      <Question question={questions[activeStep]} />
      {activeStep < questions.length - 1 ?
        <Box pt={3}>
          <MobileStepper
            variant="progress"
            steps={questions.length}
            position="static"
            activeStep={activeStep}
            className={classes.root}
            nextButton={
              <Button size="small" onClick={handleNext} disabled={activeStep === questions.length - 1}>
                {content("Next", "التالى")}
                {content(<KeyboardArrowRight />, <KeyboardArrowLeft />)}
              </Button>
            }
            backButton={activeStep > 0 ?
              <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                {content(<KeyboardArrowLeft />, <KeyboardArrowRight />)}
                {content("Back", "عودة")}
              </Button> : null
            }
          />
        </Box>
        : null}
    </div>
  );
}
