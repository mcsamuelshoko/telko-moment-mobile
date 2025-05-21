import React from 'react';


export interface ButtonProps {
  prop?: string;
}

export function Button({prop = 'default value'}: ButtonProps) {
  return <button className={"bg-green-500 rounded-sm p-1 px-2"}>{prop ?? "Button"}</button>;
}
