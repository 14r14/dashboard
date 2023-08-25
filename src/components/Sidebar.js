import React, { useState } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  InboxArrowDownIcon,
  UserIcon,
  Cog8ToothIcon,
  PresentationChartLineIcon,
  ShoppingCartIcon,
  ChevronDoubleLeftIcon,
  PowerIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

import logo from "../static/img/Cal Commit Logo.svg";
import { Link } from "react-router-dom";

export function CCDSidebar() {
  const [open, setOpen] = useState(true);
  const menuItems = [
    {
      icon: PresentationChartLineIcon,
      label: "Placeholder",
      link: "/placeholder",
    },
    { icon: ShoppingCartIcon, label: "Placeholder", link: "/placeholder" },
    { icon: InboxArrowDownIcon, label: "Placeholder", link: "/placeholder" },
    { icon: UserIcon, label: "Placeholder", link: "/placeholder" },
    { icon: Cog8ToothIcon, label: "Placeholder", link: "/placeholder" },
  ];

  const userMenuItems = [
    { icon: UserCircleIcon, label: "Username", link: "/settings" },
    { icon: PowerIcon, label: "Placeholder", link: "/placeholder" },
  ];

  const openJsx = (
    <>
      <Card
        className={`fixed h-full top-0 left-0 z-40 rounded-r-lg rounded-l-none w-full max-w-[20rem] p-4 shadow-lg shadow-blue-gray-900/5 bg-gradient-to-b from-deep-orange-50 via-deep-orange-100 to-deep-orange-50 translate-x-20`}
      >
        <div className="transition-all duration-300 ease-in-out shadow-md cursor-pointer mb-2 bg-white rounded-lg p-2 hover:scale-105 hover:-rotate-12 hover:shadow-lg">
          <Link
            to="/"
            className="flex items-center font-dela-gothic text-2xl text-black"
          >
            <img src={logo} alt="Cal Commit" className="h-10 w-auto mr-2" /> Cal
            Commit
          </Link>
        </div>
        <List>
          {menuItems.map((item, idx) => (
            <ListItem key={idx} className="p-0">
              <Link
                to={item.link}
                className={`flex items-center w-full capitalize transition-all duration-300 ease-in-out border-b-0 p-3 hover:bg-calcommit-orange/40 bg-transparent rounded-lg`}
              >
                <ListItemPrefix>
                  <item.icon className="h-5 w-5 text-black" />
                </ListItemPrefix>
                <Typography className="mr-auto font-normal text-black text-lg font-dm-sans">
                  {item.label}
                </Typography>
              </Link>
            </ListItem>
          ))}
        </List>
        <div className="absolute bottom-28 left-auto mr-11">
          <List className="flex flex-col justify-center items-center border border-calcommit-orange shadow-lg rounded-lg">
            {userMenuItems.map((item, idx) => (
              <ListItem
                key={idx}
                className="transition-all duration-300 w-full ease-in-out py-3 group hover:bg-calcommit-orange/40 hover:shadow-lg"
              >
                <Link
                  to={item.link}
                  className={`flex items-center w-full capitalize transition-all duration-300 ease-in-out px-3 border-b-0 rounded-lg rounded-r-full bg-transparent`}
                >
                  <ListItemPrefix>
                    <item.icon className="h-5 w-5 text-black" />
                  </ListItemPrefix>
                  <Typography className="mr-auto font-normal text-black text-lg font-dm-sans">
                    {item.label}
                  </Typography>
                </Link>
              </ListItem>
            ))}
          </List>
        </div>
      </Card>
    </>
  );

  const closedJsx = (
    <>
      <Card
        className={`fixed h-full items-center top-0 left-0 z-40 w-20 rounded-r-lg rounded-l-none px-2 py-4 shadow-lg shadow-blue-gray-900/5 bg-gradient-to-b from-deep-orange-50 via-deep-orange-100 to-deep-orange-50`}
      >
        <div className="w-full flex flex-col items-center justify-center">
          <div className="transition-all w-14 duration-300 ease-in-out justify-center shadow-md cursor-pointer mb-2 bg-white rounded-lg p-2 hover:scale-105 hover:-rotate-12 hover:shadow-lg">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Cal Commit" className="h-10 w-10" />
            </Link>
          </div>
          <List className="flex flex-col justify-center items-center min-w-20 w-full">
            {menuItems.map((item, idx) => (
              <ListItem key={idx} className="p-0">
                <Link
                  to={item.link}
                  className={`flex items-center justify-center transition-all duration-300 ease-in-out border-b-0 p-3 rounded-lg rounded-r-full group hover:bg-calcommit-orange hover:shadow-lg bg-transparent`}
                >
                  <ListItemPrefix>
                    <item.icon className="h-5 w-5 text-black" />
                  </ListItemPrefix>
                </Link>
              </ListItem>
            ))}
          </List>
          <div className="absolute bottom-28 left-auto min-w-20 w-full">
            <List className="flex flex-col justify-center items-center min-w-20 w-full rounded-t-lg rounded-b-lg">
              {userMenuItems.map((item, idx) => (
                <ListItem
                  key={idx}
                  className="transition-all duration-300 ease-in-out p-2 py-3 group hover:bg-calcommit-orange hover:shadow-lg hover:scale-105 hover:-rotate-6"
                >
                  <Link
                    to={item.link}
                    className={`flex items-center w-full capitalize transition-all duration-300 ease-in-out px-3 border-b-0 rounded-lg rounded-r-full bg-transparent`}
                  >
                    <ListItemPrefix>
                      <item.icon className="h-5 w-5 text-black" />
                    </ListItemPrefix>
                  </Link>
                </ListItem>
              ))}
            </List>
          </div>
        </div>
      </Card>
    </>
  );

  return (
    <>
      <div>{open ? openJsx : closedJsx}</div>
      <div>
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="absolute left-5 bottom-5 z-50 transition-all duration-300 ease-in-out rounded-lg p-2 bg-transparent shadow-none border border-calcommit-orange hover:scale-110 hover:bg-calcommit-orange"
        >
          <ChevronDoubleLeftIcon
            className={`transiton-transform duration-300 ease-in-out h-5 w-5 text-black ${
              !open && "rotate-180"
            }`}
          />
        </button>
      </div>
    </>
  );
}
