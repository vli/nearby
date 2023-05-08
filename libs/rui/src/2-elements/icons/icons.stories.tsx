import type { Meta, StoryObj } from '@storybook/react';
import { Icons } from './icons';

const meta: Meta<typeof Icons> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: '2 Elements / Icons',
  component: Icons,

};

export default meta;
type Story = StoryObj<typeof Icons>;

//👇 Throws a type error it the args don't match the component props
export const Primary: Story = {
  render: () => <Icons />,

  args: {
    label: 'Button',
  },
};
