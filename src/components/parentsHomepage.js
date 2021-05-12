import React from 'react'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import "../styles/parentsHomepage.css"


function parentsHomepage(){
    return(
        <div>
                <h1>ParentsHomepage</h1>
        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
            <Button>צפיה בפעילות הילד</Button>
            <Button>שליחת הודעה למטפלת</Button>
            <Button>פידבק למטפלת</Button>
            <Button>צפיה בלוח חופשות וארועים</Button>
        </ButtonGroup>
        <br/>
        <br/>
        <div>
        <Button variant="contained" size="medium" color="primary" >
          הרשמת ילד נוסף➕
        </Button>
        </div>
    </div>
    )
}
export default parentsHomepage;