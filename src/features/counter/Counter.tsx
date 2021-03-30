import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../hook';

import { decrement, increment } from './counterSlice';

export const Counter = () => {
  const count = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();
}