import {Foods} from '../../App';
import {Wrapper} from './foods.style';

interface Props {
  food: Foods;
}

const FoodItem: React.FC<Props> = ({food}) => (
  <Wrapper>
    <img src={food.imageData} alt={food.foodName} />
    <div>
      <h3>{food.foodName}</h3>
      <p>Score: {food.review}</p>
    </div>
  </Wrapper>
);

export default FoodItem;