import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [data, setData] = useState();
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
        data.map((user) => {
          const { avatar_url, login, id, html_url } = user;

          return (
            <div
              key={id}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "2rem",
                marginTop: "2rem",
              }}
            >
              <img
                style={{
                  width: "90px",
                  borderRadius: "50%",
                }}
                src={avatar_url}
                alt={login}
              />
              <div
                style={{
                  textAlign: "left",
                }}
              >
                <h4>{login}</h4>
                <a href={html_url} target="_blank" rel="noopener noreferrer">
                  {html_url}
                </a>
              </div>
            </div>
          );
        })
      )}
    </React.Fragment>
  );
};

export default UseEffectFetchData;
