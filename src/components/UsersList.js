import React from 'react';
import '../style.css';

const UsersList = ({ data, loading }) => {
  if (loading) {
    return <h1>Loading.......</h1>;
  }

  return (
    <section>
      <div>
        {data.map((data) => (
          <div className="data">
            <div>
              <img src={data.picture.large} alt="" />
            </div>
            <div>
              <h3>{`${data.name.title} ${data.name.first} ${data.name.last}`}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UsersList;
