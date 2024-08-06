import { ChangeEvent, useState } from "react";

const countriesInEurope = [
  "Albania",
  "Andorra",
  "Armenia",
  "Austria",
  "Azerbaijan",
  "Belarus",
  "Belgium",
  "Bosnia and Herzegovina",
  "Bulgaria",
  "Croatia",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Estonia",
  "Finland",
  "France",
  "Georgia",
  "Germany",
  "Greece",
  "Hungary",
  "Iceland",
  "Ireland",
  "Italy",
  "Kazakhstan",
  "Kosovo",
  "Latvia",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Malta",
  "Moldova",
  "Monaco",
  "Montenegro",
  "Netherlands",
  "North Macedonia",
  "Norway",
  "Poland",
  "Portugal",
  "Romania",
  "Russia",
  "San Marino",
  "Serbia",
  "Slovakia",
  "Slovenia",
  "Spain",
  "Sweden",
  "Switzerland",
  "Turkey",
  "Ukraine",
  "United Kingdom",
  "Vatican City",
];

export const NonPrimitive = () => {
  const [guessedCountries, setGuessedCountries] = useState<string[]>([]);
  const [value, setValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setValue(value);
  };

  const submitCountryName = () => {
    if (countriesInEurope.includes(value)) {
      setGuessedCountries((prev) => [...prev, value]);
      setValue("");
      alert(`jej zgadłeś kraj ${value}`);
    }
  };

  return (
    <>
      <h1> Try to name all countries in Europe</h1>

      <input value={value} onChange={handleChange} />
      <button onClick={submitCountryName}>Submit country name</button>

      <h2>List of guessed countries</h2>
      <ol>
        {guessedCountries.map((country) => (
          <li key={country}>{country}</li>
        ))}
      </ol>
    </>
  );
};
