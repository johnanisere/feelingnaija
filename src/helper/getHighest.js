import captions from "../components/constants/captions";

function getHighest(theObject) {
  
  let values = Object.values(theObject);
  const max = Math.max(...values);
  
  return captions[values.indexOf(max)].emoji;
}

export default getHighest;
