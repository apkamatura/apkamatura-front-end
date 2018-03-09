export function addSubscribedSubjects(subject) {
    return {
        type: 'ADD_SUBSCRIBED_SUBJECT',
        payload: subject
    };
}

export function setChosenSubject(subject) {
    return {
        type: 'SET_CHOSEN_SUBJECT',
        payload: subject
    };
}

export function setChosenExerciseType(type) {
    return {
        type: 'SET_CHOSEN_EXERCISE_TYPE',
        payload: type
    }
}

export function setExerciseType(type) {
    return {
        type: 'ADD_EXERCISE_TYPE',
        payload: type
    }
}