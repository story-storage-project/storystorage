import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import Text from '../../atoms/Text';
import ImageIcon from '../../atoms/ImageIcon';
import { uiTheme } from '../../../store/globalState';

export default function Footer() {
  const theme = useRecoilValue(uiTheme);
  return (
    <FooterStyled>
      <Wrapper>
        <Text textColor={theme === 'lightTheme' ? 'darkGray' : 'lightGray'}>
          Story Storage by alex © 2022
        </Text>{' '}
        <ImageIcon
          icon="GitHub-Mark-32px"
          alt="github-logo"
          pointer
          border
          invert={theme !== 'lightTheme'}
        />
      </Wrapper>
    </FooterStyled>
  );
}

const FooterStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5rem 5rem 5rem 0;

  width: 100%;
  height: 50px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 15rem 0 0;

  @media ${props => props.theme.viewSize.laptopHalf} {
    margin: 0 7rem 0 0;
  }

  @media ${props => props.theme.viewSize.tablet} {
    margin: 1rem;
  }
`;
