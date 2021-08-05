
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

const ButtonGroup = ({ buttons, activeId } : {buttons: string[], activeId?: number}) => {
    const [activeButtonId, setActiveButtonId] = useState<number>(activeId?? 0);
    return(
        <ButtonGroupSection>
            {buttons.map((buttonLabel, i) => (
                <Button key={i} 
                    name={buttonLabel} 
                    onClick={() => setActiveButtonId(i)}
                    className={i === activeButtonId ? "active" : ""}
                >
                    {buttonLabel}
                </Button>
            ))}
        </ButtonGroupSection>
    );
}

export default ButtonGroup;