import { useState } from "react";

const SideBar = () => {
    const [isOpen, setIsOpen]= useState(false);

    const toggleSidebar = ()=>{
        setIsOpen(!isOpen);
    };
    //the idea would be to get the chats from the user db
    return (
        <div>
            <button onClick={toggleSidebar}>
                <img alt="Toggle sidebar" />
            </button>
            {isOpen &&(
                <div className="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-4">
                    {/*user's profile pic + chats */}
                </div>
            )}
        </div>
    )
};
export default SideBar;