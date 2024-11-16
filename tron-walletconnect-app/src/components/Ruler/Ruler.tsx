import React from 'react';
import './Ruler.css';

const Ruler: React.FC = () => {
    return (
      <div className="ruler-container wrapper section">
          <div className="container">
            <div className="row">
                <div className="col">
                    <div className="line" />
                </div>
            </div>
          </div>
      </div>
    );
  };
  
  export default Ruler;