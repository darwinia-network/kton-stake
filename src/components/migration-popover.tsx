"use client";
import { useState } from 'react';

import { cn } from '@/lib/utils';

import { Button } from './ui/button';

const title = "We are migrating";
const instruction = "Please migrate to new KTON Pool and get your gKTON reward. To migrate, please follow steps below:"
const stepContents = [`Step 1:Click \"Unstake\" button to unstake your KTON`, `Step 2:Click \"Stake in new pool\" button to stake your KTON`];
const buttonText = "Start Migration";

export default function MigrationPopover() {
    const [open, setOpen] = useState(true);

    return (
        open && <div className="absolute h-[360px] w-[480px] flex justify-center items-center rounded-[20px] bg-[#242A2E]">
            <div className='h-full w-full px-[20px] font-mono'>
                <h1 className='text-center font-extrabold py-[15px]'>{title}</h1>
                <div className='h-[1px] bg-[rgba(255,255,255,0.1)]'></div>
                <div className='py-[20px]'>
                    <p className='text-sm py-[10px]'>{instruction}</p>
                    {stepContents.map((content, index) => {
                        return <p className='text-center text-sm py-[10px] bg-[rgba(18,22,25)] mb-[10px]' key={index} style={{wordSpacing: '-3px', letterSpacing: '-0.5px'}}>{content}</p>
                    })}
                </div>
                <div className='h-[1px] bg-[rgba(255,255,255,0.1)]'></div>
                <Button onClick={() => setOpen(false)} type="submit" 
                    className={cn('font-extrabold mt-5 w-full rounded-[0.3125rem] text-[0.875rem] text-white')}
                >{buttonText}</Button>
            </div>
        </div>
    );
}
