import React from "react";
import { useAtom } from 'jotai'
import { RollCountAtom, UCountAtom, RCountAtom, SCountAtom, NCountAtom} from "../src/gameState";
import '../styles/center.css';
//import '../src/ItemData.xlsx';


//App layout starts here

function IndexPage() {
    const [rollCount, setRollCount] = useAtom(RollCountAtom);
    const [uCount, setUCount] = useAtom(UCountAtom);
    const [sCount, setSCount] = useAtom(SCountAtom);
    const [rCount, setRCount] = useAtom(RCountAtom);
    const [nCount, setNCount] = useAtom(NCountAtom);

    // const setSCount = useSetAtom(SCountAtom)
    // const setRollCount = useSetAtom(RCountAtom)

    //Roll logic starts here
    function roll_1() {
        setRollCount((rollCount) => rollCount + 1);
        const rCH = Math.random();
        if (rCH < 0.01) {
            setUCount((uCount) => uCount + 1);
        }
        else if (0.01 <= rCH && rCH < 0.06) {
            setSCount((sCount) => sCount + 1);
        }
        else if (0.06 <= rCH && rCH < 0.36) {
            setRCount((rCount) => rCount + 1);
        }
        else {
            setNCount((nCount) => nCount + 1);
        }
    }

    function roll_10() {
        setSCount((sCount) => sCount + 1)
        setRollCount((rollCount) => rollCount + 1);
        for (var i = 0; i < 9; i++) {
            roll_1();
        }
    }
    
    function reset() {
        setUCount((uCount) => 0)
        setSCount((sCount) => 0)
        setRCount((rCount) => 0)
        setNCount((nCount) => 0)
        setRollCount((rollCount) => 0);
    }

    //website starts here
    return (
        <div className="centered">
            <h1 className= "hStyle">RPG Kit Gacha</h1>
            <p className= "pStyle">Your adventurer awaits but it seems are you are ill-equipped. 
                Brave it without help if you wish or accept these gifts, however utilizing these gifts will take finesse.
                Roll the gacha for your skills and gear. 10 rolls will guarentee a super rare drop.</p>
            {/* Rate table */}
            <table className= "tableRate">
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
                        <td>5%</td>
                    </tr>
                    <tr>
                        <td>Rare</td>
                        <td>30%</td>
                    </tr>
                    <tr>
                        <td>Normal</td>
                        <td>64%</td>
                    </tr>
                </tbody>
            </table>
            {/* Buttons */}
            <button className="buttonA" type="submit" onClick={() => roll_1()}>Roll 1</button>
            <button className="buttonB" type="submit" onClick={() => roll_10()}>Roll 10</button>
            <button className="buttonC" type="submit" onClick={() => reset()}>Reset</button>
            
            {/* Result table */}
            <table className= "tableRolls">
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
            {/* Inventory rewards list */}
            <table className= "tableInventory">
                <tbody>
                    <tr>
                        <th>Inventory</th>
                        <th>Item count</th>
                        <th>Item type</th>
                    </tr>
                    <tr>
                        <td>Feature coming soon</td>
                    </tr>
                </tbody>
            </table>
            {/* Skill rewards list */}
            <table className= "tableSkills">
                <tbody>
                    <tr>
                        <th>Skill</th>
                        <th>Rank</th>
                        <th>Skill type</th>

                    </tr>
                    <tr>
                        <td>Feature coming soon</td>
                    </tr>
                </tbody>
            </table>
            {/* Gacha history */}
            <table className= "tableLoot">
                <tbody>
                    <tr>
                        <th>Rarity</th>
                        <th>Roll</th>                        
                        <th>Type</th>
                    </tr>
                    <tr>
                        <td>Feature coming soon</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default IndexPage
