'use client'

import kuwait from "@/db/kuwait";
import { useState } from "react";

export default function FilterFactors(){

    const [state,setState] = useState('all')

    function selectCities(){
        const selectedGovernorate = document.getElementById('selectGovernorate') as HTMLSelectElement
        setState((prev)=> prev = selectedGovernorate.value)
    }

    return(
        <div id="filterFactors"  className="mt-2 flex justify-between basis-full">
            <div>
            <select onChange={selectCities} className="text-3 w-16 border-2 border-color-3 rounded-lg outline-0 pr-1 py-1 ml-2" id="selectGovernorate">
                {/* <option value="all">كل المحافظات</option> */}
            {
                kuwait.governoratesNames.map((governorateName,id)=>{
                    return <option value={governorateName} key={id}>
                        {governorateName}
                    </option>
                })
            }
            </select>

            <select className="text-3 w-12 border-2 border-color-3 rounded-lg outline-0 pr-1 py-1" id="">
                {/* <option  value="all">كل المناطق</option> */}
            {
                kuwait.getGovernorateCities(state).map((cityName,id)=>{
                    return <option value={cityName} key={id}>
                        {cityName}
                    </option>
                })
            }
            </select>
            </div>

        </div>
    )
}