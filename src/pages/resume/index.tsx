import { useParams } from 'react-router-dom';

export const ResumePage = () => {
  const { username } = useParams<{ username: string }>();

  return <div>Resume {username}</div>;
};
