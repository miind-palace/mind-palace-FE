import styled from '@emotion/styled'
import { InputColorType } from './Input'

export const StyledBox = styled.div`
  position: relative;
`

const getBackgroundColor = (colorType: InputColorType) => {
  if (colorType === 'PENETRATED_BLACK') return 'rgba(0, 0, 0, 0.6)'
  if (colorType === 'PENETRATED_WHITE') return 'rgba(255, 255, 255, 0.6)'
  if (colorType === 'GRAY') return '#F0F0F0'
}

const getOutline = (colorType: InputColorType) => {
  if (colorType === 'PENETRATED_BLACK') return '1px solid #333333'
  if (colorType === 'PENETRATED_WHITE') return '1px solid #DDDDDD'
  if (colorType === 'GRAY') return '1px solid #999999'
}

const getColor = (colorType: InputColorType) => {
  if (colorType === 'PENETRATED_BLACK') return '#ffffff'
  if (colorType === 'PENETRATED_WHITE') return '#000000'
  if (colorType === 'GRAY') return '#333333'
}

export const StyledInput = styled.input`
  background: ${({ colorType }: { colorType: InputColorType }) => getBackgroundColor(colorType)};
  border: 1px solid transparent;
  width: 100%;
  font-size: 14px;
  padding: 32px 15px 12px;
  border-radius: 5px;
  color: ${({ colorType }: { colorType: InputColorType }) => getColor(colorType)};

  &:focus {
    outline: ${({ colorType }: { colorType: InputColorType }) => getOutline(colorType)};
    box-shadow: 0px 0px 10px 0 rgba(0, 0, 0, 0.2);
  }

  &:active {
    outline: ${({ colorType }: { colorType: InputColorType }) => getOutline(colorType)};
    box-shadow: 0px 0px 10px 0 rgba(0, 0, 0, 0.2);
  }
`

export const StyledLabel = styled.label``

export const StyledSpan = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  color: #bbbbbb;
  font-size: 12px;
  top: 10px;
  left: 15px;
`

export const Icon = styled.div`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
`
