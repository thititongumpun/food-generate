import styled from 'styled-components';
// icons here
import * as themeConf from './Theme/theme';

export const Wrapper = styled.div`
  display: flex;
  background-color: ${themeConf.backgroundColor};
  color: ${themeConf.textColor};
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  background: ${themeConf.buttonBackgroundColor};
  border: 1px solid;
  border-radius: 0.3em;
  box-shadow: none;
  color: ${themeConf.buttonTextColor};
  cursor: pointer;
  font-size: 1em;
  padding: 0.5em 1em;
;`