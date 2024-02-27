'use client';
import { useDisconnect } from 'wagmi';
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import Button from '@/components/ghost-button';
import { toShortAddress } from '@/utils';

type AccountProps = {
  address: string;
};
const Account = ({ address }: AccountProps) => {
  const { disconnect } = useDisconnect();

  return address ? (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          <Jazzicon
            diameter={24}
            seed={jsNumberForAddress(address)}
            svgStyles={{
              borderRadius: '50%'
            }}
          />
          <span>{toShortAddress(address)?.toUpperCase()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[10rem] gap-[0.625rem] rounded-[0.3125rem] border border-primary p-[0.625rem]">
        <DropdownMenuItem
          className=" cursor-pointer p-[0.625rem] focus:bg-[rgba(94,214,42,.1)] "
          onClick={() => {
            disconnect();
          }}
        >
          Disconnect
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ) : null;
};
export default Account;
