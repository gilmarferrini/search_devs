export default () => {
  const authToken = localStorage.getItem('token');
  const userId = localStorage.getItem('userId');

  if (authToken && userId) return true;

  return false;
}
