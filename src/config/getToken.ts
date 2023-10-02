export const getToken = () => {
  const Authentication = localStorage.getItem("persist:root");
  const authenString = JSON.parse(Authentication);
  const authData = JSON.parse(authenString.Authentication);
  const { token } = authData;
  return token;
};
