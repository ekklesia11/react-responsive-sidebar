import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const MenuToggleBtn = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faBars} />
    </div>
  );
};

export default MenuToggleBtn;
