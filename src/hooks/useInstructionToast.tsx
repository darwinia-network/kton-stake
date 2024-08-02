import { useEffect, useRef } from "react";
import { toast } from "sonner";

export function useInstructionToast() {
    const toastRef = useRef<string | number | null>(null);

    useEffect(() => {
        toastRef.current = toast("instruction toast", {
        classNames: {
            toast: 'group-[.toaster]:border-red-500',
            closeButton: 'group-[.toast]:bg-red-500 group-[.toast]:border-red-500'
        }
              
        })
    })
}