import {FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto'>
        <Link to='/'>
        <h1 className ="font-bold text-sm sm:text-xl flex flex-wrap ">
            <span className='text-slate-500'>Secure</span>
            <span className='text-slate-700'>Haven</span>
        </h1>
        </Link>
        <form className='bg-slate-100 p-3 rounded-lg flex items-center gap-2'>
          <input type="text" placeholder="Recherche..." className='bg-transparent w-24 sm:w-64'/>
          <FaSearch className='text-slate-600' />
        </form>
        <ul className='flex gap-4'>
          <Link to='/Home'> <li className='hidden sm:inline text-slate-700 hover:underline'>Home</li></Link>
          <Link to='/About'><li className='hidden sm:inline text-slate-700 hover:underline'>About</li></Link>
          <Link to='/Profile'><li className='text-slate-700 hover:underline'>Sign in</li></Link>
          </ul>
        
        </div>
    </header>
  )
}
