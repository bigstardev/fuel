import React from 'react'
import logo from '../../assets/img/logo.png'
import '../../assets/css/base.css'
import './navbar.css'
export default function Navbar({ title }) {
    return (
        <div className="d-flex align-items-center justify-content-space  default-bc navbar px-2 ">
            <div className="">
                <img src={logo} alt="" />
            </div>
            <div className="mx-1 top-title">
                <h5>{title}</h5>
            </div>
            <div>
                <button className="d-flex align-items-center justify-content-center flex-row text-uppercase login">log in</button>
            </div>
        </div>
    )
}
