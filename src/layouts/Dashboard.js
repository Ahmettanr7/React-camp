import React from 'react'
import ProductList from '../pages/ProductList'
import Category from './Category'
import Navi from './Navi'
import { Grid, GridColumn } from 'semantic-ui-react'
import { Route } from 'react-router'
import ProductDetail from '../pages/ProductDetail'
import CartDetail from '../pages/CartDetail'

export default function Dashboard() {
    return (
        <div>
            <Navi></Navi>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                    <Category></Category>
                    </Grid.Column>
                    <GridColumn width={12}>
                    <Route exact path='/' component={ProductList}/>
                    <Route exact path='/products' component={ProductList}/>
                    <Route exact path='/products/:name' component={ProductDetail}/>
                    <Route path='/cartdetail' component={CartDetail}/>
                    </GridColumn>
                </Grid.Row>
            </Grid>
            
            
            
        </div>
    )
}
