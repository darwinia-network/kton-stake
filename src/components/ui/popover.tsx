"use client";
import * as Popover from '@radix-ui/react-popover';
import { useEffect, useState } from 'react';
import './popover.css';
import { Button } from './button';
import { cn } from '@/lib/utils';
//import '../loading/index.css';

export default function CenteredPopover() {
    const [open, setOpen] = useState(true);

    // useEffect(()=> {
    //     setTimeout(()=>{
    //         setOpen(true);
    //     }, 1000)
    // },[]);

    return (
        open && <div className="absolute-popover-container"
            style={{
            height: '300px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            left: '20%',
            top: '20%',
            minWidth: '400px',
            backgroundColor: 'rebeccapurple',
            borderRadius: '4px',
            boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)'
            }}
        >
            <div>
                 <p>Please migrate to new Kton Pool and get your <a>gKton</a> reward.</p>
                 <p>To migrate, please follow steps below: </p>
                 <p>Step 1: Click WithDraw button to unstake your Kton</p>
                 <p>Step 2: Click Stake in new Pool button to stake your Kton</p>
                 <Button
                    onClick={() => setOpen(false)}
                    type="submit"
                    className={cn('mt-5 w-full rounded-[0.3125rem] text-[0.875rem] text-white')}
                >Start Migration
                </Button>
             </div>
             
        </div>
    );
//   return (
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
