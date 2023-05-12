import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './typography';

const meta: Meta<typeof Typography> = {  
  title: '1 Tokens / Typography',
  component: Typography,

};

export default meta;
type Story = StoryObj<typeof Typography>;


//👇 Throws a type error it the args don't match the component props
export const Primary: Story = {  
  args: {
    text: "Example text",
  },
};