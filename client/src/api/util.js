export const makeHeader = (token) => {
  return {
    headers: { Authorization: `Bearer ${token}` }
  };
};
