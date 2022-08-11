function graduate(credential) {
  function credit(fullName) {
    fullName += `, ${credential}`;
    return fullName;
  }
  return credit;
}

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

console.log(medicalSchool('Dennis Liu'));
console.log(lawSchool('Dennis Liu'));
