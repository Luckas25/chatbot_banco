import { Tooltip as ChakraTooltip } from '@chakra-ui/react';
import * as React from 'react';

export const Tooltip = React.forwardRef(function Tooltip(props, ref) {
  return <ChakraTooltip ref={ref} {...props} />;
});