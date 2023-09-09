const gfName = "Ms.Random";
export const gfName2 = "Ms.Random2";
export const gfName3 = "Ms.Random3";
export const gfName4 = "Ms.Random4";

export const generate = () => {
    return `${Math.floor(Math.random()*100)}%`;
}

// Only one export default
export default gfName;
// export {gfName2, gfName3, gfName4};