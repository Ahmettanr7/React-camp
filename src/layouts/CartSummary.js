import React from 'react'
import { NavLink } from 'react-router-dom'
import { Dropdown, Label, Button } from 'semantic-ui-react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../store/actions/cartActions'
import { toast } from 'react-toastify'

export default function CartSummary() {

  const dispatch = useDispatch();

  const {cartItems} = useSelector(state => state.cart)

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
    toast.success(`${product.productName} sepetten çıkarıldı`)
  }

    return (
        <div>
            <Dropdown item text='Sepetiniz'>
            <Dropdown.Menu>
              {
                cartItems.map((cartItem) => (
                  <Dropdown.Item
                  key={cartItem.product.productId}
                  >{cartItem.product.productName}
                  <Label style={{float:'right'}}>{cartItem.quantity}</Label>
                  <Button negative onClick={()=>handleRemoveFromCart(cartItem.product)}>x</Button>
                  </Dropdown.Item>
                ))
              }
              <Dropdown.Divider/>
              <Dropdown.Item as={NavLink} to='/cartdetail'>Sepete Git</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
    )
}
