const subscribeReducer = (state = {
    availableSubjects: [
        'Matematyka',
        'Język Polski'
    ],
    chosenSubject: '',
    subscribedSubjects: [],
    exerciseTypes: [
        'Matura z losowymi zadaniami (z lat poprzednich)',
        'Matura 2017',
        'Matura 2016',
        'Matura 2015',
        'Matura 2014',
        'Matura 2013',
        'Matura 2012',
        'Zestaw 10 losowych zadań'
    ],
    chosenExerciseType: '',
    myExerciseTypes: []
}, action) => {
    switch (action.type) {
        case 'ADD_SUBSCRIBED_SUBJECT':
            state = {
                ...state,
                subscribedSubjects: state.subscribedSubjects.concat(action.payload)
            };
            break;
        case 'SET_CHOSEN_SUBJECT':
            state = {
                ...state,
                chosenSubject: action.payload
            };
            break;
        case 'SET_CHOSEN_EXERCISE_TYPE':
            state = {
                ...state,
                chosenExerciseType: action.payload
            };
            break;
        case 'ADD_EXERCISE_TYPE':
            state = {
                ...state,
                myExerciseTypes: state.myExerciseTypes.concat(action.payload)
            };
            break;
    }
    return state;
};

export default subscribeReducer;