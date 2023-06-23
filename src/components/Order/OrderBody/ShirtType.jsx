import React from "react";

function ShirtType(){

  return(
    <div>
      <h3 style={{color: "white"}}> T-Shirt Type </h3>
      <table>
        <tr>

          <td>
            <label style={{color: "white"}}>
              <input type="checkbox" />
              50/50 (cotton)
            </label>
          </td>

          <td>
            <label style={{color: "white"}}>
              <input type="checkbox" />
              DriFit
            </label>
          </td>

          <td>
            <label style={{color: "white"}}>
              <input type="checkbox" />
              Polo
            </label>
          </td>

        </tr>
      </table>

    </div>
  );
};

export default ShirtType;
