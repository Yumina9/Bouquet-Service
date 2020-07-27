import React from 'react';
import Button from '../common/Button';
import Typography from '../common/Typography';
import palette from '../lib/styles/palette';
import styled from 'styled-components';
import {CustomSelectForm} from './CustomSelectForm';
import NaverAPIMap from './NaverAPIMap';

const CustomSelect = () => {

    const CustomSelect = styled.div`
            width: 100%;
            height: 500px;
            float: left;
        `;
       
    return (  
        <div>
            <CustomSelect>
                <CustomSelectForm>
                    <Typography type="H5" color={palette.color2} fontWeight="bold">
                        직접 꽃다발은 선택하시겠습니까?
                    </Typography>
                    <Button color={palette.color4} bgColor={palette.color3}>직접 선택하기</Button>    
                </CustomSelectForm>
                <CustomSelectForm>
                    <NaverAPIMap />
                </CustomSelectForm>
                
                           
            </CustomSelect>
        </div>
    );
};

export default CustomSelect;