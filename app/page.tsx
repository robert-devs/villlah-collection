"use client";
import { CarCard, CustomButton, CustomFilter, Hero, SearchBar } from "@/components";
import { FilterProps } from "@/types";
import { fetchCars } from "@/utils";

export default async function Home() {
  const allCars = await fetchCars()

  const isEmpty = !Array.isArray(allCars) || allCars.length<1 ||!allCars
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width " id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you may like</p>
        </div>
        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter  />
            <CustomFilter  />
          </div>
        </div>
        {
          !isEmpty?(
            <section>
              <div className="home__cars-wrapper">
                {
                  allCars?.map((car)=>
                  <CarCard car={car} />
                  )
                }
              </div>
            </section>
          ):(
            <div className="home__error-container">
              <h1 className="text-black  text-xl font-bold">
                ooops there are no results for ${allCars}
              </h1>
            </div>
          )
        }
      </div>
    </main>
  )
}
