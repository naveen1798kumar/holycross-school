import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  const toggleAboutDropdown = () => {
    setAboutDropdownOpen((prev) => !prev);
  };

  // const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);


  const closeAboutDropdown = () => {
    setAboutDropdownOpen(false);
  };

  const baseNavLinkClasses = "block hover:text-gray-400 hover:bg-gray-200/20 hover:outline-[1px] outline-gray-200 rounded-sm px-2 py-1";
  const activeNavLinkClasses = "text-yellow-400";

  const getNavLinkClasses = ({ isActive }) =>
    `${baseNavLinkClasses} ${isActive ? activeNavLinkClasses : ""}`;


  return (
    <header className="bg-[#000168] text-white  p-4 relative flex justify-between items-center space-x-8">
      <div>
        <h2>LOGO</h2>
      </div>
      <nav className="container mx-auto hidden md:flex flex-wrap space-x-4 space-y-4">
        <NavLink to="/" className={getNavLinkClasses}>Home</NavLink>
        
        {/* About US with Dropdown */}
        <div className="relative group">
          <NavLink
            to="/about"
            onClick={toggleAboutDropdown}
            className={`${baseNavLinkClasses}`}
          >
            About US
          </NavLink>

          {/*  */}
        <div className='absolute left-0 mt-0 z-[99]' data-aos="fade-down">
        <div className="mt-4 w-auto min-w-48 bg-[#000168] outline-[1px] outline-gray-200 text-white rounded shadow-lg z-10 hidden group-hover:block"
          >
            <NavLink
              to="/about/motivating-factor"
              className={getNavLinkClasses}
              onClick={closeAboutDropdown}
            >
              Motivating Factor
            </NavLink>
            <NavLink
              to="/about/our-belief"
              className={getNavLinkClasses}
            >
              Our Belief
            </NavLink>
            <NavLink
              to="/about/president"
              className={getNavLinkClasses}
            >
              President
            </NavLink>
            <NavLink
              to="/about/correspondent"
              className={getNavLinkClasses}
            >
              Correspondent
            </NavLink>
            <NavLink
              to="/about/secretary"
              className={getNavLinkClasses}
            >
              Secretary
            </NavLink>
            <NavLink
              to="/about/principal"
              className={getNavLinkClasses}
            >
              Principal
            </NavLink>
            <NavLink
              to="/about/governing-board"
              className={getNavLinkClasses}
            >
              Governing Board
            </NavLink>
          </div>
        </div>

          {/* {aboutDropdownOpen && (
            <div className="absolute left-0 mt-1 w-auto min-w-48 bg-[#000168] outline-[1px] outline-gray-200 text-white rounded shadow-lg z-10">
              <NavLink
                to="/about"
                className={getNavLinkClasses}
                onClick={() => setAboutDropdownOpen(false)}
              >
                Motivating Factor
              </NavLink>
              <NavLink
                to="/"
                className={getNavLinkClasses}
                onClick={() => setAboutDropdownOpen(false)}
              >
                Our Belief
              </NavLink>
              <NavLink
                to="/"
                className={getNavLinkClasses}
                onClick={() => setAboutDropdownOpen(false)}
              >
                President
              </NavLink>
              <NavLink
                to="/"
                className={getNavLinkClasses}
                onClick={() => setAboutDropdownOpen(false)}
              >
                Corresondent
              </NavLink>
              <NavLink
                to="/"
                className={getNavLinkClasses}
                onClick={() => setAboutDropdownOpen(false)}
              >
                Secretary
              </NavLink>
              <NavLink
                to="/"
                className={getNavLinkClasses}
                onClick={() => setAboutDropdownOpen(false)}
              >
                Principal
              </NavLink>
              <NavLink
                to="/"
                className={getNavLinkClasses}
                onClick={() => setAboutDropdownOpen(false)}
              >
                Governing Board
              </NavLink>
            </div>
          )} */}
        </div>
        
        <div className="relative group">
        <NavLink to="/academics" className={getNavLinkClasses}>Academics</NavLink>
        <div className='absolute left-0 mt-0 z-[99]' data-aos="fade-down">
        <div className="mt-4 w-auto min-w-48 bg-[#000168] outline-[1px] outline-gray-200 text-white rounded shadow-lg z-10 hidden group-hover:block"
          >
            <NavLink
              to="/academics/promotion-policy"
              className={getNavLinkClasses}
            >
              Promotion Policy
            </NavLink>
            <NavLink
              to="/academics/behavioural-policy"
              className={getNavLinkClasses}
            >
              Behavioural Policy
            </NavLink>
            <NavLink
              to="/academics/examination-policy"
              className={getNavLinkClasses}
            >
              Examination Policy
            </NavLink>
            <NavLink
              to="/academics/awards-and-scholarships"
              className={getNavLinkClasses}
            >
              Awards and Scholarships
            </NavLink>
            <NavLink
              to="/academics/olympiads"
              className={getNavLinkClasses}
            >
              Olympiads
            </NavLink>
            <NavLink
              to="/academics/british-council"
              className={getNavLinkClasses}
            >
              British Council
            </NavLink>
            <NavLink
              to="/academics/school-timing"
              className={getNavLinkClasses}
            >
              School Timing
            </NavLink>
            <NavLink
              to="/academics/student-enrollment"
              className={getNavLinkClasses}
            >
              Student Enrollment
            </NavLink>
            <NavLink
              to="/academics/student-transfer-information"
              className={getNavLinkClasses}
            >
              Student Transfer Information
            </NavLink>
            {/* <NavLink
              to="/academics/student-enrollment"
              className={getNavLinkClasses}
            >
              Student Enrollment
            </NavLink>
            <NavLink
              to="/academics/information"
              className={getNavLinkClasses}
            >
              Information
            </NavLink> */}
            <NavLink
              to="/academics/students-council"
              className={getNavLinkClasses}
            >
              Students Council
            </NavLink>
            <NavLink
              to="/academics/nohomework-policy"
              className={getNavLinkClasses}
            >
              No Homework Policy
            </NavLink>
            <NavLink
              to="/academics/annual-report"
              className={getNavLinkClasses}
            >
              Annual Report
            </NavLink>
            <NavLink
              to="/academics/results"
              className={getNavLinkClasses}
            >
              Results
            </NavLink>
          </div>
        </div>
        </div>

        <div className="relative group">
        <NavLink to="/cbse" className={getNavLinkClasses}>CBSE</NavLink>
        <div className='absolute left-0 mt-0 z-[99]' data-aos="fade-down">
        <div className="mt-4 w-auto min-w-48 bg-[#000168] outline-[1px] outline-gray-200 text-white rounded shadow-lg z-10 hidden group-hover:block"
          >
            <NavLink
              to="/"
              className={getNavLinkClasses}
            >
              Mandatory Public Disclosure
            </NavLink>
            <NavLink
              to="/"
              className={getNavLinkClasses}
            >
              Documents and Information
            </NavLink>
            <NavLink
              to="/"
              className={getNavLinkClasses}
            >
              Results and Academics
            </NavLink>
            <NavLink
              to="/"
              className={getNavLinkClasses}
            >
              Others
            </NavLink>
            <NavLink
              to="/"
              className={getNavLinkClasses}
            >
              Staff (TEACHINGS)
            </NavLink>
            <NavLink
              to="/"
              className={getNavLinkClasses}
            >
              School Infrastructure
            </NavLink>
          </div>
        </div>
        </div>

        <div className="relative group">
        <NavLink to="/clubs" className={getNavLinkClasses}>Clubs & SUPW</NavLink>
        <div className='absolute left-0 mt-0 z-[99]' data-aos="fade-down">
        <div className="mt-4 w-auto min-w-48 bg-[#000168] outline-[1px] outline-gray-200 text-white rounded shadow-lg z-10 hidden group-hover:block"
          >
            <NavLink
              to="/"
              className={getNavLinkClasses}
            >
              Robotics Club
            </NavLink>
            <NavLink
              to="/"
              className={getNavLinkClasses}
            >
              Debating Club
            </NavLink>
            <NavLink
              to="/"
              className={getNavLinkClasses}
            >
              Electronics Club
            </NavLink>
            <NavLink
              to="/"
              className={getNavLinkClasses}
            >
              Interact Club
            </NavLink>
            <NavLink
              to="/"
              className={getNavLinkClasses}
            >
              Darmatics Club
            </NavLink>
            <NavLink
              to="/"
              className={getNavLinkClasses}
            >
              Astronomy Club
            </NavLink>
            <NavLink
              to="/"
              className={getNavLinkClasses}
            >
              Editorial Club
            </NavLink>
            <NavLink
              to="/"
              className={getNavLinkClasses}
            >
              Environmental Club
            </NavLink>
            <NavLink
              to="/"
              className={getNavLinkClasses}
            >
              Maths Club
            </NavLink>
            <NavLink
              to="/"
              className={getNavLinkClasses}
            >
              SUPW Club
            </NavLink>
            <NavLink
              to="/"
              className={getNavLinkClasses}
            >
              E-Spice Club
            </NavLink>
            <NavLink
              to="/"
              className={getNavLinkClasses}
            >
              Quiz Club
            </NavLink>
            <NavLink
              to="/"
              className={getNavLinkClasses}
            >
              Art Club
            </NavLink>
          </div>
        </div>
        </div>

        <div className="relative group">
        <NavLink to="/infrastructure" className={getNavLinkClasses}>Infrastructure</NavLink>
        <div className='absolute left-0 mt-0 z-[99]' data-aos="fade-down">
        <div className="mt-4 w-auto min-w-48 bg-[#000168] outline-[1px] outline-gray-200 text-white rounded shadow-lg z-10 hidden group-hover:block"
          >
            <NavLink
              to="/"
              className={getNavLinkClasses}
            >
              Our Campus
            </NavLink>
            <NavLink
              to="/"
              className={getNavLinkClasses}
            >
              Lab
            </NavLink>
            <NavLink
              to="/"
              className={getNavLinkClasses}
            >
              Transport
            </NavLink>
            <NavLink
              to="/"
              className={getNavLinkClasses}
            >
              Smart Classes
            </NavLink>
            <NavLink
              to="/"
              className={getNavLinkClasses}
            >
              Science Park
            </NavLink>
            <NavLink
              to="/"
              className={getNavLinkClasses}
            >
              Library
            </NavLink>
            <NavLink
              to="/"
              className={getNavLinkClasses}
            >
              Sports
            </NavLink>
            <NavLink
              to="/"
              className={getNavLinkClasses}
            >
              Auditorium
            </NavLink>
            <NavLink
              to="/"
              className={getNavLinkClasses}
            >
              A.V. Room
            </NavLink>
            <NavLink
              to="/"
              className={getNavLinkClasses}
            >
              Open-Air Theater
            </NavLink>
            <NavLink
              to="/"
              className={getNavLinkClasses}
            >
              Discovery Room
            </NavLink>
            <NavLink
              to="/"
              className={getNavLinkClasses}
            >
              Conference Room
            </NavLink>
            <NavLink
              to="/"
              className={getNavLinkClasses}
            >
              Seminar Room
            </NavLink>
          </div>
        </div>
        </div>
        

        <NavLink to="/faculty" className={getNavLinkClasses}>Faculty</NavLink>
        <NavLink to="/gallery" className={getNavLinkClasses}>Gallery</NavLink>
        <NavLink to="/admissions" className={getNavLinkClasses}>Admissions</NavLink>
        <NavLink to="/newsletter" className={getNavLinkClasses}>News Letter</NavLink>
        <NavLink to="/employment" className={getNavLinkClasses}>Employment</NavLink>
        <NavLink to="/contact" className={getNavLinkClasses}>Contact</NavLink>
        <NavLink to="/cbseresult" className={getNavLinkClasses}>CBSE Result</NavLink>
      </nav>
      <div>
      <NavLink to="/login" className={getNavLinkClasses}>Login</NavLink>
      </div>
    </header>
  );
};

export default Header;
