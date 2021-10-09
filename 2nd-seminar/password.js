const fs = require("fs");
const crypto = require("crypto");

const password = fs.readFileSync("./password.txt", 'utf-8');
const salt = crypto.randomBytes(32).toString("hex");

const encrypt = (salt, password) => {
    crypto.pbkdf2(password, salt.toString(), 1, 32, "sha512", (err, derivedKey) => {
      if (err) throw err;
      const hashed = derivedKey.toString("hex");
      console.log("salt : ", salt);
      console.log("hashed : ", hashed);
      fs.writeFileSync(`hashed.txt`, hashed);
    });
  };

const data = encrypt(salt, password);

