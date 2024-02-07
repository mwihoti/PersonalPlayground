import React from "react";
import {Tabs, TabsHeader, TabsBody, Tab, TabPanel} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import {
    Square3Stack3DIcon,
    UserCircleIcon,
    Cog6ToothIcon,
  } from "@heroicons/react/24/solid";

export function TabLaundry (){
    const data = [
        {
            label: "Home",
            Value: "home",
            icon: Square3Stack3DIcon,
            desc: "",
            to: "/"

        },
        {
            label: "About",
            Value: "about",
            icon: UserCircleIcon,
            desc: "About"

        },
        {
            label: "Contact",
            Value: "contact",
            icon: Cog6ToothIcon,
            desc: ""

        }
    ]
    return (
        <Tabs value= "dashboard">
            <TabsHeader>
                {data.map(({label, value, icon, to})=>(
                    <Tab key={value} value={value}>
                        <Link to={to} value={value}>
                        <div className="flex items-center gap-2">
                            {React.createElement(icon, {className: "w-5 h-5"})}
                            {label}
                        </div>
                        </Link>
                    </Tab>
                ))}
            </TabsHeader>

        </Tabs>
    )
}