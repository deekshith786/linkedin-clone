import { Info } from '@mui/icons-material'
import React from 'react'
import '../widgets/Widgets.css'
import { FiberManualRecord } from '@mui/icons-material'

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">

            <div className="widgets__articleLeft">
                <FiberManualRecord/>
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
  return (
    <div className='widgets'>
        <div className="widgets__header">
            <h2>LinkedIn News</h2>
            <Info/>
        </div>
        {newsArticle("Double-digit hikes on the cards", "Top news= 9090 readers")}
        {newsArticle("Buyers fill bags with branded FMCG", "Top news= 7152 readers")}
        {newsArticle("Is redux too good?", "Top news= 6244 readers")}
        {newsArticle("Bitcoin Breaks $22k", "Top news= 5421 readers")}
        {newsArticle("Thales to hire 550 techies", "Top news= 4445 readers")}
        {newsArticle("India's GDP march stalls", "Top news= 3255 readers")}
    </div>
  )
}

export default Widgets
