"use client";
import { useEffect, useState } from "react";
import { IoChevronBackCircle } from "react-icons/io5";
import {
  Card,
  Button,
  Modal,
  Checkbox,
  Label,
  TextInput,
} from "flowbite-react";
import { useRouter } from "next/navigation";
import SideButton from "../topbutton";
import LoginSwitch from "../loginswitch";
import { getCookie } from "cookies-next";

export default function Inventory() {
  const router = useRouter();
  const [inventory, setInventory] = useState({ items: [] });
  const [openModal, setOpenModal] = useState(true);

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await fetch(
          "http://172.31.219.169:8000/auth/pharmacy",
          {
            headers: {
              Authorization: `Bearer ${getCookie("data")}`,
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          setInventory(data);
        } else {
          router.push("/login");
          throw new Error("Failed to fetch inventory");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchInventory();
  }, []);

  const handleBackToDashboard = () => {
    router.push("/");
  };

  const handleAddMedicine = async (e) => {
    e.preventDefault();
    console.log("fsjljs dkf jl");
    const med1 = e.target["med1"].value;
    const num = e.target["number-input"].value;
    try {
      // const data = new FormData(e);
      // console.log(data);
      const response = await fetch("http://172.31.219.169:8000/cart/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getCookie("data")}`,
        },
        body: JSON.stringify({
          pharmacy_name: "Gupta Pharmacy",
          items: [
            {
              name: med1,
              quantity: num,
            },
          ],
        }),
      });
      if (response.ok) {
        const data = await response.json();
        // Handle success response
      } else {
        throw new Error("Failed to add medicine");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col gap-4 ">
      <LoginSwitch />
      <SideButton
        icon={IoChevronBackCircle}
        text="Back to Dashboard"
        selected={false}
        onClick={handleBackToDashboard}
      />
      <span className="text-3xl font-bold flex flex-col justify-center gap-3 ">
        <span className="text-center">Inventory Details </span>
        <p className="flex flex-row justify-center gap-3">
          <span> Options - </span>
          <Button onClick={() => setOpenModal(true)}>Add Medicine </Button>
          <Modal show={openModal} onClose={() => setOpenModal(false)}>
            <Modal.Body>
              <form
                onSubmit={handleAddMedicine}
                className="flex  flex-col gap-4 justify-center items-center shadow-sm shadow-cyan-700 p-2"
              >
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="email1" value="Medicine Name" />
                  </div>
                  <input
                    aria-describedby="helper-text-explanation"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id="med1"
                    placeholder="dolo-650"
                    required
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="password1" value="Quantity" />
                  </div>
                  <input
                    type="number"
                    id="number-input"
                    aria-describedby="helper-text-explanation"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="90210"
                    required
                  />
                </div>
                <Button type="submit">Submit</Button>
                <Button type="button" onClick={() => setOpenModal(false)}>
                  Close
                </Button>
              </form>
            </Modal.Body>
          </Modal>
        </p>
      </span>
      <p className="text-center text-lg">
        Here are the details of the inventory in the pharmacy
      </p>
      <Button className="w-auto"> </Button>
      <div className="grid grid-cols-3  justify-center items-center  p-16 ">
        {inventory.items.map((item) => (
          <div className="flex flex-row justify-center p-2" key={item.id}>
            <Card className="max-w-sm" imgSrc="./meds.png" horizontal>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.name}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Quantity: {item.quantity}
              </p>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
