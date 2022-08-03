import React from "react";
import { useAtom, useSetAtom, useAtomValue } from 'jotai'
import { RollCountAtom, UCountAtom, RCountAtom, NCountAtom, SCountAtom } from "../src/gameState";

//App layout starts here

function MyApp() {

  return (
    <div className="centered">
      <h1>RPG Kit Gacha</h1>
      <h2>Roll for your adventuring gear</h2>
      <h3>10 rolls guarentee a SR</h3>
      <br></br>
      {/* Rate table */}
      <table>
        <tbody>
          <tr>
            <th>Rarity</th>
            <th>Rates</th>
          </tr>
          <tr>
            <td>Ultra rare</td>
            <td>1%</td>
          </tr>
          <tr>
            <td>Super rare</td>
            <td>10%</td>
          </tr>
          <tr>
            <td>Rare</td>
            <td>30%</td>
          </tr>
          <tr>
            <td>Normal</td>
            <td>59%</td>
          </tr>
        </tbody>
      </table>
      <br></br>
      
      {/* Result table */}
      <table>
        <tbody>
          <tr>
            <th>Results</th>
          </tr>
          <tr>
            <td>Ultra rare</td>
            <td>{uCount}</td>
          </tr>
          <tr>
            <td>Super rare</td>
            <td>{sCount}</td>
          </tr>
          <tr>
            <td>Rare</td>
            <td>{rCount}</td>
          </tr>
          <tr>
            <td>Normal</td>
            <td>{nCount}</td>
          </tr>
          <tr>
            <td>Rolls</td>
            <td>{rollCount}</td>
          </tr>
        </tbody>
      </table>
      <br></br>
    </div>
  );
}

export default MyApp
