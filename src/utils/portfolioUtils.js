import { technologies } from "./constants";

//   gets all technologies used in the project and returns an array of unique technologies
export const getTechnologies = (project) => {
  const allTechnologies = [...project.technologies];
  project.technologies.forEach((technology) => {
    const requiredTechnologies = technologies[technology].requires;
    requiredTechnologies.forEach((requiredTechnology) => {
      if (!allTechnologies.includes(requiredTechnology)) {
        allTechnologies.push(requiredTechnology);
      }
    });
  });
  return allTechnologies;
};

const primaryTypeOrder = ["Frontend", "Backend", "Database", "Deployment"];
const secondaryTypeOrder = ["Layout", "Styling", "Scripting"];
const primarySort = (types) => {
  const primaryTypes = [];
  primaryTypeOrder.forEach((type) => {
    if (types.includes(type)) {
      primaryTypes.push(type);
    }
  });
  return primaryTypes;
};
const secondarySort = (types) => {
  const secondaryTypes = [];
  secondaryTypeOrder.forEach((type) => {
    if (types.includes(type)) {
      secondaryTypes.push(type);
    }
  });
  return secondaryTypes;
};

// gets all types of technologies used in the project and returns an array containing primary types and secondary types
export const getTypes = (allTechnologies) => {
  const types = [];
  const bothTypes = [];
  allTechnologies.forEach((technology) => {
    const technologyTypes = technologies[technology].types;
    technologyTypes.forEach((type) => {
      if (!types.includes(type)) {
        types.push(type);
      }
    });
  });
  let primaryTypes = types.filter((type) => primaryTypeOrder.includes(type));
  let secondaryTypes = types.filter((type) =>
    secondaryTypeOrder.includes(type)
  );

    primaryTypes = primarySort(primaryTypes);
    secondaryTypes = secondarySort(secondaryTypes);
    bothTypes.push(primaryTypes);
    bothTypes.push(secondaryTypes);
    return bothTypes;
};