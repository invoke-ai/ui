import { PiArrowSquareOutBold } from 'react-icons/pi';

import { Icon } from '../../chakra-re-exports';
import type { LinkProps } from '.';
import { Link } from '.';

export type ExternalLinkProps = Omit<LinkProps, 'isExternal' | 'children'> & { label: string };

export const ExternalLink = ({ label, ...rest }: ExternalLinkProps) => {
  return (
    <Link isExternal {...rest} display="flex" alignItems="center">
      {label}
      <Icon display="inline" verticalAlign="middle" marginInlineStart={2} as={PiArrowSquareOutBold} />
    </Link>
  );
};
