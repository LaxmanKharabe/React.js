export function NavBarForProps(props){
    return(
        <div className={`${props.theme} text-white mt-2 mb-2 p-2 d-flex justify-content-between`}>
            <div>
                <span className="h3">{props.brandname}</span>
            </div>
            <div>
               {
                 props.menuitems.map((item)=>
                  <span className="me-3">{item}</span>
                 )
               }
            </div>
            <div>
                <span className="bi bi-search"></span>
                <span className="bi bi-person"></span>
                <span className="bi bi-cart3"></span>
            </div>
        </div>
    )
}