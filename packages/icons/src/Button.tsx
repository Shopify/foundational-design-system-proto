import React, {HTMLAttributes} from 'react';

export const Button = (props: HTMLAttributes<HTMLButtonElement>) => (
  <button type="button" {...props} />
);
