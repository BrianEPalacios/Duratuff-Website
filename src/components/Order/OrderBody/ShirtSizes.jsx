import React from "react";
import NumberInput from "../../NumberInput";

function ShirtSizes(){

  const shirtSizes = ["YS", "YM", "YL", "YXL", "AS",
                      "AM", "AL", "AXL", "XXL", "3XL", "4XL", "5XL"];
  return(
    <div>
      <table>

        {shirtSizes.map((shirtSize, index) => (
          <tr>
            <td style={{color: "white"}}> {shirtSize} </td>
            <td> <NumberInput /> </td>
          </tr>
        ))}
        
      </table>
    </div>
  );
};

export default ShirtSizes;
