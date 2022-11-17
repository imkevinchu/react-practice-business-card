import profile from "../img/profile.jpg";

const Photo = () => {
  return (
    <img
      className="Photo"
      src={profile}
      alt="Profile of Spike Spiegel from Cowboy Bebop"
      width={550}
      height={550}
    ></img>
  );
};

export default Photo;
