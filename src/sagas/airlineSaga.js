import {call,put,takeEvery} from 'redux-saga/effects'
import {getAirlinesSuccess} from '../reducers/airReducer'
import axios from 'axios';

const airlineData = async() =>{
    const airline = await axios.get("https://api.instantwebtools.net/v1/airlines");
    const result =  airline.data;
     return result.slice(0,30);
  }
function* workGetAirListFetch(){
    try {
        const airlinedata = yield airlineData();
         console.log(airlinedata);
        yield put(getAirlinesSuccess(airlinedata))
       } catch (e) {
        console.log(e);
       }
}

function* airlineSaga(){
  yield takeEvery('Airline/getAirListFetch',workGetAirListFetch);

}
export default airlineSaga;