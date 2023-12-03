import './netflix-main.css';
import { NetflixRegister } from './netflix-register';
export function NetflixMain() {
    return (
        <main>
            <h1>Unlimited movies, TV <br />shows and more</h1>
            <p>Starts at ₹149. Cancel anytime.</p>
            <p className="text-dark1">Ready to watch? Enter your email to create or restart your <br />membership.</p>
            <NetflixRegister/>
        </main>
    )
}