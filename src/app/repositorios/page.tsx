"use client";

import { useEffect, useState } from "react";

interface DataProps {
  id: number;
  name: string;
  full_name: string;
  owner: {
    login: string;
    id: number;
    avatar_url: string;
    url: string;
  };
}

export default function Repositorios() {
  const [repos, setRepos] = useState<DataProps[]>([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch("https://api.github.com/users/leandroofaria/repos");
      const data: DataProps[] = await response.json();
      setRepos(data); 
    }

    getData();
  }, []); 

  return (
    <div>
      <h1>Página de repositórios</h1>
      {repos.map((item) => (
        <div key={item.id}>
          <strong>Repositório: </strong>
          <a>
            {item.name}
          </a>
          <br />
          <br />
        </div>
      ))}
    </div>
  );
}
