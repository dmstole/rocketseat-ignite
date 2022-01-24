export interface RepositoryData {
  name: string;
  description: string;
  link: string;
}

interface RepositoryItemProps {
  data: RepositoryData;
}

export default function RepositoryItem(props: RepositoryItemProps) {
  return (
    <>
      {props.data && (
        <li>
          <strong>{props.data.name}</strong>

          <p>{props.data.description}</p>

          <a target={"_blank"} href={props.data.link}>
            Acessar Repositorio
          </a>
        </li>
      )}
    </>
  );
}
