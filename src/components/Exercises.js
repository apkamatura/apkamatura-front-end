import React from 'react';

const Excercises = (props) => {
    return (
        <div className="col">
            <div className="card mb-2" style={{height: '95%'}}>
                <h5 className="card-header">{props.exerciseType}</h5>
                <div className="card-body text-center">
                    <ul>
                        <li>staty...</li>
                    </ul>
                    <button className="btn btn-primary mt-2">
                        Rozpocznij
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Excercises;