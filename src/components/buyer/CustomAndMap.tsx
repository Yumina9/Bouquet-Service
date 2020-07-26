import React from 'react';
import Button from '../common/Button';
import Typography from '../common/Typography';
import palette from '../lib/styles/palette';
import styled from 'styled-components';

const CustomAndMap = () => {

    const CustomSelect = styled.div`
            width: 100%;
            height: 500px;
            border: 1px solid red;
            float: left;
        `;
        const customSection = {
            border : '1px solid blue',
            width: '50%',
            height: '100%',
            // ? 폰트를 가운데 오는방법??타입 스크립트에 적용이 현재 안됨
        }
    return (

        
        <div>
            <CustomSelect>
                <section style={customSection}>
                    <Typography type="H5" color={palette.color2} fontWeight="bold">
                        직접 꽃다발은 선택하시겠습니까?
                    </Typography>
                    <Button color={palette.color4} bgColor={palette.color3}>직접 선택하기</Button>
                </section>  
                           
            </CustomSelect>
        </div>
    );
};

export default CustomAndMap;