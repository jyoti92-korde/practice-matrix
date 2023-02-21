import React from 'react'
import {useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {getAirListFetch}  from '../reducers/airReducer';
import Spinner from './Spinner';


 function Table({tableData}){
    return(
        <table className='table'>
            <thead>
                <tr>
                    <th>Sr No.</th>
                    <th>Name</th>
                    <th>Established</th>
                    <th>Country</th>
                    <th>Head quaters</th>
                    <th>Slogan</th>
                    <th>Website</th>
                </tr>
            </thead>
            <tbody> 
            {
                tableData?.map((data, index)=>{
                    return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{data.name}</td>
                            <td>{data.established}</td>
                            <td>{data.country}</td>
                            <td>{data.head_quaters}</td>   
                            <td>{data.slogan}</td>
                            <td>{data.website}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    )
}
const AirlineList = () => {
    const {airline} = useSelector((state)=>state);
    const {isLoading} = useSelector((state)=>state);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAirListFetch());
    },[dispatch]);

  
  return ( 
    <div>
        {isLoading 
        ? <Spinner /> 
        : 
        <div>
           <h2 className='heading'>AirLine List</h2>
            <section>
                <Table tableData={airline}/>
            </section> 
        </div>
         }
    </div>
  )
}

export default AirlineList

