const getPhotoUrl = (personLogin) => {
  return "http://intranet/Photos/" + personLogin + ".jpg";
};

export default getPhotoUrl;
