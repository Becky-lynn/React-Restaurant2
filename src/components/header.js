import MainNav from "./mainnav.js"

export default function Header() {
    return (
      <header>
       <div className="container header">
        <div className="row">
          <div className="col-sm-12">

              <div class="turkey animate__animated animate__tada">
               <img class="image d-none d-sm-block" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ78SBDAaSJ5myapyRTgVOm_K7h-1j4g1P-Q&usqp=CAU" alt="overLay" />
              </div>

            <h1>Thanksgiving Family Feast</h1>
          </div>
         </div>
        </div>
        <div className="container-fluid">
         <div className="row">
          <div className="col-sm-12 topNav" role="navigation">
            <MainNav></MainNav>
          </div>
         </div>
        </div>
      </header>
    )
} 
