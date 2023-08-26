import Link from "next/link";
import Image from "next/image";

const NavBar = () => {

    return(
        <div className="w-full bg-black rounded-md border p-3 flex flex-cols">
            <div className="text-center flex flex-cols text-white h-full">
                <h1>UCSC</h1>
                <h3>Artificial Intelligence</h3>
            </div>
            <div>
                <Image className="inset-y-0 right-0" width={150} height={100} src="/baskin.png" alt="baskin">    
                </Image>
            </div>
        </div>
    )
}

export default NavBar;