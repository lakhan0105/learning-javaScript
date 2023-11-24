

// Function to fetch users data
export const fetchUsers = async (url) => {
  const resp = await fetch(url);
  const data = resp.json();
  return data;
};
