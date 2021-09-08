import {Properties} from 'csstype';

export const mapToProperty =
  <T extends keyof Properties<string | number>>(property: T) =>
  (value: string | number) => {
    const styleRule = {[property]: value};

    return styleRule;
  };
