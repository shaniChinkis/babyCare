import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';

import Button from '@material-ui/core/Button';

import "../styles/addAnotherChild.css"


function addAnotherChild() {
    return (
        <div>
            <div>
                <label>הרשמת ילד נוסף</label>
                <br />
                <FormControl variant="outlined">
                    <InputLabel htmlFor="component-outlined">קוד מטפלת</InputLabel>
                    <OutlinedInput id="component-outlined" label="gCode" />
                </FormControl>
                <br />
                <br />
                <FormControl variant="outlined">
                    <InputLabel htmlFor="component-outlined">שם הילד</InputLabel>
                    <OutlinedInput id="component-outlined" label="childName" />
                </FormControl>
                <br />
                <br />
                <FormControl variant="outlined">
                    <InputLabel htmlFor="component-outlined">ת.ז הילד</InputLabel>
                    <OutlinedInput id="component-outlined" label="childId" />
                </FormControl>
                <br />
                <br />
                <Button variant="contained" size="medium" color="primary" >
                הוספה➕
                </Button>
            </div>
        </div>


    )
}

export default addAnotherChild;