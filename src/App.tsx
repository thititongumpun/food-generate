import { useState } from 'react';
import { useQuery } from 'react-query';

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
    <div>Hello WOrld</div>
  );
}



export default App;
