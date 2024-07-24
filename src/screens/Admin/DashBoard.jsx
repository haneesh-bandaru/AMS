import CustomPieChart from "@/components/CustomPieChart";
const DashBoard = () => {
  return (
    <div className="flex mt-6 gap-6 mx-auto">
      <CustomPieChart title={"Hello"} />
      <CustomPieChart title={"Hello"} />
      <CustomPieChart title={"Hello"} />
    </div>
  );
};

export default DashBoard;
