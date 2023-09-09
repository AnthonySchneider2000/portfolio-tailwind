import { technologies, types } from "./constants";

//   gets all technologies used in the project and returns an array of unique technologies
export const getTechnologies = (project) => {
  const allTechnologies = [...project.technologies];
//   project.technologies.forEach((technology) => {
//     const requiredTechnologies = technologies[technology].requires;
//     requiredTechnologies.forEach((requiredTechnology) => {
//       if (!allTechnologies.includes(requiredTechnology)) {
//         allTechnologies.push(requiredTechnology);
//       }
//     });
//   });
  return allTechnologies;
};

const typeOrder = ["Layout", "Styling", "Scripting"];
const categoryOrder = ["Frontend", "Backend", "Database", "Deployment"];

const sortTypes = (types) => {
  return types.sort((a, b) => {
    return typeOrder.indexOf(a) - typeOrder.indexOf(b);
  });
};

const sortCategories = (categories) => {
  return categories.sort((a, b) => {
    return categoryOrder.indexOf(a) - categoryOrder.indexOf(b);
  });
};

export const getTypes = (projectTechnologies) => { // gets all types used in the project and returns an array of unique types
    let types = [];
    console.log(projectTechnologies);
    projectTechnologies.forEach((technology) => { // for each technology in the project
        const technologyTypes = technologies[technology].types; // get the types of the technology
        technologyTypes.forEach((type) => { // for each type of the technology
            if (!types.includes(type)) { // if the type is not already in the types array
                types.push(type); // add the type to the types array
            }
        });
    }
    );
    // types = sortTypes(types);
    return types;
};

export const getCategories = (projectTypes) => { // gets all categories used in the project and returns an array of unique categories
    let categories = [];
    projectTypes.forEach((type) => { // for each type in the project
        const typeCategories = types[type].categories; // get the categories of the type
        typeCategories.forEach((category) => { // for each category of the type
            if (!categories.includes(category)) { // if the category is not already in the categories array
                categories.push(category); // add the category to the categories array
            }
        });
    }
    );
    // categories = sortCategories(categories);
    return categories;
};
