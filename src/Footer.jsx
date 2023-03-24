const Footer = () => {
    var today = new Date();
    return(
        <footer className="container">
            <div className="row jsutify-content-center mt-3 mb-4">
          <div className="col">
            <h4>Team Member Allocation App - {today.getFullYear()}</h4>
            </div>
            </div>
        </footer>
    )
}

export default Footer