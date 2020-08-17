import React from 'react';
import Radios from './Radios';

const Answers = ({ questionId, answers }) => {
    const result = (type) => {
        switch (type) {
            case 'RADIO':
                return <Radios questionId={questionId} answers={answers} />;
            default:
                return null;
        }
    }
    return (
        <div>{result('RADIO')}</div>
    );
}
export default Answers;