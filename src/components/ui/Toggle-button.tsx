import { useState } from "react";
import { ButtonOption } from "../../features/standings/types/standings";
import "./toggle-button.css";

export default function ToggleButton({
  buttonOptions,
  setButtonState,
}: {
  buttonOptions: ButtonOption[];
  setButtonState: (state) => void;
}) {
  const [selectedButton, setSelectedButton] = useState<ButtonOption>(
    buttonOptions[0],
  );

  function handleButtonClick(option: ButtonOption) {
    setSelectedButton(option);
    setButtonState(option.name);
  }
  return (
    <>
      {buttonOptions.map((option) => (
        <button
          key={option.id}
          className={`button ${selectedButton.id === option.id ? "selected" : ""} `}
          onClick={() => handleButtonClick(option)}
        >
          {option.name}
        </button>
      ))}
    </>
  );
}
