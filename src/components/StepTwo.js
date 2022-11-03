const StepTwo = ({ data, setValid }) => {
  return (
    <div className="results">
      <h1>Results</h1>
      <div className="recap">
        <p>{`Name : ${data.name[0]}`}</p>
        <p>{`Email : ${data.email[0]}`}</p>
        <p>{`Password : ${data.password[0]}`}</p>
      </div>
      <button className="edit" onClick={() => setValid(false)}>
        Edit your information
      </button>
    </div>
  );
};

export default StepTwo;
