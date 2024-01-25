'use client'
import kuwait from "@/db/kuwait";
import { useEffect, useState } from "react";
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

    function PaymentMethod(){

        useEffect(()=>{
            const driver = document.querySelector('#driver') as HTMLDivElement
            const card = document.querySelector('#card') as HTMLDivElement

            const driverCheckBox = document.querySelector('#driver input') as HTMLInputElement
            const cardCheckBox = document.querySelector('#card input') as HTMLInputElement
            
            function driverHandler(){
                card.classList.remove('checked')
                driverCheckBox.checked = true
                cardCheckBox.checked = false
                driver.classList.add('checked')
            }

            function cartHandler(){
                driver.classList.remove('checked')
                driverCheckBox.checked = false
                cardCheckBox.checked = true
                card.classList.add('checked')
            }

            const driverLength = driver.children.length
            const cardLength = card.children.length

            driver.addEventListener('click',driverHandler)
            for(let i=0;i<driverLength;i++){
                driver.children[i].addEventListener('click',driverHandler)
            }
            
            card.addEventListener('click',cartHandler)
            for(let i=0;i<cardLength;i++){
                card.children[i].addEventListener('click',cartHandler)
            }

            // default
            driverHandler()

        },[])

        return (
            <div className="space-y-2 my-4">
                <h2>طريقة الدفع</h2>

                <div id="driver" className="flex justify-start gap-2 items-center border-3 border-2 rounded-lg p-2 relative">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M19.8292943,16 L21,16 L21,12.5351838 L18.2243368,10.6847416 L16.381966,7 L3,7 L3,16 L4.17070571,16 C4.58254212,14.8348076 5.69378117,14 7,14 C8.30621883,14 9.41745788,14.8348076 9.82929429,16 L14.1707057,16 C14.5825421,14.8348076 15.6937812,14 17,14 C18.3062188,14 19.4174579,14.8348076 19.8292943,16 Z M19.8292943,18 C19.4174579,19.1651924 18.3062188,20 17,20 C15.6937812,20 14.5825421,19.1651924 14.1707057,18 L9.82929429,18 C9.41745788,19.1651924 8.30621883,20 7,20 C5.69378117,20 4.58254212,19.1651924 4.17070571,18 L3,18 C1.8954305,18 1,17.1045695 1,16 L1,7 C1,5.8954305 1.8954305,5 3,5 L16.381966,5 C17.1395101,5 17.8320364,5.42800475 18.1708204,6.10557281 L19.7756632,9.31525835 L23,11.4648162 L23,16 C23,17.1045695 22.1045695,18 21,18 L19.8292943,18 Z M7,18 C7.55228475,18 8,17.5522847 8,17 C8,16.4477153 7.55228475,16 7,16 C6.44771525,16 6,16.4477153 6,17 C6,17.5522847 6.44771525,18 7,18 Z M17,18 C17.5522847,18 18,17.5522847 18,17 C18,16.4477153 17.5522847,16 17,16 C16.4477153,16 16,16.4477153 16,17 C16,17.5522847 16.4477153,18 17,18 Z"/>
                </svg>

                    <label className="w-28 font-7">عند الاستلام</label>
                    <input className="check-box"  type="checkbox" name="" id="" />
                </div>

                <div id="card" className="flex justify-start gap-2 items-center border-3 border-2 rounded-lg p-2 relative">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 24 24">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.94358 3.25H14.0564C15.8942 3.24998 17.3498 3.24997 18.489 3.40314C19.6614 3.56076 20.6104 3.89288 21.3588 4.64124C22.1071 5.38961 22.4392 6.33856 22.5969 7.51098C22.6873 8.18385 22.7244 8.9671 22.7395 9.87428C22.7464 9.91516 22.75 9.95716 22.75 10C22.75 10.0353 22.7476 10.0699 22.7429 10.1039C22.75 10.6696 22.75 11.2818 22.75 11.9436V12.0564C22.75 13.8942 22.75 15.3498 22.5969 16.489C22.4392 17.6614 22.1071 18.6104 21.3588 19.3588C20.6104 20.1071 19.6614 20.4392 18.489 20.5969C17.3498 20.75 15.8942 20.75 14.0564 20.75H9.94359C8.10583 20.75 6.65019 20.75 5.51098 20.5969C4.33856 20.4392 3.38961 20.1071 2.64124 19.3588C1.89288 18.6104 1.56076 17.6614 1.40314 16.489C1.24997 15.3498 1.24998 13.8942 1.25 12.0564V11.9436C1.24999 11.2818 1.24999 10.6696 1.25714 10.1039C1.25243 10.0699 1.25 10.0352 1.25 10C1.25 9.95716 1.25359 9.91517 1.26049 9.87429C1.27564 8.96711 1.31267 8.18385 1.40314 7.51098C1.56076 6.33856 1.89288 5.38961 2.64124 4.64124C3.38961 3.89288 4.33856 3.56076 5.51098 3.40314C6.65019 3.24997 8.10582 3.24998 9.94358 3.25ZM2.75199 10.75C2.75009 11.1384 2.75 11.5541 2.75 12C2.75 13.9068 2.75159 15.2615 2.88976 16.2892C3.02502 17.2952 3.27869 17.8749 3.7019 18.2981C4.12511 18.7213 4.70476 18.975 5.71085 19.1102C6.73851 19.2484 8.09318 19.25 10 19.25H14C15.9068 19.25 17.2615 19.2484 18.2892 19.1102C19.2952 18.975 19.8749 18.7213 20.2981 18.2981C20.7213 17.8749 20.975 17.2952 21.1102 16.2892C21.2484 15.2615 21.25 13.9068 21.25 12C21.25 11.5541 21.2499 11.1384 21.248 10.75H2.75199ZM21.2239 9.25H2.77607C2.79564 8.66327 2.82987 8.15634 2.88976 7.71085C3.02502 6.70476 3.27869 6.12511 3.7019 5.7019C4.12511 5.27869 4.70476 5.02502 5.71085 4.88976C6.73851 4.75159 8.09318 4.75 10 4.75H14C15.9068 4.75 17.2615 4.75159 18.2892 4.88976C19.2952 5.02502 19.8749 5.27869 20.2981 5.7019C20.7213 6.12511 20.975 6.70476 21.1102 7.71085C21.1701 8.15634 21.2044 8.66327 21.2239 9.25ZM5.25 16C5.25 15.5858 5.58579 15.25 6 15.25H10C10.4142 15.25 10.75 15.5858 10.75 16C10.75 16.4142 10.4142 16.75 10 16.75H6C5.58579 16.75 5.25 16.4142 5.25 16ZM11.75 16C11.75 15.5858 12.0858 15.25 12.5 15.25H14C14.4142 15.25 14.75 15.5858 14.75 16C14.75 16.4142 14.4142 16.75 14 16.75H12.5C12.0858 16.75 11.75 16.4142 11.75 16Z" fill="inherit"/>
                    </svg>

                    <label className="w-28 font-7">بطاقة ائتمان</label>
                    <input className="check-box"  type="checkbox" name="" id="" />
                </div>
            </div>
        )
    }

    return(
        <form className="">
            <h2 className="">معلومات التواصل</h2>
            <div className="contact-information">
                <div className="w-full">
                    <label htmlFor="">الاسم</label>
                    <input type="text" />
                </div>
                <div className="w-full">
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

            <PaymentMethod/>
        </form>
        
    )
}