import React, { useState } from "react";

interface DropdownItemProps {
    icon?: string
    options: Array<Option>
}

export const Dropdown: React.FC<DropdownItemProps> = ( {options} ) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const dropdownClick = (option: Option) => {
        if (option.value == "Edit") {
            setIsOpen(false)
        }
            option.onClick();
        }

    return (
      <div className="dropdown">
        <div className="dropdown-item" onClick={toggleDropdown}>
          dropdown
        </div>
        {isOpen && (
          <div className="dropdown-list-container">
            {options.map((option: Option) => {
              return (
                <button onClick={() => dropdownClick(option)}>
                  {option.value}
                </button>
              );
            })}
          </div>
        )}
      </div>
    );
};