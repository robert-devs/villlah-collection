import { MouseEventHandler } from "react";
import { manufacturers } from "./../constants/index";

export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface setManufacturerProps {
  manufacturer: string
  setManuFacturer:(manufacturers: string) => void
}