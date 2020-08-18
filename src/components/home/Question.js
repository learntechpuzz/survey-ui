import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'
import content from './../utils/ContentUtil'
import Answers from './Answers';

const Question = ({ question }) => {
    return (
        <div>
            <Box pt={3}>
            <Typography variant="subtitle2">
                {content(question.questionEn, question.questionAr)}
            </Typography>
            </Box>
            {question.answers.length > 0 ? <Box pt={3}><Answers questionId={question.id} answers={question.answers} /></Box> : null}
        </div>
    );
}
export default Question;