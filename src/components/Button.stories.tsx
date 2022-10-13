import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from "./Button";

export default {
  title: 'Component/Button',
  component: Button,
  args: {
    children: 'Button'
  }
} as Meta<ButtonProps>

export const Deafult: StoryObj<ButtonProps> = {}