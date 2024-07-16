import CustomPieChart from "@/components/CustomPieChart";
const DashBoard = () => {
  return (
    <div className="flex flex-wrap justify-around mt-36">
      <CustomPieChart title={"Hello"} />
      <CustomPieChart title={"Hello"} />
      <CustomPieChart title={"Hello"} />
    </div>
  );
};

export default DashBoard;
