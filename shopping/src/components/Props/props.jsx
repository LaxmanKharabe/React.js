import {NavBarForProps} from '../Navbar/navbar2';

export function PropsExample(){
    return(
        <div className="container-fluid">
            <h3>Properties Demo</h3>
            <NavBarForProps brandname="Shopper" theme="bg-dark" menuitems={['Home', 'About', 'Contact']} />
            <NavBarForProps brandname="Super Market" theme="bg-primary" menuitems={['Home', 'Shop', 'Accessories', 'Help']} />
            <NavBarForProps brandname="Web Learning" theme="bg-success" menuitems={['Home', 'Courses', 'Contact', 'Login']} />
        </div>
    )
}