import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Button } from "@material-tailwind/react";


function HomeDetails() {
  return (
    <div className="flex justify-center items-center">
      <Card className="w-80">
        <CardHeader color="lightBlue">
          <h2 className="text-lg font-semibold text-white">Our Health App</h2>
        </CardHeader>
        <CardBody>
          <p className="text-base text-gray-700">
            Welcome to Our Health App! We are dedicated to providing top-notch healthcare services to our users.
            Our app is designed to make it easy for you to manage your health and access medical assistance whenever you need it.
          </p>
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
          >
            Learn More
          </Button>
        </CardFooter>
      </Card>

      <Card className="w-80 ml-4">
        <CardHeader color="lightBlue">
          <h2 className="text-lg font-semibold text-white">Our Services</h2>
        </CardHeader>
        <CardBody>
          <ul className="list-disc list-inside text-gray-700">
            <li>Online Consultations with Qualified Doctors</li>
            <li>Appointment Booking for In-person Visits</li>
            <li>Prescription Management</li>
            <li>Health Tracking and Monitoring</li>
            <li>Emergency Assistance</li>
          </ul>
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
          >
            Explore Services
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default HomeDetails