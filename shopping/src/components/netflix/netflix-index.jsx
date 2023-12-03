import './netflix-index.css';
import { NetflixHeader } from './netflix-header';
import { NetflixMain } from './netflix-main';
export function NetflixIndex(){
    return(
        <div id="body">
            <div id="darkBack">
                <NetflixHeader/>
                <section className='text-white'>
                    <NetflixMain/>
                </section>
            </div>
        </div>
    )
}