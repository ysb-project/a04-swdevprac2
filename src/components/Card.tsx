import Image from "next/image";
import styles from "@/components/card.module.css"

export default function Card({venueName,imgSrc} : {venueName : string,imgSrc : string}){
    return (
        <div className="
            w-[400px] h-[500px] bg-[#0B0C10] rounded-[20px] 
            border border-[#333333]
            shadow-[0_4px_8px_0_rgba(255,255,255,0.2),0_6px_20px_0_rgba(255,255,255,0.2)] 
            flex flex-col  gap-8
            items-center 
            overflow-hidden 
            transition-transform duration-300 ease-in-out 
            hover:-translate-y-[10px]
            hover:shadow-[0_10px_20px_rgba(255,255,255,0.5)] mt-auto
        ">
            <div className="w-[90%] h-[60%] relative overflow-hidden rounded-xl translate-y-[20px]">
                <Image src={imgSrc} 
                    alt="party-place"
                    fill={true}
                    objectFit="cover"
                />
            </div>
            <div className="p-[15px] mt-auto mb-10 h-[30%] flex-1 flex items-top justify-center pt-[30px]
                font-mono bg-gradient-to-b 
                from-[#F8E28F] via-[#C5A021] to-[#8A6628] 
                bg-clip-text text-transparent 
                text-[2em] font-bold ">
                {venueName}
            </div>
        </div>
    );
}