import { Meta, StoryObj } from '@storybook/react'
import Spacing, { SpacingDirection, SpacingDirectionType } from './Spacing'
import { PropsWithChildren } from 'react'

interface WrapperProps {
  direction: SpacingDirectionType
}

const Wrapper = ({ children, direction }: PropsWithChildren<WrapperProps>) => {
  const flexDirection = direction === SpacingDirection.horizontal ? 'row' : 'column'
  return (
    <div style={{ display: 'flex', flexDirection, border: '1px solid red' }}>
      <div style={{ background: '#EEEEEE', border: '1px solid #DDDDDD', padding: 20 }}>박스1</div>
      {children}
      <div style={{ background: '#EEEEEE', border: '1px solid #DDDDDsD', padding: 20 }}>박스2</div>
    </div>
  )
}

const meta: Meta<typeof Spacing> = {
  title: 'Components/Common/Spacing',
  component: Spacing,
  argTypes: {
    direction: {
      options: SpacingDirection,
      control: { type: 'radio' },
    },
  },
}

export default meta
type Story = StoryObj<typeof Spacing>

export const Default: Story = {
  render: (args) => (
    <Wrapper direction={args.direction || 'vertical'}>
      <Spacing {...args} />
    </Wrapper>
  ),
  args: {
    size: 100,
  },
}

export const Horizontal: Story = {
  render: (args) => (
    <Wrapper direction={args.direction || 'vertical'}>
      <Spacing {...args} />
    </Wrapper>
  ),
  args: {
    size: 100,
    direction: 'horizontal',
  },
}

export const Vertical: Story = {
  render: (args) => (
    <Wrapper direction={args.direction || 'vertical'}>
      <Spacing {...args} />
    </Wrapper>
  ),
  args: {
    size: 100,
    direction: 'vertical',
  },
}
