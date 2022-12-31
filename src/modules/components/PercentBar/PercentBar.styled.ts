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
      maxWidth >= 70
        ? 'rgb(8 130 8 / 35%)'
        : maxWidth < 70 && maxWidth >= 30
        ? 'rgb(239 187 90 / 35%)'
        : 'rgb(244 67 54 / 35%)',
    maxWidth: maxWidth + '%',
  },
}))<WidthProps>`
  height: 100%;
`;
