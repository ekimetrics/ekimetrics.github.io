import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';


const ShortCard = ({title,description,href,category,date,tags}) => {
    return (
        <div class="col col-md-12 col--6 shortcard-container">
            <div class="col col--12 shortcard">
                <div class="longcard-body">
                    <p class="longcard-description" style={{fontSize:14}}><span className="gold">{category}</span>{date && ` - ${date}` }</p>
                    <p class="shortcard-title"><Link to={href}>{title}</Link></p>
                    <p class="longcard-description">{description}</p>
                    <p class="longcard-description" style={{fontSize:16, textAlign:"left"}}>{tags && tags.map(el => <span className="badge badge--primary" style={{fontFamily:"InterCustom"}}>{el} </span>)}</p>

                </div>
            </div>
        </div>
    )
}

export default ShortCard;
