import React from 'react'

function Footer({textColor}) {
  return (
    <>
      <div className="company-info">
        <div className="company-info-text" style={{color: textColor}}>
          FM Technologies | Est. 2024 | Baltimore, MD
        </div>
        <div className="company-contact-text" style={{color: textColor}}>
          jdfmtechnologies@gmail.com | 555-555-5555
        </div>
      </div>
    </>
  );
}

export default Footer