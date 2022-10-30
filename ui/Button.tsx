import React from 'react';
import {clsx} from 'clsx';

type Variant = 'primary' | 'secondary'

interface Props {
  variant: Variant;
  text: string;
}

const Button = (props: Props) => {
  return (
    <div className="bg-light text-dark px-10 py-2 cursor-pointer rounded-full hover:scale-105 transition-all">{props.text}</div>
  )
}

export default Button