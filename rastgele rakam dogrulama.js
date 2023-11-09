// Rasgele 5 rakam oluşturma fonksiyonu
function generateRandomNumber() {
    return Math.floor(Math.random() * 10);
  }
  
  // Rasgele 5 rakam oluştur
  function generateRandomCode() {
    let code = "";
    for (let i = 0; i < 5; i++) {
      code += generateRandomNumber();
    }
    return code;
  }
  
  // Rasgele 5 rakam oluştur
  const randomCode = generateRandomCode();
  
  // Kullanıcıdan girdi al
  const userGuess = prompt("Lütfen aşağıdaki rastgele 5 rakamı doğrulayın:\n" + randomCode);
  
  // Doğrulama işlemi
  if (userGuess === randomCode) {
    alert("Doğru! Girdiğiniz kod, rastgele oluşturulan kodla eşleşiyor.");
  } else {
    alert("Üzgünüz, girdiğiniz kod rastgele oluşturulan kodla eşleşmiyor.");
  }
  