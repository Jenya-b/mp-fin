import styled from 'styled-components';
import { PrimaryInput, SecondaryButton } from 'styles/components';
import { fontStylesCaption } from 'styles/typography';

export const Wrapper = styled.div`
  margin-top: 60px;
  max-width: 1090px;
  width: 100%;
  display: grid;
  grid-template: repeat(2, auto) / 280px 1fr;
  row-gap: 30px;

  @media (${({ theme }) => theme.media.large}) {
    grid-template: repeat(2, auto) / 180px 1fr;
  }

  @media (${({ theme }) => theme.media.small}) {
    margin-top: 20px;
    grid-template: 100px 1fr / 1fr;
    row-gap: 15px;
  }
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 30px;
  row-gap: 25px;

  @media (${({ theme }) => theme.media.medium}) {
    grid-template-columns: 1fr;
    row-gap: 15px;
  }

  @media (${({ theme }) => theme.media.small}) {
    row-gap: 10px;
  }
`;

export const Input = styled(PrimaryInput)`
  background: ${({ theme }) => theme.colors.backgroundPrimary};
  margin-top: 5px;
`;

export const Label = styled.label`
  ${fontStylesCaption}
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const InputFileWrapp = styled.div`
  grid-row: 1/3;
  overflow: hidden;
  width: ${({ theme }) => theme.sizes.settingInputFile.width}px;
  height: ${({ theme }) => theme.sizes.settingInputFile.height}px;
  border-radius: 50%;
  position: relative;

  @media (${({ theme }) => theme.media.large}) {
    width: 130px;
    height: 130px;
  }

  @media (${({ theme }) => theme.media.small}) {
    grid-row: 1/2;
    width: 100px;
    height: 100px;
    justify-self: center;
  }
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

export const PersonalDataButton = styled(SecondaryButton)`
  grid-column: 1/2;
  grid-row: 4/5;

  @media (${({ theme }) => theme.media.medium}) {
    grid-row: 6/7;
  }
`;

export const AdditionalButton = styled(SecondaryButton)`
  grid-column: 1/2;
  grid-row: 2/3;
`;
