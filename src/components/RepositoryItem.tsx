type IRepository = {
  repository: {
    name: string;
    description: string;
    link: string;
  };
};

export function RepositoryItem({ repository }: IRepository) {
  const { description, link, name } = repository;

  return (
    <li>
      <strong>{name}</strong>
      <p>{description}</p>
      <a target="_blank" href={link}>
        Acessar repositório
      </a>
    </li>
  );
}
