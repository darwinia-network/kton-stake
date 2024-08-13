"use client";
import { useState } from 'react';
import { Button } from './button';
import { cn } from '@/lib/utils';

const stepContents = [`Step 1:Click \"Unstake\" button to unstake your KTON`, `Step 2:Click \"Stake in new pool\" button to stake your KTON`];

export default function CenteredPopover() {
    const [open, setOpen] = useState(true);

    return (
        open && <div className="absolute h-[360px] w-[480px] flex justify-center items-center rounded-[20px] bg-[#242A2E]">
            <div className='h-full w-full px-[20px] font-mono'>
                <h1 className='text-center font-bold py-[15px]'>We are migrating</h1>
                <div className='h-[1px] bg-[rgba(255,255,255,0.1)]'></div>
                <div className='py-[20px] tracking-tight'>
                    <p className='text-sm py-[10px]'>Please migrate to new KTON Pool and get your <a>gKTON</a> reward. To migrate, please follow steps below:</p>
                    {stepContents.map((content, index) => {
                        return <p className='text-center text-sm py-[10px] bg-[rgba(18,22,25)] mb-[10px]' key={index}>{content}</p>
                    })}
                </div>
                <Button
                    onClick={() => setOpen(false)}
                    type="submit"
                    className={cn('mt-5 w-full rounded-[0.3125rem] text-[0.875rem] text-white')}
                >Start Migration
                </Button>
            </div>

        </div>
    );
    //     <div className="absolute-popover-container"
    //     //   style={{
    //     //     height: '100vh',
    //     //     display: 'flex',
    //     //     justifyContent: 'center',
    //     //     alignItems: 'center',
    //     //     position: 'absolute',
    //     //     left: '50%'
    //     //   }}
    //     >
    //       <Popover.Root open={open}>
    //         <Popover.Portal >
    //           <Popover.Content 
    //             sideOffset={5}
    //             style={{
    //               padding: '16px',
    //               backgroundColor: 'white',
    //               borderRadius: '4px',
    //               boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)',
    //               position: 'absolute',
    //               zIndex: 1000, // Ensure the popover is on top
    //               top: '50%',
    //               left: '50%',
    //               transform: 'translate(-50%, -50%)',
    //               minWidth: '400px',
    //               minHeight: '300px',
    //               textAlign: 'center',
    //             }}
    //           >
    //             <div>
    //                 <p>Please migrate to new Kton Pool and get your <a>gKton</a> reward.</p>
    //                 <p>To migrate, please follow steps below: </p>
    //                 <p>Step 1: Click WithDraw button to unstake your Kton</p>
    //                 <p>Step 2: Click Stake in new Pool button to stake your Kton</p>
    //             </div>
    //             <button onClick={()=>setOpen(false)} style={{ padding: '8px 16px', cursor: 'pointer', position: 'relative' }}>
    //             Start Migration
    //           </button>

    //             <Popover.Arrow style={{ fill: 'white' }} />
    //           </Popover.Content>
    //         </Popover.Portal>
    //       </Popover.Root>
    //     </div>
    //   );
}
