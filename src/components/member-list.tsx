import React from 'react';
import { generatePath, Link } from 'react-router-dom';
import { CorporationContext } from '../core/corporation-provider.component';
import { MemberEntity } from '../models/MemberEntity';

export const MemberList: React.FC = () => {
  const corporationContext = React.useContext(CorporationContext);
  const [members, setMembers] = React.useState<MemberEntity[]>([]);

  React.useEffect(() => {
    fetch(
      `https://api.github.com/orgs/${corporationContext.corporation}/members`
    )
      .then((response) => response.json())
      .then((json) => setMembers(json));
  }, [corporationContext]);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Id</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id}>
              <td>
                <img src={member.avatar_url} style={{ width: '5rem' }} />
              </td>
              <td>
                <span>{member.id}</span>
              </td>
              <td>
                <Link
                  to={generatePath('/detail/:login', { login: member.login })}
                >
                  {member.login}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
