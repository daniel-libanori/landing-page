"use client";
import React from 'react';
import { useGlobalContext } from '@/contexts';

interface StyleModalProps {
    isOpen?: boolean;
    onClose?: () => void;
}

const StyleModal: React.FC<StyleModalProps> = () => {
    const { styleSections, selectedStyleOptions, setSelectedStyleOptions } = useGlobalContext();
    const [isExpanded, setIsExpanded] = React.useState<boolean>(true);


    const goToPrevious = (sectionId: string, optionsLength: number) => {
        setSelectedStyleOptions(prev => ({
            ...prev,
            [sectionId]: (prev[sectionId] || 0) === 0 ? optionsLength - 1 : (prev[sectionId] || 0) - 1
        }));
    };
    
    const goToNext = (sectionId: string, optionsLength: number) => {
        setSelectedStyleOptions(prev => ({
            ...prev,
            [sectionId]: (prev[sectionId] || 0) === optionsLength - 1 ? 0 : (prev[sectionId] || 0) + 1
        }));
    };

    return (
        <div className={`w-64 ${isExpanded ? "h-[16.5rem]" : "h-10"} bg-white  fixed bottom-0 transition-all duration-300 ease-in-out right-0 flex flex-col items-center justify-between shadow-md  rounded-tl-lg`}>
            <div className='w-64 bg-white h-10 flex px-3 items-center justify-between shadow-md rounded-tl-lg'>
                <h1>Change Style</h1>
                <div className='-rotate-90 cursor-pointer' onClick={() => setIsExpanded(!isExpanded)}>{">"}</div>
            </div>
            { isExpanded &&
                <div className='h-56 w-64 overflow-y-auto'>
                    { styleSections.map((section) => {
                        const selectedIndex = selectedStyleOptions[section.id] || 0;
                       
                        return (
                            <div key={section.id} className="px-4 py-2 border-b flex flex-row justify-between items-center">
                                <p className="font-medium">{section.title}</p>
                                <div className="flex items-center justify-between">
                                    <button onClick={() => goToPrevious(section.id, section.options.length)} className="cursor-pointer text-lg">{"<"}</button>
                                    <span className="mx-4">{section.options[selectedIndex].name}</span>
                                    <button onClick={() => goToNext(section.id, section.options.length)} className="cursor-pointer text-lg">{">"}</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            }
        </div>
    )

};

export default StyleModal;