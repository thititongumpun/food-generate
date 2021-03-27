import { useState } from 'react';
import { useQuery } from 'react-query';

import FoodItem from './components/foods/foods';

import Grid from '@material-ui/core/Grid';

import {Wrapper} from './App.styles';
export interface Foods {
  id: number;
  foodName: string;
  review: number;
  imageData: string;
}

const getFoods = async (): Promise<Foods[]> => {
  return await (await (fetch('https://foodgenerateapi.herokuapp.com/api/foods'))).json();
}

const App = () => {
  const { data, isLoading, error } = useQuery<Foods[]>(
    'foods',
    getFoods
  )
  console.log(data);
  
  return (
    <Wrapper>
      <Grid container spacing={3}>
        {data?.map((food) => (
          <Grid item key={food.id} xs={12} sm={4}>
            <FoodItem food={food} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}



export default App;
