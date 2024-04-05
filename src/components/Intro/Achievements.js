import React from 'react';
import './intro.css'

const Achievements = ({ highlights }) => {
  return (
    <div className='achievements'>
      <span className='highlights'>My Highlights</span>
      <ul className='highlightList'>
        {highlights &&
          highlights.map((item, index) => (
            <li className="listItems" key={index}>
              {item.title} - <span className='listDesc'>{item.desc}</span> 
              {item && item.link && 
                <a target='_blank' className= "url" title="I promise it's not a phishing link!" href={item.link}>
                  {item.linkText}
                </a>
              }
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default Achievements;
