import { useLocation } from 'react-router-dom';

const CreateNote = () => {
  const { state } = useLocation();

  if (!state) return 'no color';

  return (
    <>
      <h2>{state.name}</h2>
    </>
  );
};

export default CreateNote;
