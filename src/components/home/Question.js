import React from 'react';
import Typography from '@material-ui/core/Typography';
import content from './../utils/ContentUtil'

const Question = ({question}) => {
    return (
        <Typography>
            {content(question.questionEn, question.questionAr)}
        </Typography>
    );
}
export default Question;