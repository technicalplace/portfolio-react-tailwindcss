import type { Meta, StoryObj } from '@storybook/react';
import { ToHomeButton } from './ToHomeButton';

const meta = {
  title: 'components/Application/ToHomeButton',
  component: ToHomeButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof ToHomeButton>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Home',
  },
};

export const Secondary: Story = {
  args: {
    primary: false,
    label: 'BackHome',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Home'
  }
}
export const Large: Story = {
  args: {
    size: 'large',
    label: 'Home'
  }
}
