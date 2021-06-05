import React from 'react'
import ProductList from '../pages/ProductList'
import Category from './Category'
import Navi from './Navi'
import { Grid, GridColumn } from 'semantic-ui-react'

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
                    <ProductList></ProductList>
                    </GridColumn>
                </Grid.Row>
            </Grid>
            
            
            
        </div>
    )
}
