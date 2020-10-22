import React from 'react';
import styled from 'styled-components';
// import { useParams } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import Typography from '../common/Typography';
import { BouquetType } from '../flowerImg/Bouquet';
import { FlowerType } from '../flowerImg/Flower';
import useMakingFlowerStepper from './hooks/useMakingFlowerStepper';
import { WrappingPaperType } from '../flowerImg/WrappingPaper';
import { RibbonType } from '../flowerImg/Ribbon';
import { BouquetDropdown } from '../Dropdown/BouquetDropdown';
import { WrappingPaperDropdown } from '../Dropdown/WrappingPaperDropdown';
import { RibbonDropdown } from '../Dropdown/RibbonDropdown';
import Button from '../common/Button';
import { Link, useHistory } from 'react-router-dom';

type FlowerStepperProps = {
  flower: FlowerType;
  shop_id: string;
};

const MakingFlowerStepper: React.FC<FlowerStepperProps> = ({
  flower,
  shop_id,
}) => {
  // const { id } = useParams<{ id: string }>();
  // const [bouquet, setBouquet] = useState<BouquetType>();
  const {
    flower_count,
    setFlowerCount,
    setReserve,
    resultPrice,
    reserve,
  } = useMakingFlowerStepper();

  const history = useHistory();

  const increaseFlowerCount = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setFlowerCount(flower_count + 1);
  };

  const decreaseFlowerCount = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setFlowerCount(flower_count - 1);
  };

  const onBouquetDropdownChange = (bouquet: BouquetType) => {
    setReserve({ ...reserve, bouquet });
  };

  const onWrappingPaperDropdownChange = (wrappingPaper: WrappingPaperType) => {
    setReserve({ ...reserve, wrappingPaper });
  };

  const onRibbonDropdownChange = (ribbon: RibbonType) => {
    setReserve({ ...reserve, ribbon });
  };

  // const dispatch = useDispatch();

  return (
    <>
      <Block>
        <span>
          <img src={`${flower?.img}`} style={{ width: '600px' }} alt="" />
        </span>

        <div>
          <div style={{ borderBottom: '1px solid lightgray' }}>
            <Typography type="H4" color={palette.color2} fontWeight="bold">
              {`${flower?.name}`}
            </Typography>
          </div>
          <div style={{ borderBottom: '1px solid lightgray' }}>
            <Typography type="H7" color={palette.gray} fontWeight="medium">
              {`${flower?.description}`}
            </Typography>
          </div>
          <tbody>
            <tr>
              <th>
                <div>
                  <Typography
                    type="H6"
                    color={palette.color4}
                    fontWeight="bold"
                  >
                    꽃다발 선택
                  </Typography>
                </div>
              </th>
              <th>
                <div style={{ margin: '20px' }}>
                  <BouquetDropdown
                    onBouquetDropdownChange={onBouquetDropdownChange}
                  />
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
                  <WrappingPaperDropdown
                    onWrappingPaperDropdownChange={
                      onWrappingPaperDropdownChange
                    }
                  />
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
                  <RibbonDropdown
                    onRibbonDropdownChange={onRibbonDropdownChange}
                  />
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
                  {resultPrice + flower?.price * flower_count}원
                </Typography>
              </th>
            </tr>
          </tbody>

          <ButtonWrapper>
            <Button
              color={palette.white}
              bgColor={palette.color3}
              onClick={() => history.goBack()}
            >
              뒤로가기
            </Button>

            <Link
              to={`/shop/${shop_id}/orderConfirm`}
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
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

export default MakingFlowerStepper;

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
