export function RepositoryItem(props) {
  const { repository } = props;

  return (
    <li>
      <strong>{repository?.name}</strong>
      <p>{repository?.description}</p>
      <a target="_blank" href={repository?.link}>Acessar repositório</a>
    </li>
  );
};