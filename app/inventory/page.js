import { IoChevronBackCircle } from "react-icons/io5";
import { Card } from "flowbite-react";
import SideButton from "../topbutton";
export default function Inventory() {
  return (
    <div className="flex flex-col gap-4 ">
      <SideButton
        icon={IoChevronBackCircle}
        text="Back to Dashboard"
        selected={false}
      />

      <div>
        <div className="flex flex-row justify-center p-2">
          <Card className="max-w-sm" imgSrc="./meds.png" horizontal>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Medicine Name
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Quantity: 100
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400 ">
              <span className="p-2"> Available</span>
              <label>
                <input type="checkbox" />
              </label>
            </p>
          </Card>
          <Card className="max-w-sm" imgSrc="./meds.png" horizontal>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Medicine Name
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Quantity: 100
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400 ">
              <span className="p-2"> Available</span>
              <label>
                <input type="checkbox" />
              </label>
            </p>
          </Card>
        </div>
        <div className="flex flex-row justify-center p-2">
          <Card className="max-w-sm" imgSrc="./meds.png" horizontal>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Medicine Name
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Quantity: 100
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400 ">
              <span className="p-2"> Available</span>
              <label>
                <input type="checkbox" />
              </label>
            </p>
          </Card>
          <Card className="max-w-sm" imgSrc="./meds.png" horizontal>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Medicine Name
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Quantity: 100
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400 ">
              <span className="p-2"> Available</span>
              <label>
                <input type="checkbox" />
              </label>
            </p>
            .
          </Card>
        </div>
        <div className="flex flex-row justify-center p-2">
          <Card className="max-w-sm" imgSrc="./meds.png" horizontal>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Medicine Name
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Quantity: 100
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400 ">
              <span className="p-2"> Available</span>
              <label>
                <input type="checkbox" />
              </label>
            </p>
          </Card>
          <Card className="max-w-sm" imgSrc="./meds.png" horizontal>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Medicine Name
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Quantity: 100
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400 ">
              <span className="p-2"> Available</span>
              <label>
                <input type="checkbox" />
              </label>
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
