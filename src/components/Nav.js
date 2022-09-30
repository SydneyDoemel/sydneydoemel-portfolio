import { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid nav-ctnr">
          <a className="navbar-brand mx-4" href="/sydneydoemel-portfolio/" style={{color: 'black', fontWeight: 'bold', fontSize: '1.6rem'}}>Sydney Doemel</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
             
                <li className="nav-item ddi mx-2"><Link className="nav-link" to="/sydneydoemel-portfolio/about" ><p className='color-text'>About</p></Link></li>
              <li className="nav-item piano-link">
                <Link className="nav-link active mx-2" to="/sydneydoemel-portfolio/portfolio"><p className='color-text'>Portfolio</p></Link>
              </li>
             
              
            </ul>
             
          
          </div>
        </div>
      </nav>
    )
  }
}
