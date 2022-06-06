import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook,FaInstagramSquare } from "react-icons/fa";
import { CgMail } from 'react-icons/cg'
import { BsWhatsapp,BsFillTelephoneFill } from 'react-icons/bs'
import '../Footer/footer.css'


function Footer() {
  return (
    <div>
      <footer className="text-white pt-5 pb-4">
          <div className="container text-center text-md-left">
            <nav className='row'>
              <Link to='/' className='col-12 col-md-3 d-flex aling-items-center justify-content-center'> 
                <img className='blockquote' src={require("../../imagenes/logo-crochetera.png")} alt="Logo" height='150' />
              </Link>
            
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3" id='contactos'>
                          <h5 className="text-uppercase mb-4 font-weitgh-bold text-warning">contactos</h5>
                          <p>
                              <i className="fas fa-home mr-3 "></i>  Buenos aires
                          </p>
                          <p>
                              <i className="fas fa-enveloper mr-3 "></i><CgMail></CgMail>  bethcrochetera@gmail.com
                          </p>
                          <p>
                              <i className="fas fa-phone mr-3 "></i><BsWhatsapp></BsWhatsapp>  11-4589-4455
                          </p>
                          <p>
                              <i className="fas fa-print mr-3 "></i><BsFillTelephoneFill></BsFillTelephoneFill>  +55 33344 555 
                          </p>

                  </div>
            </nav>      

            

            <hr className='hr-4'></hr>

            <div className="row align-items-center">
              <div className="col-md-7 col-lg-8">
                <p>Copyright &copy;2021 All Right reserved by: 
                    <Link to='/' className="text-decoration: none;">
                        <strong className="text-warning"> Beth Crochetera</strong>
                    </Link>
                </p>
              </div>
              <div className="col-md-5 col-lg-4 ">
                    <div className="text-center text-md-right">
                        <ul className="list-unstyled list-inline ">
                            <li className="list-inline-item ">
                                <Link to='/' className="btn-floating btn-sm text-white style font-size:30px" ><i className="fab fa-facebook" ></i><FaFacebook ></FaFacebook> </Link>
                            </li>
                            <li className="list-inline-item ">
                                <Link to='/' className="btn-floating btn-sm text-white style font-size:23px"><i className="fab fa-twitter"></i><FaInstagramSquare></FaInstagramSquare></Link>
                            </li>
                           
                        </ul>

                    </div>

                </div>

            </div>

          </div>

      </footer>

      
    </div>
  )
}

export default Footer;