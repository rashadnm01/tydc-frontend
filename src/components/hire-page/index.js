import React, { useEffect, useState } from "react";
import "./_hire-page.scss";
import { DeveloperInformation } from "./developer-information";
import { DevList } from "./devlist";

export const HirePage = () => {
  return (
    <div className="hire-page-wrapper">
      <DevList viewMore={true} />
      <DeveloperInformation />
    </div>
  );
};
