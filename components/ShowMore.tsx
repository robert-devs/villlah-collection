"use client";
import CustomButton from "./CustomButton";
import React from "react";
import { useRouter } from "next/router";
import { ShowMoreProps } from "@/types";

useRouter


const ShowMore = ({pageNumber,isNext,setLimit}:ShowMoreProps) => {
  const router = useRouter()
   const handleNavigation = () =>{
     const newLimit = (pageNumber + 1) *10
        setLimit(newLimit)
   }
  return (
    <div className="w-full flex-center gap-5 mt-10">
        {
            !isNext && (
                <CustomButton
                    title="Show More"
                    btnType="button"
                    containerStyles="bg-primary text-white rounded-full" 
                    handleClick={handleNavigation}
                />
            )
        }
    </div>
  )
}

export default ShowMore