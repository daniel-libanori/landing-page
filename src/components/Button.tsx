import React from 'react'
import clsx from 'clsx'

import { ctaDetails } from '@/data/cta'

const Button = ({ dark, topText = "", mainText = "", svgIcon }: { dark?: boolean, topText?: string, mainText?: string, svgIcon?: React.ReactNode }) => {
    return (
        <a href={ctaDetails.googlePlayUrl}>
            <button
                type="button"
                className={clsx("flex items-center justify-center min-w-[205px] mt-3 px-6 h-14 rounded-full w-full sm:w-fit", { "text-white bg-foreground": dark, "text-foreground bg-white": !dark })}
            >
                { svgIcon &&
                    <div className="mr-3">
                        {svgIcon}
                    </div>
                }
                <div>
                    {topText && 
                        <div className="text-xs">
                            {topText}
                        </div>
                    }
                    <div className="-mt-1 font-sans text-xl font-semibold">
                        {mainText}
                    </div>
                </div>
            </button>
        </a>
    )
}

export default Button