import React, { useState } from "react";
import { BsBox } from "react-icons/bs";
import { GiPlanks } from "react-icons/gi";
import { MdOutlineDesignServices } from "react-icons/md";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Slide1 from "@/components/Slide1";
import Slide2 from "@/components/Slide2";
import Slide3 from "@/components/Slide3";

export default function TestBox() {
  //ci dessous etat pour gerer le carrousel du formulaire
  const [position, setPosition] = useState(0);

  function handleNext() {
    setPosition(position + 1);
  }

  function handlePrev() {
    setPosition(position - 1);
  }

  return (
    <div className="flex flex-col w-full h-full items-center ">
      {position === 0 && (
        <Slide1 position={position} handleNext={() => handleNext()} />
      )}
      {position === 1 && <Slide2 position={position} />}
      {position === 2 && <Slide3 position={position} />}
      <div className="flex w-1/3 items-center justify-evenly">
        <button onClick={handlePrev}>Précédent</button>
        <button onClick={handleNext}>Suivant</button>
      </div>
    </div>
  );
}
