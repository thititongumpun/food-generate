import { useState } from 'react';
import { useQuery } from 'react-query';

import FoodItem from './components/foods/foods';

import { ThemeProvider } from 'styled-components';
import { useTheme } from './Theme';
import Grid from '@material-ui/core/Grid';
import { LinearProgress } from '@material-ui/core';

import {Wrapper, Button} from './App.styles';
import { ResponsiveDrawer } from './components/drawer/drawer';

export interface Foods {
  id: number;
  foodName: string;
  liked: number;
  imageData: string;
}

const getFoods = async (): Promise<Foods[]> => {
  return await (await (fetch('https://foodgenerateapi.herokuapp.com/api/foods'))).json();
}

const App: React.FC = () => {
  const theme = useTheme();

  const { data, isLoading, error } = useQuery<Foods[]>(
    'foods',
    getFoods
  )
  console.log(data);

  if(error) return <div>....error.....</div>
  if(isLoading) return <LinearProgress />;
  
  return (
    <ThemeProvider theme={{ mode: theme.mode }}>
      <Wrapper>
        <div className="buttons">
        <Button onClick={() => theme.toggle()}>
          {theme.mode === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </Button>
        </div>
        <Grid container spacing={3}>
          {data?.map((food) => (
            <Grid item key={food.id} xs={12} sm={4}>
              {/* <FoodItem food={food} /> */}
              <ResponsiveDrawer food={food}/>
            </Grid>
          ))}
        </Grid>
      </Wrapper>
    </ThemeProvider>
  );
}



export default App;
