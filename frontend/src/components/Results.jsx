import React from 'react';

function Results(props) {
    return (
        <div>
            <h1>Image Classifier</h1>
            <p>Champion: {props.location.state.class_name}</p>
            <p>Confidence Score: {props.location.state.confidence_score.toFixed(2)}%</p>
            <button onClick={() => window.location.href = '/start_over'}>
                Start Over
            </button>
        </div>
    );
}

export default Results;
