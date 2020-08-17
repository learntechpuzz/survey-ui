import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import content from './../utils/ContentUtil'
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

const GreenCheckbox = withStyles({
    root: {
      color: green[400],
      "&$checked": {
        color: green[600]
      }
    },
    checked: {}
  })((props) => <Checkbox color="default" {...props} />);
  
const Checkboxes = ({ questionId, answers }) => {

    const answersList = answers.map((answer) => {
        return (
            <FormControlLabel
                key={answer.id}
                value={questionId + '_' + answer.id}
                control={<GreenCheckbox size="small"/>}
                label={content(answer.answerEn, answer.answerAr)}
            />
        )
    });

    return (
        <FormControl component="fieldset">
                {answersList}
        </FormControl>
    );
}

export default Checkboxes;