import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import { Loading } from "../Loading";

interface ScreenShotButtonProps {
    screenshoot: string | null;
    onScreenshotTook: (screenshot: string | null) => void;

}

export function ScreenshotButton({onScreenshotTook, screenshoot}: ScreenShotButtonProps) {

    const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

    async function handleTakeScreenshot() {
        setIsTakingScreenshot(true)
        const canvas = await html2canvas(document.querySelector('html')!)
        const base64image = canvas.toDataURL('image/png')
        onScreenshotTook(base64image)
        setIsTakingScreenshot(false)
    }

    if (screenshoot) {
        return (
            <button type="button" className="padding-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors">
                <Trash weight="fill" style={{backgroundImage: `url(${screenshoot})`}} onClick={()=>onScreenshotTook(null)}/>
            </button>
        )
    }
    return (
        <button
         type="button" 
         className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors"
         onClick={handleTakeScreenshot}
         >
            {isTakingScreenshot ? (<Loading/>) : 
            <Camera className="w-6 h-6" />
            }
        </button>
    )
}