import type { Meta, StoryObj } from '@storybook/react';
import { Colors } from './colors';

const meta: Meta<typeof Colors> = {  
  title: '1 Tokens / Colors',
  component: Colors,
};

export default meta;
type Story = StoryObj<typeof Colors>;

//👇 Throws a type error it the args don't match the component props
export const Base: Story = {
  render: () => <Colors />,

  args: {    
  },
};