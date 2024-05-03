import Image from "next/image";
import Navbar from "./navbar";
import { Card } from "flowbite-react";
import { MdInventory } from "react-icons/md";
import Mainbutton from "./mainbutton";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 bg-white min-h-screen  ">
      <div className="flex flex-row">
        <div className="">
          <div className="flex flex-col flex-wrap  gap-4 p-8">
            <Link href="/inventory">
              <Card className="w-80 justify-center items-center">
                <img
                  src="./inventory.png"
                  className="w-auto "
                  alt="Flowbite React Logo"
                />
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                  Inventory
                </h5>
              </Card>
            </Link>
            <Link href="/inventory">
              <Card className="w-80 justify-center items-center">
                <img
                  src="./checklist.png"
                  className="w-auto "
                  alt="Flowbite React Logo"
                />
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                  Inventory
                </h5>
              </Card>
            </Link>
          </div>
        </div>

        <div className="p-7">
          <h1 className="text-xl p text-center bg-slate-300">Order Details</h1>
          <div className=" w-[68rem] overflow-x-auto">
            <Table striped>
              <TableHead>
                <TableHeadCell>Product name</TableHeadCell>
                <TableHeadCell>Color</TableHeadCell>
                <TableHeadCell>Category</TableHeadCell>
                <TableHeadCell>Price</TableHeadCell>
                <TableHeadCell>Status</TableHeadCell>
              </TableHead>
              <TableBody className="divide-y">
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {'Apple MacBook Pro 17"'}
                  </TableCell>
                  <TableCell>Sliver</TableCell>
                  <TableCell>Laptop</TableCell>
                  <TableCell>$2999</TableCell>
                  <TableCell>
                    <label>
                      <input type="checkbox" />
                    </label>
                  </TableCell>
                </TableRow>
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Microsoft Surface Pro
                  </TableCell>
                  <TableCell>White</TableCell>
                  <TableCell>Laptop PC</TableCell>
                  <TableCell>$1999</TableCell>
                  <TableCell>
                    <label>
                      <input type="checkbox" />
                    </label>
                  </TableCell>
                </TableRow>
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Magic Mouse 2
                  </TableCell>
                  <TableCell>Black</TableCell>
                  <TableCell>Accessories</TableCell>
                  <TableCell>$99</TableCell>
                  <TableCell>
                    <label>
                      <input type="checkbox" />
                    </label>
                  </TableCell>
                </TableRow>
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Google Pixel Phone
                  </TableCell>
                  <TableCell>Gray</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>$799</TableCell>
                  <TableCell>
                    <label>
                      <input type="checkbox" />
                    </label>
                  </TableCell>
                </TableRow>
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Apple Watch 5
                  </TableCell>
                  <TableCell>Red</TableCell>
                  <TableCell>Wearables</TableCell>
                  <TableCell>$999</TableCell>
                  <TableCell>
                    <label>
                      <input type="checkbox" />
                    </label>
                  </TableCell>
                </TableRow>
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Apple Watch 5
                  </TableCell>
                  <TableCell>Red</TableCell>
                  <TableCell>Wearables</TableCell>
                  <TableCell>$999</TableCell>
                  <TableCell>
                    <label>
                      <input type="checkbox" />
                    </label>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
