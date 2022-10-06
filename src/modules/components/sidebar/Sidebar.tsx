import styled from 'styled-components';

export const Sidebar = () => <Aside></Aside>;

const Aside = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ theme }) => theme.sizes.sidebar.widthActive}px;
  height: 100%;
  background: ${({ theme }) => theme.colors.sidebar};
`;
