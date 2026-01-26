
function Footer() {
    return (
        <footer className='bd-footer py-5 mt-5 bg-light'>
            <div className='container'>
                React Movies {new Date().getFullYear().toString()}
            </div>
        </footer>
    )
}

export default Footer;