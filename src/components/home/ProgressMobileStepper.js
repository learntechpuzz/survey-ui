import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import content from './../utils/ContentUtil';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    flexGrow: 1,
  },
});

export default function ProgressMobileStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <MobileStepper
      variant="progress"
      steps={6}
      position="static"
      activeStep={activeStep}
      className={classes.root}
      nextButton={
        <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
          {content("Next", "التالى")}
          {content(<KeyboardArrowRight />, <KeyboardArrowLeft />)}
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          {content(<KeyboardArrowLeft />, <KeyboardArrowRight />)}
          {content("Back", "عودة")}
        </Button>
      }
    />
  );
}
