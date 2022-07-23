const getPicture = (gender: string) => {
  const picture = gender === "female" ? "women" : "men";

  return {
    large: `https://randomuser.me/api/portraits/${picture}/44.jpg`,
    medium: `https://randomuser.me/api/portraits/med/${picture}/44.jpg`,
    thumbnail: `https://randomuser.me/api/portraits/thumb/${picture}/44.jpg`,
  };
};

export default getPicture;
