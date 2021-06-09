import React, {useState} from 'react'
import { useHistory } from 'react-router'
import { Menu } from 'semantic-ui-react'
import CartSummary from './CartSummary'
import Signedin from './Signedin'
import SignedinOut from './SignedinOut'
export default function Navi() {
  
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  
  const history = useHistory()

  function handlerSignOut() {
    setIsAuthenticated(false)
    history.push("/")
  }

  function handlerSignIn() {
    setIsAuthenticated(true)
    
  }

  return (
        <div>
            <Menu inverted fixed top>
        <Menu.Item
          name='home'
        />
        <Menu.Item
          name='messages'
        />

        <Menu.Menu position='right'>
          <CartSummary></CartSummary>
          {isAuthenticated?<Signedin signOut={handlerSignOut}/>:<SignedinOut signIn={handlerSignIn}/>}
        </Menu.Menu>
      </Menu>
        </div>
    )
}
