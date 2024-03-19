import { Button } from "@material-tailwind/react"
import React from "react"



export default function Card() {
    return (
        <div className="flex justify-center items-center pt-3">
        <div className=" border-8 border-black separate m-0 w-72 rounded-3xl" >
            <th className="p-5 underline ">Social Media</th>
            <ul className="">
                
                <li className="flex border-t-4 border-indigo-500 p-3">
                    <h3>Whatsapp :</h3>
                    <td> +254723559412</td>
                </li>
                
                <li className="flex border-t-4 border-indigo-500 p-3">
                    <h3>Instagram :</h3>
                    <td> <em>@nenolaundry</em></td>
                </li>
            </ul>


        </div >
        </div>
    )
}
