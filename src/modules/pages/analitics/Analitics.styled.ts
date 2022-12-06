import styled from 'styled-components';

export const IframeWrapper = styled.div`
  margin-top: 40px;
  width: 100%;
  height: 100vh;
  max-height: 745px;
  overflow: hidden auto;
  position: relative;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE и Edge */
  scrollbar-width: none; /* Firefox */
`;
export const Iframe = styled.iframe`
  width: 100%;
  position: absolute;
  top: -250px;
  left: -272px;
  height: 995px;
`;
