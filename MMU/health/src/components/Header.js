import React from "react";
import { Tabs, TabsHeader, Tab } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import {
  Square3Stack3DIcon,
  UserCircleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import { NavDropdown } from "react-bootstrap";

export function TabLaundry() {
  const loggedIn = localStorage.getItem('user-info');

  const loggedInTabs = [
    {
      label: "Home",
      Value: "home",
      icon: Square3Stack3DIcon,
      desc: "",
      to: "/"
    },
    {
      label: "Book",
      Value: "book",
      icon: Square3Stack3DIcon,
      desc: "",
      to: "/book"
    },
    {
      label: "Contact Us",
      Value: "contact",
      icon: Cog6ToothIcon,
      desc: "",
      to: "/contact"
    },
    {
        label: "About Us",
        Value: "about",
        icon: UserCircleIcon,
        desc: "",
        to: "/about"

    }
  ];

  const loggedOutTabs = [
    {
      label: "User",
      Value: "login",
      icon: UserCircleIcon,
      desc: "",
      to: "/user"
    },
    {
      label: "Home",
      Value: "home",
      icon: Square3Stack3DIcon,
      desc: "",
      to: "/"
    }
  ];

  const tabsToShow = loggedIn ? loggedInTabs : loggedOutTabs;

  return (
    <Tabs value="dashboard">
      <TabsHeader>
        {tabsToShow.map(({ label, value, icon, to }) => (
          <Tab key={value} value={value}>
            <Link to={to} value={value}>
              <div className="flex items-center gap-2">
                {React.createElement(icon, { className: "w-5 h-5" })}
                {label}
              </div>
            </Link>
            
          </Tab>
          
        ))}
      </TabsHeader>
      
      
    </Tabs>
  );
}
