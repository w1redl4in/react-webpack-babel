import '../styles/repositoryitems.scss';

type IRepository = {
  repository: {
    name: string;
    description: string;
    html_url: string;
  };
};

export function RepositoryItem({ repository }: IRepository) {
  const { description, html_url, name } = repository;

  return (
    <li>
      <strong>{name}</strong>
      <p>{description}</p>
      <a target="_blank" href={html_url}>
        Acessar repositório
      </a>
    </li>
  );
}
