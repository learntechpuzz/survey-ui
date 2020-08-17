import React from 'react';
import Radios from './Radios';
import Checkboxes from './CheckBoxes';

const Answers = ({ questionId, answers }) => {
    const result = (type) => {
        switch (type) {
            case 'RADIO':
                return <Radios questionId={questionId} answers={answers} />;
            case 'CHECKBOX':
                return <Checkboxes questionId={questionId} answers={answers} />;
            default:
                return null;
        }
    }
    return (
        <div>{result(answers[0].type)}</div>
    );
}
export default Answers;