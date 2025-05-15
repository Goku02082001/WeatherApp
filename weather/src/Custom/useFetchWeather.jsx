import React, { useEffect, useState } from 'react'
        

const useFetchWeather = (city) => {
    const [data,setData]=useState(null)
    const [isLoading,setLoading]=useState(false)

    useEffect(()=>{
        if(!city)return
        setLoading(true)

        const fetchData=async()=>{
           try {
             const res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4c8d21d4fe6aa180bad4528f62cd79c4&units=metric`)
            const result=await res.json()
            const tempData={
                humidity:result.main.humidity,
                temprature:result.main.temp,
                wind:result.wind.speed,
                condition:result.weather[0].main,
            }
            console.log("tempData:",tempData)
            setData(tempData)
           } catch (error) {
            console.log(error)
           }
        }
        fetchData()
    },[city])
  return {data,isLoading}
}

export default useFetchWeather
