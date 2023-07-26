function generateRandomPassword(length) {
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let password = "";
  
    for (let i = 0; i < length; i++) {
      const rd = Math.floor(Math.random() * charset.length);
      password += charset[rd];
    }
  
    return password;
  }
  
  const passwordLength = 6; 
  const randomPassword = generateRandomPassword(passwordLength);
  console.log("Generated Password:", randomPassword);
  