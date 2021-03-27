import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  flex-direction: column;
  border: 1px solid;

  img {
    height: 250px;
    width: 100%;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
    border: 1px;  
  }

  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;
  }
`;