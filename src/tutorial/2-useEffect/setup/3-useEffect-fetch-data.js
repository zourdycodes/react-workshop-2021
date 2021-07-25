import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const dataset = await fetch(url).then((req) => req.json());

      setData(dataset);
      setIsLoading((isLoading) => !isLoading);
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <React.Fragment>
      <h2>fetch data</h2>
      {isLoading ? (
        <h1>Loading ...</h1>
      ) : (
        <ul className="users">
          {data.map((user) => {
            const { avatar_url, login, id, html_url } = user;

            return (
              <li key={id}>
                <img src={avatar_url} alt={login} />
                <div>
                  <h4>{login}</h4>
                  <a href={html_url} target="_blank" rel="noopener noreferrer">
                    Profile
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </React.Fragment>
  );
};

export default UseEffectFetchData;
