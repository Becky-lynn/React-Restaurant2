import MainNav from "./mainnav.js"

export default function Footer() {
    return (
    <>
     <footer>
      <hr></hr>
        <div className="container footer">
            <div className="row">
                <div className="col-sm-2 copy">
                    <small>&copy; 2021</small>
                </div>
                <div className="col-sm-8 bottomNav">
                    <MainNav></MainNav>
                </div>
                <div className="col-sm-2 icon">
                    [social icon]
                </div>
            </div>
        </div>
      </footer>
     </>
    )
}