import React from 'react';
import hospitalHistoryImage from '../assets/hospitalHistoryImage.jpeg';
import doctor1Image from '../assets/doctor1Image.jpeg';
import doctor2Image from '../assets/doctor2Image.jpeg';

const AboutPage = () => {
  return (
    <div className="text-center">
      <section className="">
        <div className="-center justify-center">
          <img src={hospitalHistoryImage} alt="Hospital History" />
        </div>
        <div className="history-content">
          <h2>Our History</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            condimentum consectetur purus, et mattis metus suscipit vel.
            Phasellus scelerisque nunc nec erat tristique, at lobortis nunc
            elementum.
          </p>
          <p>
            Proin tempor aliquet nisi, at lacinia dolor fringilla at. Morbi
            ultricies interdum elit, et tincidunt lectus consectetur sed.
          </p>
        </div>
      </section>

      <section className="values-section">
        <h2>Our Values</h2>
        <ul>
          <li>Compassion and Care</li>
          <li>Excellence in Service</li>
          <li>Patient-Centered Approach</li>
          <li>Continuous Innovation</li>
          <li>Community Engagement</li>
        </ul>
      </section>

      <section className="doctors-section">
        <h2>Meet Our Doctors</h2>
        <div className="doctor-card">
          <img src={doctor1Image} alt="Doctor 1" />
          <div className="doctor-info">
            <h3>Dr. John Doe</h3>
            <p>Specialization: Cardiology</p>
            <p>Years of Experience: 15+</p>
          </div>
        </div>
        <div className="doctor-card">
          <img src={doctor2Image} alt="Doctor 2" />
          <div className="doctor-info">
            <h3>Dr. Jane Smith</h3>
            <p>Specialization: Pediatrics</p>
            <p>Years of Experience: 10+</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
