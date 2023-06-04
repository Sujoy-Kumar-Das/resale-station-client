import { Avatar, Table } from "flowbite-react";
import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

const SellerInfo = ({ productDetail }) => {
  const {
    seller_email,
    seller_image,
    seller_name,
    seller_phone,
    seller_location,
  } = productDetail;
  return (
    <Table striped>
      <Table.Body className="divide-y">
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Seller Photo
          </Table.Cell>
          <Table.Cell>
            <PhotoProvider>
              <PhotoView src={seller_image}>
                <Avatar img={seller_image} />
              </PhotoView>
            </PhotoProvider>
          </Table.Cell>
        </Table.Row>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Name
          </Table.Cell>
          <Table.Cell>{seller_name}</Table.Cell>
        </Table.Row>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Address
          </Table.Cell>
          <Table.Cell>{seller_location}</Table.Cell>
        </Table.Row>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Email
          </Table.Cell>
          <Table.Cell>{seller_email}</Table.Cell>
        </Table.Row>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Phone
          </Table.Cell>
          <Table.Cell>{seller_phone}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};

export default SellerInfo;
