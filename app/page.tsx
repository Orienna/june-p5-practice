"use client";

import { useState } from "react";
import { Snippet } from "@heroui/snippet";

import { title, subtitle } from "@/components/primitives";
import ConfettiButton from "@/components/confettiButton";

export default function Home() {
  const [spinning, setSpinning] = useState(false);

  const spinButton = () => {
    setSpinning(true);
    setTimeout(() => setSpinning(false), 1500);
  };

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title({ color: "yellow" })}>Orienna&nbsp;</span>
        <span className={title({ color: "yellow" })}>& Co.&nbsp;</span>
        <br />
        {/* <span className={title()}>Wholesale</span> */}
        <div className={subtitle({ class: "mt-4" })}>
          <b>
            A fashion website that is perfect for helping you find and create
            matching aesthetic outfits!{" "}
          </b>
        </div>
      </div>

      <div className="flex gap-3">
        <ConfettiButton />

        {/* <div className={spinning ? "animate-spin" : ""}>
          <Button radius="full" variant="ghost" onPress={spinButton}>
            Spin
          </Button>
        </div> */}
      </div>

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>Order by leaving your emails!</span>
        </Snippet>
      </div>
    </section>
  );
}
