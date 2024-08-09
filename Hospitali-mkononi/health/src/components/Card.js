import { Button } from "@material-tailwind/react"
import React from "react"



export default function Card() {
    return (
        <div className="flex gap-1 mt-0">
            <div className="relative flex flex-col rounded-xl bg-gradient-to-tr from-gray-900 to-gray-800  text-white shadow-gray-900/20 shadow-md w-full max-w[10rem] p-8 mt-0">

                <div className="relative mb-8 m-0 pb-8 overflow-hidden text-center text-gray-700  bg-transparent border-b rounded-none shadow-none bg-clip-border border-white/10">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-white uppercase">
                        Laundry prices
                    </p>
                    <h1 className="flex justify-center  gap-1 mt-6 font-sans font-normal antialiased tracking-normal text-7xl" >

                        <span className="mt-2 text-4xl">$</span>29
                        <span className="text-4xl self-end">/mo</span>
                    </h1>
                </div>
                <div className="p-0">
                    <ul className="flex flex-col gap-4">
                        <li className="flex items-center gap-4">
                            <span className="p-1 border rounded-full border-white/20 bg-white/20"><svg xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3 h-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                            </svg>
                            </span>
                            <p className=" block font-sans text-base font-normal leading-relaxed text-inherit">5 team members</p>
                        </li>
                        <li className=" flex items-center gap-4">
                            <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3 h-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                                </svg>
                            </span>
                            <p className="block font-sans text-base font-normal leading-relaxed text-inherit">
                                200+ components
                            </p>
                        </li>
                        <li className=" flex gap-4 items-center">
                            <span className="p-1 border rounded-full bg-white/20 border-white/20 "><svg xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3 h-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                            </svg></span>
                            <p className=""> 40+ built-ins</p>
                        </li>
                    </ul>

                </div>
                <div className="">
                    <Button className="bg-black"> Buy Now</Button>

                </div>
            </div>

            <div className="relative flex flex-col rounded-xl bg-gradient-to-tr from-gray-900 to-gray-800  text-white shadow-gray-900/20 shadow-md w-full max-w[10rem] p-8">
            <div className="relative mb-8 m-0 pb-8 overflow-hidden text-center text-gray-700  bg-transparent border-b rounded-none shadow-none bg-clip-border border-white/10">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-white uppercase">
                    Neno Laundry prices
                </p>
                <h1 className="flex justify-center  gap-1 mt-6 font-sans font-normal antialiased tracking-normal text-7xl" >

                    <span className="mt-2 text-4xl">$</span>29
                    <span className="text-4xl self-end">/mo</span>
                </h1>
             </div>
            <div className="p-0">
                <ul className="flex flex-col gap-4">
                    <li className="flex items-center gap-4">
                        <span className="p-1 border rounded-full border-white/20 bg-white/20"><svg xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3 h-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                        </svg>
                        </span>
                        <div className="flex gap-10">
                        <p className=" block font-sans text-base font-normal leading-relaxed text-inherit">Duvet</p>
                        <h1><span>500</span></h1>
                        </div>
                    </li>
                    <li className=" flex items-center gap-4">
                        <span className="p-1 border rounded-full border-white/20 bg-white/20">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3 h-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                            </svg>
                        </span>
                        <p className="block font-sans text-base font-normal leading-relaxed text-inherit">
                            200+ components
                        </p>
                    </li>
                    <li className=" flex gap-4 items-center">
                        <span className="p-1 border rounded-full bg-white/20 border-white/20 "><svg xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3 h-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                        </svg></span>
                        <p className=""> 40+ built-ins</p>
                    </li>
                </ul>

            </div>
            <div className="">
                <Button className="bg-black"> Buy Now</Button>

            </div>
        
        </div>

    </div >
  )
}
