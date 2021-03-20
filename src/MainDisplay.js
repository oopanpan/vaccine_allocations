import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NavbarDiv from './Navbar'

const MainDisplay = () => {

    const [data, setData] = useState(0)
    const [states, setStates] = useState(0)
    const [date, setDate] = useState(0)

    useEffect( () => {
        vaccineAPI()
    },[]) 

    const vaccineAPI = async () =>{
        const dataUrl = 'https://data.cdc.gov/resource/saz5-9hgg.json';
        await axios(dataUrl)
            .then(r => {
                sortingData(r.data)
            })
    }

    const sortingData = (data) =>{
        let stateArr = [];
        let dateObj = {};
        for (let i = 0; i < 63; i++){
            stateArr.push(data[i].jurisdiction)
            console.log(i);
        }
        for (let info in data){
            if (!Object.keys(dateObj).includes(info.week_of_allocations)){
                console.log(Object.keys(dateObj))
                dateObj[info.week_of_allocations] = [info]
            } else{
                dateObj[info.week_of_allocations].push(info)
            }
        }
        setData(dateObj)
        setStates(stateArr)
    }

    return (
        <>
            <NavbarDiv />
        </>
    )
}

export default MainDisplay
