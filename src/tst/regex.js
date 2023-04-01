const str1 = 'Volodimir Singapuk <singapuk.e03@gmail.com>';
const str2 = 'singapuk.e03@gmail.com';

const trimEmail = (email) => {
    // V1 - by str methods
    // let index = email.indexOf('<');
    // if (index !== -1) {
    //     return email.substring(index + 1, email.length - 1);
    // }
    // return email;
    // V2 - by regular exp
    const regexp = /(?<=\<)(\S+)(?=\>)/g; //regular for searching between < >
    const matches = email.match(regexp);
    if (matches !== null) return matches[0];
    return email;
};

console.log(trimEmail(str1));
