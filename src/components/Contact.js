const Contact = () => {
  return (
    <div className="m-4 p-2">
      <h1 className="font-bold text-2xl m-2 ">This is a Contact Page</h1>
      {/* <h2> You can reach us anytime!!</h2> */}
      <form>
        <input
          className="border border-black p-2  mr-6 rounded-lg"
          placeholder="Enter your name"
        />
        <input
          className="border border-black p-2 mr-6 rounded-lg"
          placeholder="Enter your message"
        />
        <button className="bg-yellow-300 py-2 px-4 rounded-lg">submit</button>
      </form>
    </div>
  );
};
export default Contact;
