import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedinOut({signIn}) {
    return (
        <div>
            <Menu.Item>
            <Button primary circular onClick={signIn}>GİRİŞ YAP</Button>
            <Button primary circular inverted style={{marginLeft:"0.5em"}}>KAYIT OL</Button>
            </Menu.Item>
        </div>
    )
}
