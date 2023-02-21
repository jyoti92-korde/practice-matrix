import { all,call } from 'redux-saga/effects';
 import airlineSaga from './airlineSaga';

function* rootSaga(){
    yield all([
         call(airlineSaga)
    ])
}
export default rootSaga;