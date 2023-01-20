import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SquareButton = ({ icon, label, onClick, className = "" }) => (
  <button className={`square-btn ${className}`} onClick={onClick}>
    <FontAwesomeIcon className={"square-btn__icon"} icon={icon} />
    <div className={"square-btn__label"}>{label}</div>
  </button>
);

export const IconButton = ({ icon, onClick, className = "" }) => (
  <button className={`icon-btn ${className}`} onClick={onClick}>
    <FontAwesomeIcon className={"icon-btn__icon"} icon={icon} />
  </button>
);

export const ThemedButton = ({
  icon,
  label,
  onClick,
  className = "",
  disabled = false,
}) => (
  <button
    disabled={disabled}
    className={`themed-btn ${className}`}
    onClick={onClick}
  >
    {!!icon && <FontAwesomeIcon className={"themed-btn__icon"} icon={icon} />}
    {!!label && <div className={"themed-btn__label"}>{label}</div>}
  </button>
);
