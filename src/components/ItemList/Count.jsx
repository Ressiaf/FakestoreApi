import React from "react";
import FormButton from "../Gobals/Buttons/FormButton";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

export default function Count() {
  const handleRest = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const [count, setCount] = React.useState(0);

  return (
    <>
      <div className=" flex  my-8 mr-4 items-center">
        <FormButton
          type="button"
          onClick={() => setCount(count + 1)}
          value="+"
          icon={<AddIcon className="inline ml-2" />}
        />

        <h4 className=" text-3xl font-bold px-6">{count}</h4>

        <FormButton
          type="button"
          onClick={handleRest}
          value="-"
          icon={<RemoveIcon className="inline ml-2" />}
        />
      </div>
    </>
  );
}
