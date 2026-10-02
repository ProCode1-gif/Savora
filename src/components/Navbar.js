"use client";

import React from 'react'
import Link from 'next/link'
import { FaEnvelope, FaUser } from 'react-icons/fa'
import { jwtDecode } from 'jwt-decode'

const Navbar = () => {
  const token = localStorage.getItem("token")

  let userId = null

  if (token) {
    const decoded = jwtDecode(token)

    userId = decoded.userId
  }

  return (
    <nav className='flex bg-black justify-around align-middle py-6'>

      <div>
        <h2>Savora</h2>
      </div>

      <ul className='flex space-x-3'>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/menu"}>Menu</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/reservation"}>Reservations</Link>
        </li>
        <li>
          <Link href={"/contact"}>Contact</Link>
        </li>
      </ul>

      <div className='flex gap-3 relative'>
        {userId ? (
          <Link href={`/${userId}`}>
            <FaUser />
          </Link>
          |
          <Link href={"/notifiction"}>
            <FaEnvelope />
          </Link>
        ) : (
          <Link href={"/signin"}>Sign in</Link>
        )}
      </div>

    </nav>
  )
}

export default Navbar