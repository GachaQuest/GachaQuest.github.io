import { atom, useAtom, useSetAtom } from 'jotai'


export const counterAtom = atom(0)

//Drop list ref
export let NDropRarityAtom = atom(0);
export let RDropRarityAtom = atom(0);
export let SDropRarityAtom = atom(0);
export let UDropRarityAtom = atom(0);

//Rarity and roll tracker
export let UCountAtom = atom(0);
export let SCountAtom = atom(0);
export let RCountAtom = atom(0);
export let NCountAtom = atom(0);
export let RollCountAtom = atom(0);




// const initialGameState = {
//     rollCounter: 0,
//     pityRate: 0
// }


// // export const rollCounterAtom =



// const gameState = {
//     rollCounterAtom: atom(initialGameState.rollCounter)
// }


// export default gameState;