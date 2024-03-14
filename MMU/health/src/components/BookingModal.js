import React, { useState } from 'react';
import { Modal, Button } from "@material-tailwind/react";

const BookingModal = ({ showModal, setShowModal }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [time, setTime] = useState('');
  const [confirmation, setConfirmation] = useState('');

  const handleBooking = () => {
    // Perform validation and booking logic here

    // Clear input fields
    setName('');
    setAge('');
    setEmail('');
    setPhone('');
    setTime('');

    // Display confirmation message
    setConfirmation("Your appointment has been booked successfully!");

    // Close modal
    setShowModal(false);
  };

  return (
    <Modal size="regular" active={showModal} toggler={() => setShowModal(false)}>
      <div className="p-5">
        <h2 className="text-lg font-semibold mb-4">Book Appointment</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="border border-gray-300 rounded-md px-3 py-2 mb-2 w-full"
        />
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Age"
          className="border border-gray-300 rounded-md px-3 py-2 mb-2 w-full"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="border border-gray-300 rounded-md px-3 py-2 mb-2 w-full"
        />
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
          className="border border-gray-300 rounded-md px-3 py-2 mb-2 w-full"
        />
        <input
          type="datetime-local"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
        />
        <Button
          color="lightBlue"
          buttonType="filled"
          size="regular"
          rounded={false}
          block={false}
          iconOnly={false}
          ripple="light"
          onClick={handleBooking}
        >
          Confirm Appointment
        </Button>
      </div>
      {/* Confirmation message */}
      {confirmation && (
        <div className="fixed bottom-0 left-0 w-full p-5 bg-green-500 text-white text-center">
          {confirmation}
        </div>
      )}
    </Modal>
  );
};

export default BookingModal;