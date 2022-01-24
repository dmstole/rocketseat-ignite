import { useState, useEffect } from "react";
import RepositoryItem from "../RepositoryItem";

import { RepositoryData } from "../RepositoryItem";

import "../../styles/repositories.scss";

interface RepositoryDataApi {
  name: any;
  description: any;
  html_url: any;
}

export default function RepositoryList() {
  const [list, setList] = useState<RepositoryData[]>([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/repos")
      .then((response) => response.json())
      .then((data) => {
        setList(
          data.map((item: RepositoryDataApi) => ({
            name: item.name,
            description: item.description,
            link: item.html_url,
          }))
        );
      })
      .finally(() => {
        setTimeout(() => {
          setCarregando(false);
        }, 1000);
      });
  }, []);

  if (!!carregando) {
    return (
      <section>
        <h1>Carregando...</h1>
      </section>
    );
  }

  return (
    <section className="repository-list">
      <h1>Lista de Repositorios</h1>
      <ul>
        {list &&
          list.map((item, idx) => (
            <RepositoryItem data={item} key={idx}></RepositoryItem>
          ))}
      </ul>
    </section>
  );
}
