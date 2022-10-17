import styled from 'styled-components';
import { Input } from '../../../styles/components';
import { fontStylesCaption } from '../../../styles/typography';

export const SettingsForm = styled.form`
  margin-top: 60px;
  max-width: 1090px;
  width: 100%;
  display: grid;
  grid-template-columns: 280px 1fr;
`;
export const PostPicture = styled.div``;
export const InputsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 30px;
  row-gap: 25px;
`;
export const SecondaryInput = styled(Input)`
  background: ${({ theme }) => theme.colors.inputSettingsFormBg};
  margin-top: 5px;
`;
export const Label = styled.label`
  ${fontStylesCaption}
  color: ${({ theme }) => theme.colors.labelSettingsFormText};
`;

export const InputFileWrapp = styled.div`
  overflow: hidden;
  width: ${({ theme }) => theme.sizes.settingInputFile.width}px;
  height: ${({ theme }) => theme.sizes.settingInputFile.height}px;
  border-radius: 50%;
  position: relative;
`;
export const InputFile = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: ${({ theme }) => theme.order.settingInputFile};
  opacity: 0;
  cursor: ${({ theme }) => theme.cursor};
`;
export const LogoImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: ${({ theme }) => theme.order.settingLogo};
  object-fit: cover;
`;

export const ControlWrapper = styled.div`
  grid-column: 1/2;
  grid-row: 4/5;
  padding-top: 10px;
`;
