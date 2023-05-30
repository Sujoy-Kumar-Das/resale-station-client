import { Table } from "flowbite-react";
import React from "react";

const ProductConfigTable = ({ productDetail }) => {
  const {
    buying_year,
    condition,
    model,
    porduct_title,
    processor,
    original_price,
    resale_price,
    screen_size,
    storage,
    year,
    years_of_use,
  } = productDetail;
  return (
    <Table striped>
      <Table.Body className="divide-y">
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Brand
          </Table.Cell>
          <Table.Cell>{porduct_title}</Table.Cell>
        </Table.Row>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Model
          </Table.Cell>
          <Table.Cell>{model}</Table.Cell>
        </Table.Row>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Processor
          </Table.Cell>
          <Table.Cell>{processor}</Table.Cell>
        </Table.Row>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Screen Size
          </Table.Cell>
          <Table.Cell>{screen_size} inches</Table.Cell>
        </Table.Row>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Storage
          </Table.Cell>
          <Table.Cell>{storage}</Table.Cell>
        </Table.Row>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Condition
          </Table.Cell>
          <Table.Cell>{condition}</Table.Cell>
        </Table.Row>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Release Year
          </Table.Cell>
          <Table.Cell>{year}</Table.Cell>
        </Table.Row>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Buying Year
          </Table.Cell>
          <Table.Cell>{buying_year}</Table.Cell>
        </Table.Row>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Total use
          </Table.Cell>
          <Table.Cell>{years_of_use} {years_of_use ===1 ? "year":"years"} </Table.Cell>
        </Table.Row>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Original Price
          </Table.Cell>
          <Table.Cell> ${ original_price} </Table.Cell>
        </Table.Row>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Resale Price
          </Table.Cell>
          <Table.Cell> ${resale_price}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};

export default ProductConfigTable;
