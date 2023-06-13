"use client";
import React, { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";
import { manufacturers } from "./../constants/index";

const SearchBar = () => {
    const [manufacturer, setManuFacturer] = useState("");
    
  const handleSearch =()=>{

  }
  return (
    <form className="searchbar" onSubmit={handleSearch}>
        <div className="searchbar__item">
            <SearchManufacturer
             manufacturer ={manufacturer} 
             setManufacturer = {setManuFacturer}
            />
        </div>
    </form>
  )
}

export default SearchBar