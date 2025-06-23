import Header from '../Organisms/Header/Header';
import type { Link } from '../Types/Link';
import './layout.css';

function Layout() {
  const links: Link[] = [
    {
      name: 'Home',
      link: 'home'
    }, {
      name: 'Types',
      link: 'types'
    }, {
      name: 'Generations',
      link: 'generations'
    }
  ]
  return (
    <div>
      <header className='header'><Header links={links} /></header>
      <section className='content'></section>
      <footer className='footer'></footer>
    </div>
  )
}

export default Layout