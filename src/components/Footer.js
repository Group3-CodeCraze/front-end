import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import './Footer.css'
function Footer() {
    return <>
        <footer className=" py-1 main-footer" >
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p className="mb-0">&copy; {new Date().getFullYear()} codecraze. All rights reserved.</p>
                        <div href="/">Task Tracker</div>
                        <div >
                            <Link href="https://github.com/Group3-CodeCraze">
                                <FontAwesomeIcon icon={faGithub} style={{ fontSize: 40 }}></FontAwesomeIcon>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    </>
}

export default Footer