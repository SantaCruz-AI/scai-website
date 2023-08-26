const Box = () => {
    return ( 

    <body className="h-screen w-full flex justify-center items-center">
    <div className="max-w-7xl mx-auto w-full grid grid-cols-9 px-2">
        <div className="col-span-4 w-full h-full ">
            <div className="w-full h-full bg-[#001010] rounded-3xl p-2 md:pl-4">
                <h1 className="text-[#FCE1AC] text-xl font-sans font-bold py-2 pb-10">TITLE</h1>
                <hr className="my-2 border-t border-opacity-50 border-[#FCE1AC] w-[100%] mx-auto" />                
                <p className="text-[#FCE1AC] sm:text-sm font-sans text-xs">    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
            </div>
        </div>
        
    </div>

</body>


     );
}
 
export default Box;