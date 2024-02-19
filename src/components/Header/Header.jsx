import React, { useEffect, useState } from "react";

import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function Header() {
  const [openNav, setOpenNav] = React.useState(false);
  const [name, setName] = useState("");
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  useEffect(() => {
    const useremail = localStorage.getItem("useremail");
    const password = localStorage.getItem("password");

    const getName = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: useremail,
            password: password,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          setName(data.data.name);
        } else {
          console.error("Username cannot get");
        }
      } catch (error) {
        console.error("Error during login:", error.message);
      }
    };

    if (isLoggedIn) {
      getName();
    } else {
      console.log("Login first");
    }
  }, [isLoggedIn]);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2  flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal hover:scale-105 duration-300 ease-in-out"
      >
        <Link to="/portfolio">Portfolio</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal hover:scale-105 duration-300 ease-in-out"
      >
        <Link to="/dashboard">Dashboard</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal hover:scale-105 duration-300 ease-in-out"
      >
        <Link to="/analysis">Analysis</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal hover:scale-105 duration-300 ease-in-out"
      >
        <Link to="/indices">Indices</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal hover:scale-105 duration-300 ease-in-out"
      >
        <Link to="/news">News</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal hover:scale-105 duration-300 ease-in-out"
      >
        {/* <a href="#" className="flex items-center">
          About Us
        </a> */}
        <Link to="/Aboutus">About Us</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal hover:scale-105 duration-300 ease-in-out"
      >
        {/* <a href="#" className="flex items-center">
          Github
        </a> */}
        <Link
          to="https://github.com/aniketsingh10/Portfolio-Mangement-System"
          target="_blank"
        >
          Github
        </Link>
      </Typography>
    </ul>
  );

  return (
    <div>
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 border">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography className="mr-4 cursor-pointer py-1.5 font-medium  ">
            <Link to="/" className="text-bold">
              Portfolio Management System
            </Link>
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              <Button
                variant="text"
                size="sm"
                className="hidden lg:inline-block"
              >
                {isLoggedIn ? name : <Link to="/login">Log In</Link>}
              </Button>
              <Button
                size="sm"
                className="hidden lg:inline-block"
                style={{
                  backgroundColor: "rgb(59 130 246)",
                }}
              >
                {isLoggedIn ? (
                  <>
                    <Link
                      to="/login"
                      onClick={() => {
                        localStorage.setItem("isLoggedIn", false);
                      }}
                    >
                      Log Out
                    </Link>
                  </>
                ) : (
                  <Link to="/signup">Sign up</Link>
                )}
              </Button>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm" className="">
              {isLoggedIn ? name : <Link to="/login">Log In</Link>}
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="">
              {isLoggedIn ? (
                <>
                  <Link
                    to="/login"
                    onClick={() => {
                      localStorage.setItem("isLoggedIn", false);
                    }}
                  >
                    Log Out
                  </Link>
                </>
              ) : (
                <Link to="/signup">Sign up</Link>
              )}
            </Button>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}
