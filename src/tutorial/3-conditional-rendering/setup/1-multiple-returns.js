import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/zourdycodes";

const MultipleReturns = () => {
  const [user, setUser] = useState("default");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      const fetchUser = async () => {
        const response = await fetch(url)
          .then((response) => {
            if (
              !response.ok &&
              response.status >= 400 &&
              response.status <= 600
            ) {
              return setError((error) => !error);
            }

            return response.json();
          })
          .then((data) => {
            setUser(data);
            setLoading((loading) => !loading);
          });

        return response;
      };

      fetchUser();
    } catch (error) {
      throw new Error(error);
    }
  }, []);

  console.log(error);

  if (error) {
    return (
      <React.Fragment>
        <h4>
          Error, No Data retrieved! the request call is maybe forbidden or your
          API endpoint is wrong
        </h4>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <h2>multiple returns</h2>
      {loading ? (
        <h2>Loading ...</h2>
      ) : (
        <ul className="users">
          <li key={user.id}>
            <img src={user.avatar_url} alt={user.name} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                marginTop: "15px",
              }}
            >
              <h4>{user.name}</h4>
              <p>{user.location}</p>
            </div>
          </li>
        </ul>
      )}
    </React.Fragment>
  );
};

export default MultipleReturns;
