import { useEffect, useState } from "react";

import { RepositoryItem } from "./RepositoryItem";

import "../styles/repositories.scss";

interface Repository {
  name: string
  description: string
  html_url: string
}

export function RepositoryList() {
  /**
   * 'useState' é o hook de armazenamento de estado.
   */
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  /**
   * O hook(gancho) do 'useEffect' é ativado sempre quando as dependências são alteradas.
   */

  /**
   * Quando a variável de dependência do 'useEffect' for um array vazio, o hook será
   * executado uma única vez.
   */

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>

      <ul>
        {repositories.map((repository) => {
          return <RepositoryItem key={repository.name} repository={repository} />;
        })}
      </ul>
    </section>
  );
}