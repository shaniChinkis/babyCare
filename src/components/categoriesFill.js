import React from 'react'
import '../styles/categoriesFill.css'
import useTable from "react-table"


const CategoriesFill = () => {

    return (
        <div className="allCF">
            <div className="tableCF">
                <div className='firstRowCF'>
                    <label className="categoryLabelCF">קטגוריה</label>
                    <label className="detailsLabelCF">פירוט</label>
                    <label className="timeLabelCF">שעה</label>
                </div>
                <div className='secondRowCF'>
                    <input className="row2input1"/>
                    <input className="row2input2"/>
                    <label className="foodCF">אוכל</label>
                </div>
            </div>
        </div>



    )
}
export default CategoriesFill;