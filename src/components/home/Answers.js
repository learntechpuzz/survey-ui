import React from 'react';
import Radios from './Radios';
import Checkboxes from './CheckBoxes';
import TextBox from './TextBox';

const Answers = ({ questionId, answers }) => {

    const answersMap = answers.reduce((a, e) =>
        ((a[e.type] = a[e.type] || []).push(e), a), {});

    const renderAnswers = (type, answersList) => {
        switch (type) {
            case 'RADIO':
                return <Radios key={type} questionId={questionId} answers={answersList} />;
            case 'CHECKBOX':
                return <Checkboxes key={type} questionId={questionId} answers={answersList} />;
            case 'TEXTBOX':
                return <TextBox key={type} questionId={questionId} answers={answersList} />;
            default:
                return null;
        }
    }

    const answersResult = Object.keys(answersMap).map(key =>
        renderAnswers(key, answersMap[key]));

    return (
        <div>{answersResult}</div>
    );
}
export default Answers;