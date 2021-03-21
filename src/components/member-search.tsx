import React from 'react';
import { CorporationContext } from '../core/corporation-provider.component';

export const MemberSearch: React.FC = () => {
  const { setCorporation } = React.useContext(CorporationContext);
  const { corporation } = React.useContext(CorporationContext);
  const [filter, setFilter] = React.useState(corporation);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCorporation(filter);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          type="text"
        />
      </label>
      <button>Search</button>
    </form>
  );
};
