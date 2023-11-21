import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackTypeProps {
    onFeedbackTypeChanged: (type: FeedbackType) => void
}

export function FeedbackTypeStep(props: FeedbackTypeProps) {
    return (
        <>
            <header>
                <span className="text-xl leading-6">
                    Deixe seu feedback
                    <CloseButton />
                </span>
            </header><div className="flex py-8 gap-2 w-full">
                {Object.entries(feedbackTypes).map(([key, item]) => {
                    return (
                        <button key={key} className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center border-2 border-transparent hover:border-brand-500 focus:border-brand-500 "
                            onClick={() => props.onFeedbackTypeChanged(key as FeedbackType)}
                            type="button"
                        >
                            <span>
                                {item.title}
                            </span>
                        </button>
                    );
                })}
            </div>
        </>
    )
}