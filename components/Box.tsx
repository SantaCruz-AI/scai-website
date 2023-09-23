

const Box = () => {
 
    return ( 

    <div className="h-screen w-full flex justify-center items-center">
    <div className="max-w-5xl mx-auto w-full grid grid-cols-9 px-2">
        <div className="col-span-4 w-full h-full text-[#FCE1AC] ">
            <div className="w-full h-full bg-[#001010] rounded-3xl p-2 md:pl-4">
                <div className="flex justify-between font-bold py-2 pb-10">
                    <h1 className="text-xl font-sans ">TITLE</h1>
                    <h1 className="pr-2" >Date</h1>
                </div>
                <hr className="my-2 border-t border-opacity-50 border-[#FCE1AC] w-[100%] mx-auto" />                
                <p className="sm:text-sm font-sans text-xs">Room Info</p>
                <p></p>
            </div>
            
        </div>
    </div>

    </div>


     );
}
 
export default Box;