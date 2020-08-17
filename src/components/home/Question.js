import React from 'react';
import Typography from '@material-ui/core/Typography';
import content from './../utils/ContentUtil'
import Answers from './Answers';

const Question = ({ question }) => {
    return (
        <div>
        <Typography>
            {content(question.questionEn, question.questionAr)}
        </Typography>
        <Answers questionId={question.id} answers={question.answers}/>
        </div>
    );
}
export default Question;