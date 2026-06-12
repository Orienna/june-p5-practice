"use client";

import { Button } from "@heroui/button";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Accordion, AccordionItem, Input, Modal } from "@heroui/react";
import { useState } from "react";

import { title } from "@/components/primitives";

export default function PricingPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const thisDoesNothingToast = () => {
    // addToast({
    //   // title: "Hey!",
    //   // description:
    //   //   "This button does nothing. But you can make it do something!",
    //   // color: "danger",
    // });
    setModalOpen(true);
  };

  return (
    <div>
      <Modal isOpen={modalOpen}>
        <Input label="Email" placeholder="Enter your email" />
        <Button
          color="secondary"
          radius="full"
          onPress={() => {
            thisDoesNothingToast();
          }}
        >
          Submit!
        </Button>
      </Modal>

      <h1 className={title()}>All about GIRLS FASHION!!</h1>

      <p>
        Here are some of my suggestions on how to match your clothes based on
        your mood of the day:
      </p>

      <section className="mt-20">
        <h2 className="text-center text-4xl font-bold">
          Example Clothes Matching
        </h2>
        {/* <Input placeholder="Enter your email" label="Email" /> */}
        <div className="flex justify-center gap-8 mt-20">
          {/* plan 1 */}
          <Card className="p-6 w-1/3">
            <CardHeader>
              <div className="text-3xl text-center w-full font-extrabold text-primary">
                Blue <span className="text-sm">set</span>
              </div>
            </CardHeader>
            <CardBody>
              <ul className="list-disc pl-5 text-xl">
                {/* <li>1,000 monthly orders</li>
                <li>5,000 customer limit</li>
                <li>Manual bookkeeping and invoices</li>
                <li>Standard shipping</li> */}
                <img
                  alt="Blue set"
                  src="https://img.ltwebstatic.com/v4/j/pi/2025/09/10/e6/17575059025a67820eb1422804568e27650402ee8a_thumbnail_405x552_thumbnail_720x.jpg"
                />
              </ul>
            </CardBody>
            <CardFooter className="justify-center">
              <Button
                color="primary"
                radius="full"
                onPress={() => {
                  thisDoesNothingToast();
                }}
              >
                Sign Up
              </Button>
            </CardFooter>
          </Card>

          {/* plan 2 */}
          <Card className="p-6 w-1/3">
            <CardHeader>
              <div className="text-3xl text-center w-full font-extrabold text-secondary">
                Red <span className="text-sm">set</span>
              </div>
            </CardHeader>
            <CardBody>
              <ul className="list-disc pl-5 text-xl">
                <img
                  alt="Red set"
                  src="https://img.ltwebstatic.com/v4/j/spmp/2026/01/20/b5/17688755811e07f995aad4d1f2fddd19e3f9e533fc_thumbnail_750x999.jpg"
                />
              </ul>
            </CardBody>
            <CardFooter className="justify-center">
              <Button
                color="secondary"
                radius="full"
                onPress={() => {
                  thisDoesNothingToast();
                }}
              >
                Sign Up
              </Button>
            </CardFooter>
          </Card>

          {/* plan 3 */}
          <Card className="p-6 w-1/3">
            <CardHeader>
              <div className="text-3xl text-center w-full font-extrabold text-success">
                Green <span className="text-sm">set</span>
              </div>
            </CardHeader>
            <CardBody>
              <ul className="list-disc pl-5 text-xl">
                <img
                  alt="Green set"
                  src="https://img.ltwebstatic.com/v4/j/pi/2025/10/08/9d/1759938629835854f3f98bb810e1c0cfe2bc7793dc_thumbnail_750x999.jpg"
                />
              </ul>
            </CardBody>
            <CardFooter className="justify-center">
              <Button
                color="success"
                radius="full"
                onPress={() => {
                  thisDoesNothingToast();
                }}
              >
                Sign Up
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <section className="my-40">
        <h2 className="text-center text-4xl font-bold">Fashion humor</h2>
        <Accordion>
          <AccordionItem key={1} title="What kind of dress can’t be worn?">
            Address AHA!!
          </AccordionItem>
          <AccordionItem key={2} title="Want more? Click in!">
            Before you criticize someone, you should walk a mile in their shoes.
            That way, when you do criticize them, you are a mile away and they
            have no shoes!
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
}
