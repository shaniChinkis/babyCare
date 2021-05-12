import React from 'react'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import "../styles/governessHomepage.css"


function governessHomepage(){
    return(
        <div>
                <h1>GovernessHomepage</h1>
        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
            <Button> רשימת הילדים</Button>
            <Button>קטגוריות</Button>
            <Button>צפיה בלוח חופשות וארועים</Button>
        </ButtonGroup>
        </div>
    )
}
export default governessHomepage;