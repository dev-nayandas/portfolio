import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const NabVar = () => {
    return (
        <div className="navbar bg-[#381C59] text-[#D831EC] font-bold text-2xl ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to='/home'>Home</Link></li>
            <li><HashLink smooth to='/#about'>About</HashLink></li>
            <li><HashLink smooth to='/#skills'>Skills</HashLink></li>
            <li><HashLink smooth to='/#projects'>Projects</HashLink></li>
            <li><HashLink smooth to='/#contact'>Contact</HashLink></li>
            <li><Link to='/blog'>Blog</Link></li>
            </ul>
          </div>
          
          <Link className="btn btn-ghost normal-case text-xl border rounded "> <img  src='https://i.ibb.co/mFxtFrh/logo.png' style={{width:'50px', height:'50px'}}></img> </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link to='/home'>Home</Link></li>
            <li><HashLink smooth to='/#about'>About</HashLink></li>
            <li><HashLink smooth to='/#skills'>Skills</HashLink></li>
            <li><HashLink smooth to='/#projects'>Projects</HashLink></li>
            <li><HashLink smooth to='/#contact'>Contact</HashLink></li>
            <li><Link to='/blog'>Blog</Link></li>
          </ul>
        </div>
       
      </div>
    );
};

export default NabVar;