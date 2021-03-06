import React, { useEffect } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Typography from '../common/Typography';
import { BouquetType } from '../flowerImg/Bouquet';
import { FlowerDropdown } from '../Dropdown/FlowerDropdown';
import { WrappingPaperType } from '../flowerImg/WrappingPaper';
import useMakingBouquetStepper from './hooks/useMakingBouquetStepper';
import { WrappingPaperDropdown } from '../Dropdown/WrappingPaperDropdown';
import { RibbonDropdown } from '../Dropdown/RibbonDropdown';
import { FlowerType } from '../flowerImg/Flower';
import { RibbonType } from '../flowerImg/Ribbon';
import { useDispatch } from 'react-redux';
import { insertOrderData } from '../../modules/order';
import Button from '../common/Button';
import { Link, useHistory } from 'react-router-dom';

type BouquetStepperProps = {
  bouquet: BouquetType;
  shop_id: string;
};

const MakingBouquetStepper: React.FC<BouquetStepperProps> = ({ bouquet, shop_id }) => {
  const { flower_count, setFlowerCount, setReserve, resultPrice, reserve } = useMakingBouquetStepper();

  const history = useHistory();

  const increaseFlowerCount = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setFlowerCount(flower_count + 1);
  };

  const decreaseFlowerCount = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setFlowerCount(flower_count - 1);
  };

  const onFlowerDropdownChange = (flower: FlowerType) => {
    console.log('FLOWER~', flower);
    setReserve({ ...reserve, flower });
  };

  const onWrappingPaperDropdownChange = (wrappingPaper: WrappingPaperType) => {
    setReserve({ ...reserve, wrappingPaper });
  };

  const onRibbonDropdownChange = (ribbon: RibbonType) => {
    setReserve({ ...reserve, ribbon });
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      insertOrderData({
        bouquet,
        flower: reserve?.flower || null,
        flower_count: flower_count,
        wrappingPaper: reserve?.wrappingPaper?.name,
        ribbon: reserve?.ribbon?.name,
        resultPrice: resultPrice + bouquet.bouquet_paper_price,
        shop_id: bouquet.shops,
      }),
    );
  }, [reserve, flower_count, resultPrice, bouquet, dispatch]);

  return (
    <>
      <Block>
        <span>
          <img src={`${bouquet.img}`} style={{ width: '600px' }} alt="" />
        </span>

        <div>
          <div style={{ borderBottom: '1px solid lightgray' }}>
            <Typography type="H4" color={palette.color2} fontWeight="bold">
              {`${bouquet.name}`}
            </Typography>
          </div>
          <div style={{ borderBottom: '1px solid lightgray' }}>
            <Typography type="H7" color={palette.gray} fontWeight="medium">
              {`${bouquet.description}`}
            </Typography>
          </div>
          <tbody>
            <tr>
              <th>
                <div>
                  <Typography type="H6" color={palette.color4} fontWeight="bold">
                    꽃 선택
                  </Typography>
                </div>
              </th>
              <th>
                <div style={{ margin: '20px' }}>
                  <FlowerDropdown onFlowerDropdownChange={onFlowerDropdownChange} />
                </div>
              </th>
            </tr>
            <tr>
              <th>
                <Typography type="H6" color={palette.color4} fontWeight="bold">
                  꽃 수량 입력
                </Typography>
              </th>
              <th>
                <form>
                  <Typography type="H4" color={palette.black} fontWeight="bold">
                    {flower_count}
                  </Typography>
                  <button onClick={increaseFlowerCount}>+</button>&nbsp;
                  <button onClick={decreaseFlowerCount}>-</button>
                </form>
              </th>
            </tr>
            <tr>
              <th>
                <Typography type="H6" color={palette.color4} fontWeight="bold">
                  포장지 선택
                </Typography>
              </th>
              <th>
                <div style={{ margin: '20px' }}>
                  <WrappingPaperDropdown onWrappingPaperDropdownChange={onWrappingPaperDropdownChange} />
                </div>
              </th>
            </tr>
            <tr>
              <th>
                <Typography type="H6" color={palette.color4} fontWeight="bold">
                  리본선택
                </Typography>
              </th>
              <th>
                <div style={{ margin: '20px' }}>
                  <RibbonDropdown onRibbonDropdownChange={onRibbonDropdownChange} />
                </div>
              </th>
            </tr>
            <tr>
              <th>
                <Typography type="H6" color={palette.color4} fontWeight="bold">
                  금액
                </Typography>
              </th>
              <th>
                <Typography type="H6" color={palette.color4} fontWeight="light">
                  {resultPrice + bouquet.bouquet_paper_price}원
                </Typography>
              </th>
            </tr>
          </tbody>

          <ButtonWrapper>
            <Button color={palette.white} bgColor={palette.color3} onClick={() => history.goBack()}>
              뒤로가기
            </Button>

            <Link to={`/shop/${shop_id}/orderConfirm`} style={{ color: 'inherit', textDecoration: 'none' }}>
              <Button color={palette.white} bgColor={palette.color3}>
                주문하기
              </Button>
            </Link>
          </ButtonWrapper>
        </div>
      </Block>
    </>
  );
};

export default MakingBouquetStepper;

const Block = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
  & > span {
    margin: 20px;
  }
  & > :first-child {
    flex: 5;
  }

  & > :last-child {
    flex: 5;
  }
`;

// const FlowerCountPlusMinus = styled.span`
//   display: flex;
//   justify-content: center;
// `;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;

  Button {
    padding: 14px 50px;
    font-size: 1.5rem;
    color: inherit;
    outline: none;
    float: left;
    margin: 5px;
  }
`;
