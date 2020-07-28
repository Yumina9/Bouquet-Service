import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import palette from '../lib/styles/palette';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },

    circle: {
      backgroundColor: `${palette.color2}`,
    },

    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
      backgroundColor: `${palette.color3}`,
    },
    actionsContainer: {
      marginBottom: theme.spacing(2),
    },
    resetContainer: {
      padding: theme.spacing(3),
    },
  })
);

function getSteps() {
  return [
    '꽃을 선택하셧습니다.',
    '꽃 수량 선택',
    '꽃다발 선택',
    '포장지 색상, 리본 색상 선택',
  ];
}

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return `꽃을 선택하셧습니다.`;
    case 1:
      return `꽃의 수량을 선택하세요.`;
    case 2:
      return '꽃다발을 선택하세요';
    case 3:
      return `포장지 색상과 리본 색상을 선택하세요`;
    default:
      return 'Unknown step';
  }
}

export default function CustomStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <span className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>주문하시겠습니까?</Typography>
          <Button onClick={handleReset} className={classes.button}>
            다시 선택하기
          </Button>
          <Link
            to="/confirmation"
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            <Button className={classes.button}>주문하기</Button>
          </Link>
        </Paper>
      )}
    </span>
  );
}
