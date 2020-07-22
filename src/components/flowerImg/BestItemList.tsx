import React from 'react';
import {FlowerCard} from '../flowerImg/FlowerCard';
import Typography from '../common/Typography';
import palette from '../lib/styles/palette';
import styled from 'styled-components';

const BestItemList = () => {

    const GridBox = styled.span`
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 2%;
        grid-template-areas: '. . .' '. . .';
    `;

    return (
        <div>
            <Typography type="H4" color={palette.color2} fontWeight="bold">
            Best Item
            </Typography>
            <GridBox>
                <FlowerCard />
                <FlowerCard />
                <FlowerCard />
            </GridBox>
        </div>
    );
};

export default BestItemList;