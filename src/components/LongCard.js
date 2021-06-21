import React from 'react';
import Link from '@docusaurus/Link';


const LongCard = ({title,src,description,href,category,date}) => {
    return (
        <div class="row">
            <div class="col col--12 longcard">
                <div class="row">
                    <div class="col col--4 longcard-image">
                        <img src={src}/>
                    </div>
                    <div class="col col--8 longcard-body">
                        <p class="longcard-description" style={{fontSize:14}}><span className="gold">{category}</span>{date && ` - ${date}`}</p>
                        <p class="longcard-title"><Link to={href}>{title}</Link></p>
                        <p class="longcard-description">{description}</p>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default LongCard;
