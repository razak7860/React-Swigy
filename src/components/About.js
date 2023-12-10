import UserClass from "./UserClass";
const About = () => {
  return (
    <div className="about">
      <h1> This is About Page</h1>
      <h2> We are trying to learn React</h2>
      <UserClass name="first" location="Hyderabad" contact="razak shaik" />
    </div>
  );
};
export default About;
