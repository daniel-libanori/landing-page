"use client";
import React from 'react';

interface StyleModalProps {
    isOpen?: boolean;
    onClose?: () => void;
}

const StyleModal: React.FC<StyleModalProps> = () => {

    const [isExpanded, setIsExpanded] = React.useState<boolean>(true);
    const [selectedIndexes, setSelectedIndexes] = React.useState<{[key: number]: number}>({});

    const arr = [
        {
            title: "Header",
            options: [
                { name: "1", component: <></>, value: 1},
                { name: "2", component: <></>, value: 2},
                { name: "3", component: <></>, value: 3}
            ]
        }
    ]

    const goToPrevious = (sectionIndex: number, optionsLength: number) => {
        setSelectedIndexes(prev => ({
            ...prev,
            [sectionIndex]: (prev[sectionIndex] || 0) === 0 ? optionsLength - 1 : (prev[sectionIndex] || 0) - 1
        }));
    };
    
    const goToNext = (sectionIndex: number, optionsLength: number) => {
        setSelectedIndexes(prev => ({
            ...prev,
            [sectionIndex]: (prev[sectionIndex] || 0) === optionsLength - 1 ? 0 : (prev[sectionIndex] || 0) + 1
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
                    { arr.map((section, index) => {
                        const selectedIndex = selectedIndexes[index] || 0;
                       
                        return (
                            <div key={index} className="px-4 py-2 border-b flex flex-row justify-between items-center">
                                <p className="font-medium">{section.title}</p>
                                <div className="flex items-center justify-between">
                                    <button onClick={() => goToPrevious(index, section.options.length)} className="cursor-pointer text-lg">{"<"}</button>
                                    <span className="mx-4">{section.options[selectedIndex].name}</span>
                                    <button onClick={() => goToNext(index, section.options.length)} className="cursor-pointer text-lg">{">"}</button>
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