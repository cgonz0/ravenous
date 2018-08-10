import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
       {/* access the businesses prop, iterate it through businesses array */}
        {
          this.props.businesses.map(business => {
            return <Business key={business.id} business={business} />
          })
        }
      </div>
    );
  }
}

export default BusinessList;