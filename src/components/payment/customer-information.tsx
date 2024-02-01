'use client'
import {useForm,SubmitHandler} from 'react-hook-form'
import { formField } from "@/type";
import Price from "./price";
import FilterFactorsOfLocation from "./filter-factors-of-location";
import '@/style/customer-information.css'
import PaymentMethod from './payment-method';
import React from 'react';

export default function CustomerInformation(){
    const {register, handleSubmit, formState:{errors}} = useForm<formField>()

    const onSubmit:SubmitHandler<formField> = (data) =>{
        console.log(data)
    }
    console.log(errors.cardNumber)
    

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>معلومات التواصل</h2>
            <div className="contact-information">
                <div className="w-full">
                    <label htmlFor="name">الاسم</label>
                    <input {...register('name',{
                        required:true,
                    })} id='name' type="text" />
                </div>
                <div className="w-full">
                    <label htmlFor="phoneNumber">رقم الهاتف</label>
                    <input {...register('phoneNumber',{
                        required:'اكتب رقم هاتفك',
                        minLength:{
                            value:8,
                            message:'يجب ألا يقل عن 8 ارقام'
                        },
                        maxLength:{
                            value:8,
                            message:'لا تلعب'
                        },
                        validate:(value)=>{
                            const check = value.toString()
                            if(!check.match( /^-?\d+(\.\d+)?$/)) return 'هنالك خطأ'
                            return true
                        }
                    })} maxLength={8} id='phoneNumber' type="text" />
                    {errors.phoneNumber?.message && <p className='font-6 text-sm mt-1'>{errors.phoneNumber?.message}</p>}
                </div>
                
                <div className="location">


                    <FilterFactorsOfLocation register={register}/>


                    <div className="location-2">
                        <div>
                            <label htmlFor="street">الشارع</label>
                            <input {...register('street',{
                                required:'مطلوب',
                                maxLength:{
                                    value:4,
                                    message:'لا تلعب'
                                },
                                validate:(value)=>{
                                    const check = value.toString()
                                    if(!check.match( /^-?\d+(\.\d+)?$/)) return 'هنالك خطأ'
                                    return true
                                }
                            })} maxLength={4} id='street' type="text" />
                            {errors.street?.message && <p className='font-6 text-sm mt-1'>{errors.street?.message}</p>}
                        </div>

                        <div>
                            <label htmlFor="houseNumber">المنزل</label>
                            <input {...register('houseNumber',{
                                required:'مطلوب',
                                maxLength:{
                                    value:4,
                                    message:'لا تلعب'
                                },
                                validate:(value)=>{
                                    const check = value.toString()
                                    if(!check.match( /^-?\d+(\.\d+)?$/)) return 'هنالك خطأ'
                                    return true
                                }
                            })} maxLength={4} id='houseNumber' type="text" />
                            {errors.houseNumber?.message && <p className='font-6 text-sm mt-1'>{errors.houseNumber?.message}</p>}
                        </div>

                        <div>
                            <label htmlFor="floor">الدور</label>
                            <input {...register('floor',{
                               maxLength:{
                                   value:2,
                                   message:'لا تلعب'
                               },
                               validate:(value)=>{
                                if(typeof value === 'number'){
                                   const check = value.toString()
                                   if(!check.match( /^-?\d+(\.\d+)?$/)) return 'هنالك خطأ'
                                }
                                return true
                               }
                            })} maxLength={2} id='floor' type="text" />
                        </div>
                        <div>
                            <label htmlFor="apartment">الشقة</label>
                            <input {...register('apartment',{
                                maxLength:{
                                    value:2,
                                    message:'لا تلعب'
                                },
                                validate:(value)=>{
                                 if(typeof value === 'number'){
                                    const check = value.toString()
                                    if(!check.match( /^-?\d+(\.\d+)?$/)) return 'هنالك خطأ'
                                 }
                                 return true
                                }
                            })} maxLength={2} id='apartment' type="text" />
                        </div>
                    </div>

                </div>
            </div>

            <PaymentMethod errors={errors} register={register}/>
            <Price/>

            <div className="bg-9 font-5 text-center text-2xl mt-4 py-2 rounded-t-3xl">
                <button type="submit" className="w-3/4 bg-8 font-5 px-2 py-1 rounded-lg my-2">شراء</button>
            </div>
        </form>
    )
}