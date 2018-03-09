import React, {Component} from 'react';
import {connect} from 'react-redux';
import Subject from "../components/Subject";
import {addSubscribedSubjects, setChosenSubject} from '../actions/subscribeActions';

class App extends Component {

    selectSubjectOnChange(event) {
        this.props.setChosenSubject(event.target.value);
    }

    handleSubscribedSubject() {
        if (this.props.subscribe.chosenSubject !== '') {
            this.props.addSubscribedSubjects(this.props.subscribe.chosenSubject)
        }
    }

    render() {

        let availableSubjects = this.props.subscribe.availableSubjects.map((subject, i) => {
            return <option key={i}>{subject}</option>
        });

        let mySubjects = this.props.subscribe.subscribedSubjects.map((subject, i) => {
            return <Subject subjectName={subject} key={i}/>
        });

        return (
            <div className="container m-3">

                {mySubjects}

                <div className="card mb-2">
                    <h5 className="card-header text-success">Nowy przedmiot</h5>
                    <div className="card-body text-center">
                        <select onChange={this.selectSubjectOnChange.bind(this)}
                                className="form-control">
                            <option selected disabled>[wybierz]</option>
                            {availableSubjects}
                        </select>
                        <button onClick={this.handleSubscribedSubject.bind(this)}
                                className="btn btn-primary mt-2">
                            Dodaj Przedmiot
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        subscribe: state.subscribe
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addSubscribedSubjects: (subject) => {
            dispatch(addSubscribedSubjects(subject));
        },
        setChosenSubject: (subject) => {
            dispatch(setChosenSubject(subject));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);


