import { createAction } from 'redux-actions';
import { api } from '../../api';

export const REQUEST_PEOPLE = 'REQUEST_PEOPLE';
export const RECEIVE_PEOPLE = 'RECEIVE_PEOPLE';
export const SEARCH_PEOPLE = 'SEARCH_PEOPLE';

export const requestPeople = createAction(REQUEST_PEOPLE);
export const receivePeople = createAction(RECEIVE_PEOPLE);
export const searchPeople = createAction(SEARCH_PEOPLE);

export const fetchPeople = () => {
    return (dispatch) => {
        dispatch(requestPeople());
        return api.get('/people/all').then(
            (response) => dispatch(receivePeople(
                response.data || response,
            )),
            (error) => dispatch(receivePeople(
                error,
            ))
        );
    };
};

export const getFirstStep = (person, router) => {
    return () => {
        if (person.ExistingDraft !== '') {
            router.push({
                pathname: '/questions',
                query: {id: person.ExistingDraft}
            });
        } else {
            return api.get('/assessments/create', {
                params: {
                    id: person.Id
                }
            }).then(
                (response) => {
                    router.push({
                        pathname: '/' + response.data.Step.toLowerCase(),
                        query: {id: response.data.Id}
                    })
                },
                (error) => console.log(error),
            );
        }
    };
};
