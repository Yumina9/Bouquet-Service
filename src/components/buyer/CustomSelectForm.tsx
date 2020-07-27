import React from 'react';
import styled from 'styled-components';

type CustomFormProps = {
    children: React.ReactNode;
};

export const CustomSelectForm = ({children}: CustomFormProps) => {
    return <CustomBlock>{children}</CustomBlock>
};

const CustomBlock = styled.div`
    text-align: center;
    width: 50%;
    float:left;
    height: 100%;
    overflow: hidden;
    
`;