export const validateValues = (values) => {
  const errors = [];

  for (const key in values) {
    if (values.hasOwnProperty(key) && values[key] === "") {
      errors.push(`${key} is required`);
    }
  }

  return errors;
};

export const registerValidation = (data) => {
  const { repeatPassword, ...registerData } = data;
  if (repeatPassword !== registerData.password) {
    return ["Passwords doesn't match!"];
  }
  if (repeatPassword.length < 4) {
    return ["Passwords should be more than 4 characters!"];
  }
  return registerData;
};

export const recipeValidation = (data) => {
  if (data.title.length < 3 || data.title.length > 40) {
    return ["Title should be between 3 and 40 characters long."];
  }
  const timing = Number(data.timing)
  if (typeof timing !== "number" || isNaN(timing)) {
    console.log(data.timing)
    return ["Timing should be a number."];
  }
  const portions = Number(data.portions)
  if (typeof portions !== "number" || isNaN(portions)) {
    return ["Portions should be a number."];
  }

  if (data.ingredients.length < 15) {
    return ["Ingredients should be more than 15 letters "];
  }

  if (data.preparation.length < 40) {
    return ["Preparation should be at least 40 characters long."];
  }

  if (typeof data.image !== "string" || !data.image.startsWith("http")) {
    return ["Image should be a valid URL."];
  }
};
