import {Foods} from '../../App';
import {Wrapper} from './foods.style';
import { Button } from '@material-ui/core';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
interface Props {
  food: Foods;
}

const FoodItem: React.FC<Props> = ({food}) => (
  <Wrapper>
    <img src={food.imageData} alt={food.foodName} />
    <div>
      <h3>Food Name: {food.foodName}</h3>
      <p>Liked: {food.liked}</p>
      <Button
        size="small"
        disableElevation
        variant="contained"
      >
        <FavoriteTwoToneIcon />
      </Button>
    </div>
  </Wrapper>
);

export default FoodItem;