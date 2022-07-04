export const capitalizeString = (strValue) =>
  strValue.charAt(0).toUpperCase() + strValue.slice(1);

export const formatDateOfBirth = (dob) => {
  const dobObj = dob.split("T");
  return dobObj[0];
};
