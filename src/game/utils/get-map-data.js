import shape0 from "./shapes/shape0";

const generateShape = coords => {
  const shape = [];
  for (let i = 0; i < coords.length; i += 2) {
    shape.push({
      lon: coords[i],
      lat: coords[i + 1]
    });
  }
};

export const getMapData = () => {
  const res = {
    shapes: []
  };

  res.shapes.push(generateShape(shape0));
  return res;
};
