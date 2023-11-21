import { ArrowLeft } from "phosphor-react";
import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";
import { ScreenshotButton } from "./ScreenshotButton";
import { FormEvent, useState } from "react";


interface FeedbackContentStepProps {
    feedbackType: FeedbackType;
    onFeedbackRestartRequested: () => void
    onFeedbackSent: () => void
}


export function FeedbackContentStep({ feedbackType, onFeedbackRestartRequested, onFeedbackSent }: FeedbackContentStepProps) {
    const feedbackTypeInfo = feedbackTypes[feedbackType]
    const [screenshoot, setScreenshot] = useState<string | null>(null)
    const [comment, setComment] = useState('')

    function handleSubmitFeedback(e: FormEvent) {
        e.preventDefault();
        comment
        onFeedbackSent()
    }

    return (
        <>
            <header>
                <button type="button" className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100" onClick={onFeedbackRestartRequested}>
                    <ArrowLeft weight="bold" className="w-4 h-4" />
                </button>
                <span className="text-xl leading-6 items-center gap-2" > {feedbackTypeInfo.title} </span>

                <CloseButton />
            </header>

            <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
                <textarea onChange={e => setComment(e.target.value)} className="min-w-[304px] w-full min-h[112px] text-sm placeholder:-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus: ring-brand-500 focus:ring-1 resize-none focus:outline-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin" placeholder="Conte o que aconteceu...">

                </textarea>
                <footer className="flex gap-2 mt-2">
                    <ScreenshotButton
                        screenshoot={screenshoot}
                        onScreenshotTook={setScreenshot} />


                    <button disabled={comment.length === 0} type="submit" className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500" >
                        Enviar feedback
                    </button>
                </footer>

            </form>
        </>
    )
}