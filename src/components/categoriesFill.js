import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import '../styles/categoriesFill.css'

import React from 'react'

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(category, details, time) {
    return { category, details, time };
}

const rows = [
    createData('אוכל', <input className="row2input1" />, <input className="row2input1" />) ,
    createData('שינה', <input className="row2input2" />, <input className="row2input2" />),
    createData('התפתחות', <input className="row2input1" />, <input className="row2input1" />),
    createData('פעילות', <input className="row2input2" />, <input className="row2input2" />),
    createData('אחר', <input className="row2input1" />, <input className="row2input1" />),
];

const CategoriesFill = () => {
    const classes = useStyles();
    return (
        <div className="allCF">
        <TableContainer className="allTable">
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead className="ColumnHeader">
                    <TableRow >
                        <TableCell className="timeLabelCF" align="center">שעה</TableCell>
                        <TableCell className="detailsLabelCF" align="center">פירוט</TableCell>
                        <TableCell className="categoryLabelCF" align="center">קטגוריה</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row,i) => (
                        <TableRow key={row.category}>
                            <TableCell  align="center">{row.time}</TableCell>
                            <TableCell align="center">{row.details}</TableCell>
                            <TableCell align="center"> <div className={i%2==0? "divY" : "divB"} style={{width:'100% !important' }, {height:'100% !important'} ,{ backgroundColor:'#FFFCE6 0% 0% no-repeat padding-box !important' }}>{row.category}</div></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </div>
    );
}

export default CategoriesFill;