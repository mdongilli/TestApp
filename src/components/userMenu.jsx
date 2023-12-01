import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../common/actions/auth";
import ChevronDownIcon from '@heroicons/react/20/solid/ChevronDownIcon'
import UserIcon from '@heroicons/react/24/outline/UserIcon'
import SettingsIcon from '@heroicons/react/24/outline/CogIcon'
import LogOutIcon from '@heroicons/react/24/outline/ArrowRightOnRectangleIcon'

const UserMenu = (props) => {
    const [isOpen, setIsOpen] = useState(false)

    const button = useRef(null)
    const dropdown = useRef(null)

    // close on click outside
    useEffect(()=>{
        const handleClick = ({target}) => {
            if (!dropdown.current) return
            if (
                !isOpen ||
                dropdown.current.contains(target) ||
                button.current.contains(target)
            ) 
                return
            setIsOpen(false)
        }        
        document.addEventListener('click', handleClick)
        return ()=> document.removeEventListener('click', handleClick)
    })

    const handleLogOut = (e)=>{
        console.log('logout')
        
        props.dispatch(logout())
        console.log('after logout')
    }
    return (
        <div className="relative">
            <Link
                ref={button}
                onClick={()=>setIsOpen(!isOpen)}
                className="flex items-center gap-4"
                to="#"
                >
                    <span className="hidden text-right lg:block">
                        <span className="block text-sm font-medium text-black dark:text-white">
                            Massimo Dongilli
                        </span>
                        <span className="block text-xs">Developer</span>
                    </span>
                    <span className="h-12 w-12 rounded-full">

                    </span>
                    <ChevronDownIcon width={24} height={24} />
            </Link>
            <div
                ref={dropdown}
                onFocus={() => setIsOpen(true)}
                onBlur={() => setIsOpen(false)}
                className={`absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ${
                    isOpen === true ? 'block' : 'hidden'
                }`}
            >
                <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-7.5 dark:border-strokedark">
                    <li>
                        <Link
                            to="/profile"
                            className="flex items-center gap-3.5 text-sm font-medium duration-0300 ease-in-out hover:text-primary lg:text-base"

                        >
                            <UserIcon width={24} height={24}/>
                            Profilo
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/profile"
                            className="flex items-center gap-3.5 text-sm font-medium duration-0300 ease-in-out hover:text-primary lg:text-base"
                        >
                            <SettingsIcon width={24} height={24}/>
                            Impostazioni
                        </Link>
                    </li>
                </ul>
                <button onClick={handleLogOut} className="flex items-center gap-3.5 py-4 px-6 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base">
                    <LogOutIcon width={24} height={24} />
                    Log Out
                </button>
            </div>
        </div>
    )
}

function mapStateToProps(state){
    const { auth } = state
    return {
        auth
    }
}
export default connect(mapStateToProps)(UserMenu)