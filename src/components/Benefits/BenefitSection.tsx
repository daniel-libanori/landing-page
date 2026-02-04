"use client"
import Image from "next/image";
import clsx from "clsx";
import { motion, Variants } from "framer-motion"

import BenefitBullet from "./BenefitBullet";
import SectionTitle from "../SectionTitle";
import { IBenefit } from "@/types";

interface Props {
    benefit: IBenefit;
    imageAtRight?: boolean;
}

const containerVariants: Variants = {
    offscreen: {
        opacity: 0,
        y: 100
    },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 0.9,
            delayChildren: 0.2,
            staggerChildren: 0.1,
        }
    }
};

export const childVariants = {
    offscreen: {
        opacity: 0,
        x: -50,
    },
    onscreen: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 1,
        }
    },
};

const BenefitSection: React.FC<Props> = ({ benefit, imageAtRight }: Props) => {
    const { title, description, imageSrc } = benefit;


    return (
        <div className={"w-[30%] min-h-32 mb-10 border-white border rounded-lg p-4 pb-10"}>
            <div className="flex flex-row justify-between items-center">
                <h4 className="font-medium text-white text-lg">{title}</h4>
                <div className="">
                    {imageSrc}
                </div>
            </div>
            <p className="mt-3 text-white/80 overflow-x-hidden text-md">{description}</p>
        </div>
    );
}

export default BenefitSection