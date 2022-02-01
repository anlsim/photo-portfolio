import Link from 'next/link'
const Navbar = () => {
  return (
    <nav>
    <ul>
    <li>
      <Link href='/'>
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href='/nature'>
          <a>Nature</a>
        </Link>
      </li>
      <li>
      <Link href='/people'>
          <a>People</a>
        </Link>
      </li>
      <li>
      <Link href='/night'>
          <a>Night</a>
        </Link>
      </li>
      <li>
      <Link href='/about'>
          <a>About</a>
        </Link>
      </li>
    </ul>
  </nav>
  )
}
export default Navbar