import BenefitSection from "./BenefitSection"

import { benefits } from "@/data/benefits"

const Benefits: React.FC = () => {
    return (
        <div id="features" className="mt-20">
            <h2 className="sr-only">Benefits</h2>
            <div className="flex flex-row justify-evenly gap-2 flex-wrap">
                {benefits.map((item, index) => {
                    return <BenefitSection key={index} benefit={item} imageAtRight={index % 2 !== 0} />
                })}
            </div>
        </div>
    )   
}

export default Benefits