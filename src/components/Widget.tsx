import { ChatTeardropDots } from "phosphor-react";
import { Popover } from "@headlessui/react";
import { WidgetForm } from "./WidgetForm";
import ReactGA from 'react-ga4';

interface WidgetProps {
    onButtonClick: () => void;
}

export function Widget({ onButtonClick }: WidgetProps) {
    const trackFeedbackButtonClick = () => {
        ReactGA.event({
            category: 'Feedback',
            action: 'Clicar no botão de feedback',
            label: 'Botão Feedback da Widget',
        });
        onButtonClick();
    };

    return (
        <Popover className="absolute bottom-4 right-4 flex flex-col items-end">
            <Popover.Panel>
                <WidgetForm />
            </Popover.Panel>
            <Popover.Button
                className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group"
                onClick={trackFeedbackButtonClick}
            >
                <ChatTeardropDots className="w-6 h-6" />
                <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-700 ease-linear">
                    <span>Feedback</span>
                </span>
            </Popover.Button>
        </Popover>
    );
}
