
import Image from "next/image";
import Link from "next/link";
import {RiPresentationFill} from 'react-icons/ri'
import {BiSolidVideoRecording} from 'react-icons/bi'

const Box = () => {

 
    return ( 

    <div className=" flex justify-center items-center">
        <div className="text-[#FCE1AC] max-w-7xl mx-auto w-full grid grid-cols-9 px-2">
            <div className="col-span-4 w-full h-full ">
                <div className="w-full h-full bg-[#001010] rounded-3xl p-2 md:pl-4">
                    <div className="flex justify-between">
                        <h1 className=" text-xl font-sans font-bold py-2 pb-10">TITLE</h1>
                        <h1 className="">8/25/23</h1>
                    </div>
                    <hr className="my-2 border-t border-opacity-50 border-[#FCE1AC] w-[100%] mx-auto" />                
                    <p className=" sm:text-sm font-sans text-xs pb-10">    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                    <div className="text-2xl  " >
                        <Link href={"/"}><RiPresentationFill className="stroke-0.5"/></Link>
                        <Link href={"/"}><BiSolidVideoRecording/></Link>
                    </div>
                </div>
                
            </div>
            
        </div>
    </div>
     );
}
 
export default Box;