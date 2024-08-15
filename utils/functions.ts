import bcrypt from "bcryptjs";

var salt = bcrypt.genSaltSync(10);
const generateSlug = (title: string) => {
  const rand = Math.floor(Math.random() * 100000);
  return (
    title
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "") + rand
  );
};

const cropString = (str: string, maxLength: number) => {
  if (str.length <= maxLength) return str;

  const lastPeriodIndex = str.lastIndexOf(".", maxLength);

  if (lastPeriodIndex !== -1) {
    return str.slice(0, lastPeriodIndex + 1);
  } else {
    return str.slice(0, maxLength) + "...";
  }
};
const isValidEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};
function createRandomString(length: number) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const randomArray = new Uint8Array(length);
  crypto.getRandomValues(randomArray);
  randomArray.forEach((number) => {
    result += chars[number % chars.length];
  });
  return result;
}

const compareHash = (pass: string, hash: string) => {
  return bcrypt.compare(pass, hash);
};
const hashPassword = (pass: string) => {
  return bcrypt.hashSync(pass, salt);
};
export const createUnitSlug = (bedroom: number) => {
  const baseText = "Bedroom Luxury Appartments";
  return `${bedroom}-${baseText.replace(/ /g, "-").toLowerCase()}`;
};
export const createUnitTitle = (slug: string) => {
  const baseText = "Bedroom Luxury Appartments";
  return `${slug.split("-")[0]} ${baseText}`;
};

export {
  cropString,
  isValidEmail,
  compareHash,
  hashPassword,
  createRandomString,
  generateSlug,
};
