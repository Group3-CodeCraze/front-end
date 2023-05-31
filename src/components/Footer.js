import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons"

function Footer() {
    return <>
        <footer className="bg-light py-1 mt-1">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p className="mb-0">&copy; {new Date().getFullYear()} codecraze. All rights reserved.</p>
                        <div href="/">Task Genius</div>
                        <div >
                            <Link href="https://github.com/Group3-CodeCraze">
                                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    </>
}

export default Footer