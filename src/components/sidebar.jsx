import React, {useEffect, useRef, useState} from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from '../images/logo/theRose-white.svg'

export default function Sidebar({sidebarOpen, setSidebarOpen}) {
    const location = useLocation()
    const { pathname }= location

    const button = useRef(null)
    const sidebar = useRef(null)

    useEffect(()=>{
        const handleClick = ({target}) =>{
            if (!sidebar.current || !button.current) return
            if (
                !sidebarOpen ||
                sidebar.current.contains(target) ||
                button.current.contains(target)
            )
                return
            setSidebarOpen(false)
        }
        document.addEventListener('click', handleClick)
        return () => document.removeEventListener('click', handleClick)
    })

    return (
        <aside
            ref={sidebar}
            className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
                sidebarOpen ? 'translate-x-0' : '-translate-x-full'
            }`}>
            {/* Header */}
            <div className="flex items-center justify-between gap-2 px-6 py-5 lg:py=6">
                <NavLink to="/">
                    <img src={Logo} alt="Logo" width={100} height={100} />
                </NavLink>
                <button
                    ref={button}
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    aria-controls="sidebar"
                    aria-expanded={sidebarOpen}
                    className="block lg:hidden"
                >
                    <svg
                        className="fill-current"
                        width="20"
                        height="18"
                        viewBox="0 0 20 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
                        fill=""
                        />
                    </svg>
                </button>
            </div>
        </aside>
    )
}