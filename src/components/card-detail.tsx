import React from 'react';
import { useParams } from 'react-router-dom';
import { MemberEntity } from '../models/MemberEntity';
interface paramTypes {
  login: string;
}

const emptyMember: MemberEntity = {
  id: '',
  avatar_url: '',
  login: '',
};

export const CardDetail: React.FC = () => {
  const { login } = useParams<paramTypes>();
  const [member, setMember] = React.useState<MemberEntity>(emptyMember);

  React.useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then((json) => setMember(json));
  }, []);

  return (
    <>
      <h2>User {member.login}</h2>
      <h4>Id: {member.id}</h4>
      <div>
        <img src={member.avatar_url} alt="" />
      </div>
    </>
  );
};
