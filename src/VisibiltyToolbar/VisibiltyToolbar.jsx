// https://react-bootstrap.github.io/components/buttons/#toggle-button-group-props
import React, { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import { VisibilityType } from "../utilities/constants";

export default function VisibiltyToolbar({ onVisibiltyChange }) {
    const [radioValue, setRadioValue] = useState(VisibilityType.ALL);

    const radios = [
        { name: "All", value: VisibilityType.ALL },
        { name: "Active", value: VisibilityType.ACTIVE },
        { name: "Completed", value: VisibilityType.COMPLETED },
    ];

    function handleChange(e) {
        const value = e.target.value;
        setRadioValue(value);

        onVisibiltyChange(value);
    }

    return (
        <ButtonGroup className="mb-2">
            {radios.map((radio, idx) => (
                <ToggleButton
                    key={idx}
                    id={`radio-${idx}`}
                    type="radio"
                    variant="secondary"
                    name="radio"
                    value={radio.value}
                    checked={radioValue === radio.value}
                    onChange={handleChange}
                >
                    {radio.name}
                </ToggleButton>
            ))}
        </ButtonGroup>
    );
}
