'use client'
import kuwait from "@/db/kuwait";
import { useState } from "react";
import '@/style/customer-information.css'


export default function CustomerInformation(){

    function FilterFactors(){

        const [state,setState] = useState('all')
    
        function selectCities(){
            const selectedGovernorate = document.getElementById('selectGovernorate') as HTMLSelectElement
            setState((prev)=> prev = selectedGovernorate.value)
        }
    
        return(
            <div id="filterFactors"  className="mt-2 flex justify-between basis-full">
                <select onChange={selectCities} className="text-3 w-1/2 border-2 border-color-3 rounded-lg outline-0 pr-1 py-1 ml-2" id="selectGovernorate">
                    {/* <option value="all">كل المحافظات</option> */}
                {
                    kuwait.governoratesNames.map((governorateName,id)=>{
                        return <option value={governorateName} key={id}>
                            {governorateName}
                        </option>
                    })
                }
                </select>
    
                <select className="text-3 w-1/2 border-2 border-color-3 rounded-lg outline-0 pr-1 py-1" id="">
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
        )
    }

    return(
        <form className="">
            <h2 className="">معلومات العميل</h2>
            <div className="contact-information">
                <div className="w-1/2">
                    <label htmlFor="">الاسم</label>
                    <input type="text" />
                </div>
                <div className="w-1/2">
                    <label htmlFor="">رقم الهاتف</label>
                    <input type="text" />
                </div>
                
                <div className="location">
                    <FilterFactors/>
                    <div className="location-2">
                        <div className="">
                            <label htmlFor="">الشارع</label>
                            <input type="text" />
                        </div>

                        <div className="">
                            <label htmlFor="">الجادة</label>
                            <input type="text" />
                        </div>

                        <div className="">
                            <label htmlFor="">المنزل</label>
                            <input type="text" />
                        </div>

                        <div className="">
                            <label htmlFor="">الدور</label>
                            <input type="text" />
                        </div>
                        <div className="">
                            <label htmlFor="">الشقة</label>
                            <input type="text" />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}