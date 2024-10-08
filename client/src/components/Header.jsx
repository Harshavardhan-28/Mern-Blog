import React from 'react'
import { Button, Navbar, TextInput } from 'flowbite-react'
import { Link, useLocation } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaMoon } from "react-icons/fa";

export default function Header() {
    const path = useLocation().pathname;
  return (
    <Navbar className='border-b-2'>
        <Link to='/' className='self-center whitespace-nowrap text-sm
            sm:text-xl font-semibold dark:text-white'>
                <span className='px-2 py-3 bg-gradient-to-r 
                from-indigo-600 via-blue-600 to-pink-700
                rounded-lg text-white mr-1'> Harsh's</span>
                Blog
        </Link>
        <form>
            <TextInput 
                type='text'
                placeholder='Search...'
                rightIcon={AiOutlineSearch}
                className='hidden lg:inline'
            />
        </form>
        <Button className='h-10 w-12 lg:hidden' color='gray' pill>
            <AiOutlineSearch />
        </Button>
        <div className='flex gap-3 md:order-2'>
            <Button className='h-10 w-12 hidden sm:inline' color='gray' pill>
                <FaMoon />
            </Button>
            <Link to='/sign-in'>
                <Button gradientDuoTone='purpleToBlue' outline>
                    Sign In
                </Button>
            </Link>
            <Navbar.Toggle/>
        </div>
        <Navbar.Collapse>
            <Navbar.Link active = {path==='/'} as={'div'}>
                <Link to='/'>
                    Home
                </Link>
            </Navbar.Link>
            <Navbar.Link active = {path==='/'} as={'div'}>
                <Link to='/about'>
                        About
                    </Link>
                </Navbar.Link>
                <Navbar.Link active = {path==='/'} as={'div'}>
                    <Link to='/Projects'>
                    Projects
                    </Link>
                </Navbar.Link>
        </Navbar.Collapse>
    </Navbar>

  )
}
