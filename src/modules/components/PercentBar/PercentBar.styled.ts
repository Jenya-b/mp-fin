import styled from 'styled-components';

export interface WidthProps {
  maxWidth: number;
}

export const Wrapper = styled.div`
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.12);
  height: 26px;
  overflow: hidden;
  position: relative;
  border-radius: 2px;
`;

export const PercentText = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  line-height: 24px;
  justify-content: center;
`;

export const ColorBlock = styled.div.attrs<WidthProps>(({ maxWidth }) => ({
  style: {
    backgroundColor:
      maxWidth >= 70 ? '#088208a3' : maxWidth < 70 && maxWidth >= 40 ? '#efbb5aa3' : '#f44336',
    maxWidth: maxWidth + '%',
  },
}))<WidthProps>`
  height: 100%;
`;
