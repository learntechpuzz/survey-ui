import React, { Component } from 'react';
import axios from 'axios';
import ProgressMobileStepper from './../home/ProgressMobileStepper';

class Survey extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: []
        };
    }

    componentDidMount() {
        this.fetchSurvey();
    }

    fetchSurvey() {
        axios.get("http://localhost:7001/api/survey/1")
            .then(response => {
                this.setState({ questions: response.data.questions })
            });
    }

    render() {
        return (
            <div>
                {this.state.questions.length > 0 ? (
                    <ProgressMobileStepper questions={this.state.questions} />
                ) : null}
            </div>
        );
    }
}

export default Survey;