"use client";
import CarDetails from "./CarDetails";
import CustomButton from "./CustomButton";
import Image from "next/image";
import React, { useState } from "react";
import { CarProps } from "@/types";
import { calculateCarRent } from "@/utils";

interface CarCardProps {
    car:CarProps
}

const CarCard = ({car}:CarCardProps) => {
 const { city_mpg, year, make, model, transmission, drive } = car;

  const [isOpen, setIsOpen] = useState(false);

  const carRent = calculateCarRent(city_mpg, year);  
  return (
    <div className="car-card group">
        <div className="car-card__content">
            <h2 className="car-card__content-title">
                {make} {model} 
            </h2>
        </div>
        <p className="flex mt-6 text-[30px] font-extrabold">
            <span className="self-start font-semibold text-[12px]">
                  $           
            </span>
                {carRent}
            <span className="self-end font-medium text-[12px]">
                /day
            </span>
        </p>
        <div className="w-full h-40 relative my-3 object-contain">
            <Image src="/hero.png" fill alt="car" priority className="object-contain"/>
        </div>
        <div className="relative flex w-full mt-2">
            <div className="flex group-hover:invisible w-full justify-between to-gray-500">
                <div className="flex flex-col justify-center items-center gap-2">
                    <Image src="/steering-wheel.svg" width={20}  height={20} alt="steering"/>
                    <p className="text-[14px] ">
                        {transmission === 'a'?"automatic":"manual"}
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <Image src="/tire.svg" width={20}  height={20} alt="tire"/>
                    <p className="text-[14px] ">
                        {drive.toLocaleUpperCase()}
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <Image src="/gas.svg" width={20}  height={20} alt="gas"/>
                    <p className="text-[14px] ">
                       {city_mpg} MPG
                    </p>
                </div>
            </div>
            <div className="car-card__btn-container">
                <CustomButton
                    title = "View More" 
                    containerStyles="w-full py-[15px] rounded-full bg-primary-blue" 
                    textStyles="text-white text-[14px] leading-[17px] font-bold"
                    rightIcon="/right-arrow.svg"
                    handleClick={()=>setIsOpen(true)}
                />
            </div>
        </div>
        <CarDetails 
            isOpen={isOpen} 
            closeModal = {()=>setIsOpen(false)}
            car = {car}
        />
    </div>
  )
}

export default CarCard