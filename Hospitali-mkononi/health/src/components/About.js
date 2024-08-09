import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import logo from '../assets/doctor1Image.jpeg'
import Hospitals from './Hospitals';
import { TabLaundry } from './Header';


export default function About() {
  return (
    <div className="text-center">
      <TabLaundry  />
    <div className="card my-5  ">
      <div className="justify-content-center align-items-center">
        <div className=" flex justify-center items-center m-2">
          <img src={logo} className="img-fluid rounded-start" alt="Hospitali Mkononi" 
          width={300}
            height={300}
          />
        </div>
        <div className="text-center">
          <div className="">
            <h1 className="text-emerald-950 text-3xl font-bold underline uppercase m-2">Hospitali Mkononi</h1>
            <p className="card-text">
            Introducing Hospitali Mkononi, our app designed to bring healthcare closer to patients. With people's 
            lives becoming busier and more individuals falling ill, accessing medical services has become challenging.
             Our solution simplifies the process by allowing users to find nearby hospitals and book appointments 
             seamlessly. By eliminating the need for physical visits and long waiting lines, Hospitali Mkononi ensures 
            patients receive timely care, addressing the pressing issue of accessibility in today's fast-paced world.
            </p>
          </div>
        </div>
        <h1 className='p-2 underline'>We are patnered with</h1>
        <Hospitals/>
      </div>
    </div>
    </div>
  );
};

