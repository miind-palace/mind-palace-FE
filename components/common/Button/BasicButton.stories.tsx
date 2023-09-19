import { StoryObj } from '@storybook/react'
import BasicButton from './BasicButton'

const meta = {
  title: 'Components/Common/Button/BasicButton',
  component: BasicButton,
}

export default meta
type Story = StoryObj<typeof BasicButton>

export const Default: Story = {
  args: {
    onClick: () => alert('Clicked!'),
    children: <span>Basic Button</span>,
  },
}
