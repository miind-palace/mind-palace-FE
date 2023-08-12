import { Meta, StoryObj } from '@storybook/react'
import Input, { InputColor } from './Input'
import { SecurityIcon } from '../../Icons'

const meta: Meta<typeof Input> = {
  title: 'Components/Common/Input',
  component: Input,
  argTypes: {
    colorType: {
      options: InputColor,
      control: { type: 'radio' },
    },
    value: {
      control: { type: 'text' },
    },
  },
}

export default meta
type Story = StoryObj<typeof Input>

export const Gray: Story = {
  args: {
    inputLabel: 'Input 제목',
    placeholder: '내용을 입력해주세요',
    colorType: 'GRAY',
  },
}

export const PenetratedWhite: Story = {
  args: {
    inputLabel: 'Input 제목',
    placeholder: '내용을 입력해주세요',
    colorType: 'PENETRATED_WHITE',
  },
}

export const PenetratedBlack: Story = {
  args: {
    inputLabel: 'Input 제목',
    placeholder: '내용을 입력해주세요',
    colorType: 'PENETRATED_BLACK',
  },
}

export const WithIcon: Story = {
  args: {
    inputLabel: 'Input 제목',
    placeholder: '내용을 입력해주세요',
    colorType: 'PENETRATED_BLACK',
    svgIcon: <SecurityIcon width="16" height="17" color="white" />,
  },
}
