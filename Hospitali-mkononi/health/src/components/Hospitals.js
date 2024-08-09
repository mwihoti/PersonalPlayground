import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Button, Modal } from "@material-tailwind/react";
import hospitals from '../assets/hospitalData';
import { useState } from 'react';


const Hospitals = () => {
  const [showModal, setShowModal] = useState(false);
 

  
   
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8" >
      {hospitals.map((hospital, index) => (
        <Card key={index}>
          <CardHeader color="lightBlue">
            <h2 className="text-lg font-semibold text-blac">{hospital.name}</h2>
          </CardHeader>
          <CardBody>
            <p className="text-base text-gray-700">{hospital.description}</p>
            <p className="text-sm text-gray-500 mt-2">Location: {hospital.location}</p>
            <p className='text-sm text-gray-500'>Emergency Number: {hospital.emergencyNo}</p>
          </CardBody>
          <CardFooter>
            <Button
              color="lightBlue"
              buttonType="filled"
              size="regular"
              rounded={false}
              block={false}
              iconOnly={false}
              ripple="light"
              onClick={() => setShowModal(true)}
            >
             
            </Button>
          </CardFooter>
        </Card>
      ))}
       
    </div>
  );
};

export default Hospitals;
