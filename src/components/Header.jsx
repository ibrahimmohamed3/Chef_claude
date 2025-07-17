import chefImg from '../assets/chef.png'
import '../App.css'

function Header(){
    return(
       <header className='nav'>
       <img src={chefImg} alt="chef icon" />
       <h2>Chef Claude</h2>
       </header>
    )
}

export default Header