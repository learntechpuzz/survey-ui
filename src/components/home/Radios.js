import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import content from './../utils/ContentUtil'
import FormControl from '@material-ui/core/FormControl';

const Radios = ({ questionId, answers }) => {

    const answersList = answers.map((answer) => {
        return (
            <FormControlLabel
                key={answer.id}
                value={questionId + '_' + answer.id}
                control={<Radio color="primary" />}
                label={content(answer.answerEn, answer.answerAr)}
                labelPlacement="top"
            />
        )
    });

    return (
        <FormControl component="fieldset">
            <RadioGroup row aria-label={'q' + questionId} name={ 'q' + questionId} >
                {answersList}
            </RadioGroup>
        </FormControl>
    );
}

export default Radios;