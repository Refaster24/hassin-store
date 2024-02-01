'use client'

import kuwait from "@/db/kuwait";
import { formField } from "@/type";
import { useState } from "react";
import { UseFormRegister } from "react-hook-form";

export default function FilterFactorsOfLocation({register}:{register:UseFormRegister<formField>}){

    const [state,setState] = useState('الجهراء')

    function selectCities(){
        const selectedGovernorate = document.getElementById('governorate') as HTMLSelectElement
        setState((prev)=> prev = selectedGovernorate.value)
    }

    return(
        <div id="filterFactors"  className="mt-2 flex justify-between basis-full">
            <select {...register('governorate',{
                required:true
            })} onChange={selectCities} className="text-3 w-1/2 border-2 border-color-3 rounded-lg outline-0 pr-1 py-1 ml-2" id="governorate">
            {
                kuwait.governoratesNames.map((governorateName,id)=>{
                    return <option value={governorateName} key={id}>
                        {governorateName}
                    </option>
                })
            }
            </select>

            <select {...register('city',{
                required:true
            })} className="text-3 w-1/2 border-2 border-color-3 rounded-lg outline-0 pr-1 py-1" id="city">
            {
                kuwait.getGovernorateCities(state).map((cityName,id)=>{
                    return <option value={cityName} key={id}>
                        {cityName}
                    </option>
                })
            }
            </select>

        </div>
    )
}