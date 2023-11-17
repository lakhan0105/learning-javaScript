// URL
const URL = "https://randomuser.me/api/";

// Function to fetch the data
export const getUser = async () => {
  const resp = await fetch(URL);
  const data = await resp.json();

  // Destructure
  const person = data.results[0];
  const { large: img } = person.picture;
  const { first, last } = person.name;
  const { email, phone } = person;
  const { age } = person.dob; //sameas const {dob:{age}} = person;
  const { city: location } = person.location;
  const { password } = person.login;

  return {
    img,
    name: `${first} ${last}`,
    email,
    age,
    location,
    phone,
    password,
  };
};
