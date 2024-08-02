import dynamic from 'next/dynamic';

import { PoolProvider } from '@/providers/pool-provider';
import KTONPoolLoading from '@/components/kton-pool-loading';

import type { PropsWithChildren } from 'react';
import CenteredPopover from '@/components/ui/popover';


const KTONPool = dynamic(() => import('@/components/kton-pool'), {
  ssr: false,
  loading: () => <KTONPoolLoading />
});

const DefiLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex h-full w-full items-center justify-center px-10 ">
      <PoolProvider>
        <div className="container flex flex-col items-center justify-center gap-5 rounded-[1.25rem] bg-[#242A2E] p-5 sm:w-[25rem]">
          <KTONPool />
          {children}
        </div>
      </PoolProvider>
      <CenteredPopover/>
      {/* <div className="absolute-popover-container"
      style={{
        height: '300px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: '20%',
        top: '20%',
        minWidth: '400px',
        backgroundColor: 'rebeccapurple'
      }}
    >
       test
      </div> */}
    </div>
  );
};

export default DefiLayout;
