import React from 'react';
import styled from 'styled-components';

type CustomFormProps = {
    children: React.ReactNode;
};

export const CustomSelectForm = ({children}: CustomFormProps) => {
    return <CustomBlock>{children}</CustomBlock>
};

const CustomBlock = styled.div`
    display: flex;
    text-align: center;
    width: 50%;
    float:left;
    overflow: hidden;
    justify-content:center;
    
`;