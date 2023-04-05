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
        ? 'rgba(8, 130, 8, 0.35)'
        : maxWidth < 70 && maxWidth >= 30
        ? 'rgba(239, 187, 90, 0.35)'
        : 'rgba(244, 67, 54, 0.35)',
    maxWidth: maxWidth + '%',
  },
}))<WidthProps>`
  height: 100%;
`;
