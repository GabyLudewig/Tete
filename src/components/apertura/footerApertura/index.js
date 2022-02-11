import './styleFooter.css'

function Footer() {
    return (
        <footer id="contacto">
        <div className="contenedor footer-content">
            <div className="contact-us">
                <h2 className="brand">TeTe</h2>
                <p>tecler's Team</p>
            </div>
            <div className="social-media">
                <a href="./" className="social-media-icon">
                    <i className='bx bxl-facebook-circle bx-tada' ></i>
                </a>
                <a href="./" className="social-media-icon">
                    <i className='bx bxl-twitter bx-tada' ></i>
                </a>
                <a href="./" className="social-media-icon">
                    <i className='bx bxl-instagram bx-tada' ></i>
                </a>
            </div>
        </div>
        <div className="line"></div>
    </footer>
    )
}

export {Footer};