import React from 'react';
import Link from '@docusaurus/Link';

const LongCard = ({ title, description, href, category, date, authors }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col col--12 longcard" style={{ borderRadius: 10 }}>
          <div className="row">
            <div className="col col--20 longcard-body">
              <p className="longcard-description">
                <span className="gold">{category}</span>{date && ` - ${date}`}
              </p>
              <p className="longcard-title">
                <Link to={href}>{title}</Link>
              </p>

              {/* New authors line */}
              {authors && (
                <p className="longcard-authors">
                  {Array.isArray(authors) ? authors.join(', ') : authors}
                </p>
              )}

              <p className="longcard-description">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LongCard;
