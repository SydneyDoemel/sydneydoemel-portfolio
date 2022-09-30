import { Link } from 'react-router-dom';
import {BsList} from 'react-icons/bs'
export default class Nav extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid nav-ctnr">
          <a className="navbar-brand mx-4" href="/home" style={{color: 'rgb(255, 17, 61)', fontWeight: 'bold', fontSize: '1.6rem'}}>Sydney Doemel</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <BsList size={35} className='toggler'/>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
             
                <li className="nav-item ddi mx-2"><Link className="nav-link" to="/about" style={{color: 'rgb(240, 241, 241)'}}><p className='color-text'>About</p></Link></li>
              <li className="nav-item piano-link">
                <Link className="nav-link active mx-2" to="/portfolio" style={{color: 'rgb(240, 241, 241)'}}><p className='color-text'>Portfolio</p></Link>
              </li>
             
              
            </ul>
             
          
          </div>
        </div>
      </nav>
    )
  }
}
