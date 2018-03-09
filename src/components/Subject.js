import React, {Component} from 'react';
import {setChosen} from "../actions/subscribeActions";
import {connect} from "react-redux";
import Excercises from "./Exercises";
import {setChosenExerciseType, setExerciseType} from '../actions/subscribeActions';


class Subject extends Component {

    selectExerciseTypeOnChange(event) {
        this.props.setChosenExerciseType(event.target.value);
    }

    handleExerciseType(){
        if(this.props.subscribe.chosenExerciseType!==''){
            this.props.setExerciseType(this.props.subscribe.chosenExerciseType)
        }
    }

    render() {

        let availableExerciseTypes = this.props.subscribe.exerciseTypes.map((type, i) => {
            return <option key={i}>{type}</option>
        });

        let myExerciseTypes = this.props.subscribe.myExerciseTypes.map((type, i)=>{
           return <Excercises exerciseType={type} key={i}/>
        });

        return (
            <div className="card mb-2">
                <h5 className="card-header">{this.props.subjectName}</h5>
                <div className="card-body row">

                    {myExerciseTypes}

                    <div className="col">
                        <div className="card mb-2" style={{height: '95%'}}>
                            <h5 className="card-header text-success">Wybierz typ zadania</h5>
                            <div className="card-body text-center">
                                <select onChange={this.selectExerciseTypeOnChange.bind(this)}
                                        className="form-control">
                                    <option selected disabled>[wybierz ]</option>
                                    {availableExerciseTypes}
                                </select>
                                <button onClick={this.handleExerciseType.bind(this)}
                                        className="btn btn-primary mt-2">
                                    Wybierz
                                </button>
                            </div>
                        </div>
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
        setChosenExerciseType: (type) => {
            dispatch(setChosenExerciseType(type));
    },
        setExerciseType: (type)=>{
            dispatch(setExerciseType(type));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Subject);