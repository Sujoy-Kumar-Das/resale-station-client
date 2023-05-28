import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand as={Link} to="/">
        <img
          src="https://i.ibb.co/ZgYcK95/logo.png"
          className="mr-3 w-14"
          alt="Flowbite Logo"
        />
        <span className=" italic self-center whitespace-nowrap text-xl font-normal dark:text-white">
          Resale Station
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline={true}
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded={true}
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link as={Link} to="/">
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} to="/products/catagorys">
          Products
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
