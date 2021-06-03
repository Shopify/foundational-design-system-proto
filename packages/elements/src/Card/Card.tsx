import {styled} from '@polaris/themes';

const CardRoot = styled('div', {
  // Reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  font: 'inherit',
  lineHeight: '1',
  outline: 'none',
  padding: 0,
  textAlign: 'inherit',
  verticalAlign: 'middle',
  webkitTapHighlightColor: 'rgba(0, 0, 0, 0)',

  // Custom
  display: 'block',
  position: 'relative',
  flexShrink: 0,
  boxShadow: '$card',
  borderRadius: '$card',
  backgroundColor: '$surface',
  color: 'inherit',
});

const CardSection = styled('div', {
  padding: '$3',
  '&:not(:last-of-type)': {
    borderBottom: '1px solid $borderSubdued',
  },
});

export const Card = Object.assign(CardRoot, {
  Section: CardSection,
});
