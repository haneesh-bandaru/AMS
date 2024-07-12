const EmpLayout = () => {
  const EmpArr = ["About", "Add Member"];
  return (
    <div className="bg-slate-800 text-white">
      <div>
        <ul>
          {EmpArr.map((item, index) => (
            <li key={index}>{item}</li> 
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EmpLayout;
