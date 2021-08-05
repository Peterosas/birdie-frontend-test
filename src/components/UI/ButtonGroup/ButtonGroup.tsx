
import React, { useState } from 'react';
import styled from 'styled-components';

const ButtonGroupSection = styled.div`
    display: flex;
    justify-content: flex-end;
    align-self: center;
`;

const Button = styled.button`
    background-color: #fff;
    border: none;
    padding: 10px 24px;
    text-align: center;
    text-decoration: none;
    font-size: 14px;
    cursor: pointer;
`;

const ButtonGroup = ({ buttons, activeId, onChange } : {buttons: string[], activeId?: number, onChange?: (e: number) => void}) => {
    const [activeButtonId, setActiveButtonId] = useState<number>(activeId?? 0);

    const handleClick = (i: number) => {
        setActiveButtonId(i);
        onChange?.(i);
    }
    return(
        <ButtonGroupSection>
            {buttons.map((buttonLabel, i) => (
                <Button key={i} 
                    name={buttonLabel} 
                    onClick={() => handleClick(i)}
                    className={i === activeButtonId ? "active" : ""}
                >
                    {buttonLabel}
                </Button>
            ))}
        </ButtonGroupSection>
    );
}

export default ButtonGroup;