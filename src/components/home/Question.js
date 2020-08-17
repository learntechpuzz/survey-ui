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
            {question.answers.length > 0 ? <Answers questionId={question.id} answers={question.answers} /> : null}
        </div>
    );
}
export default Question;