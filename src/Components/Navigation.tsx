import {Link} from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className="flex justify-between items-center h-[50px] px-10 shadow-md bg-gray-500 text-white">
        <h3 className='font-bold text-xl'>Github Search</h3>
        <span className='font-medium'>
            <Link to="/" className='mr-10 hover:text-neutral-200 transition-colors'>Home</Link>
            <Link to="/favourites" className=' hover:text-neutral-200 transition-colors'>Favourites</Link>
        </span>
    </nav>
  )
}

export default Navigation