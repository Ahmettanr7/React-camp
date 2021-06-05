import React from 'react'
import { Container, Input, Label, Menu, Grid } from 'semantic-ui-react'

export default function Category() {
    return (
        <div>

            <Menu vertical>
        <Menu.Item
          name='inbox'
        >
          <Label color='teal'>1</Label>
          Inbox
        </Menu.Item>

        <Menu.Item
          name='spam'
        >
          <Label>51</Label>
          Spam
        </Menu.Item>

        <Menu.Item
          name='updates'
        >
          <Label>1</Label>
          Updates
        </Menu.Item>
        <Menu.Item>
          <Input icon='search' placeholder='Search mail...' />
        </Menu.Item>
      </Menu>
        </div>
    )
}
