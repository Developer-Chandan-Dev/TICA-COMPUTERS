import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { AddMaterialHeading, ShowMaterialHeadings } from "./index";

const MaterialHeadings = () => {

  return (
    <div>
      <AddMaterialHeading />
      <ShowMaterialHeadings />
    </div>
  );
};

export default MaterialHeadings;
