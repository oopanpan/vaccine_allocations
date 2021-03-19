import React, { useState, useEffect } from 'react'
import axios from 'axios'

const MainDisplay = () => {
    const [data, setData] = useState(0)

    useEffect( () => {
        vaccineAPI();
    }) 

    const vaccineAPI = async () =>{
        const dataUrl = 'https://data.cdc.gov/resource/saz5-9hgg.json';
        const data = await axios(dataUrl)
            .then(r => console.log(r.data))
    }

    return (
        <>
            <Navbar />
        </>
    )
}

export default MainDisplay
