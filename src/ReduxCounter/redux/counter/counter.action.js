  
const INCR = "INCR";
const DECR = "DECR";

let incrAction = () => {
  console.log("inside incr action");
  return { type: INCR };
};

let decrAction = () => {
  return { type: DECR };
};
export { incrAction, decrAction ,INCR, DECR };