
import React from 'react';
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
    font-size: 16px;
    cursor: pointer;
`;

const ButtonGroup = () => {
    return(
        <ButtonGroupSection>
            <Button>Timeline</Button>
            <Button>Graph</Button>
            <Button>Table</Button>
        </ButtonGroupSection>
    );
}

export default ButtonGroup;