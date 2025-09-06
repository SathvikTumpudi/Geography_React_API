import React, { useEffect, useState } from "react";

function CountryCodeComponent() {
  let [countries, setCountries] = useState([]);
  let [isLoading, setIsLoading] = useState(true);
  let [country, setCountry] = useState("");

  useEffect(() => {
    getCountryAPICall("");
  }, []);
  console.log(countries);

  const handleSubmit = (e) => {
    e.preventDefault();
    getCountryAPICall(country);
  };

  const getCountryAPICall = (country) => {
    var myHeaders = new Headers();
    myHeaders.append("apikey", "wV37v4nk2zDLOGf8ypwyNOodIpcTwQW4");

    var requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };
    fetch(
      `https://api.apilayer.com/geo/country/code/${country}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setCountries(result);
        setIsLoading(false);
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="App">
      <div className="header">
        Type a country code ("US" for example) in the text box below
      </div>
      <form method="get" onSubmit={handleSubmit}>
        <input
          name="country"
          value={country}
          onChange={(e) => {
            setCountry(e.target.value);
            setIsLoading(true);
          }}
        />
        <button type="submit">Submit</button>
      </form>
      {isLoading
        ? "Loading, please wait"
        : countries.length > 0 &&
          countries.map((country) => (
            <div key={country.geo_id}>
              <div>
                {"The country that the code belongs to is " + country.name}
              </div>
            </div>
          ))}
    </div>
  );
}

export default CountryCodeComponent;
