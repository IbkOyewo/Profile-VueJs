const app = new Vue({
    el: "#app",
    data: {
      currentHour: new Date().getHours(),
  
      name: "Ibukun Oyewo",
      address: "Ajuwon, Ogun state, Nigeria",
      occupation: "Techie",
  
      foods: ["Plantain", "Jollof Rice", "Oha Soup", "Moin-moin"],
  
      countries: ["Seychelles", "Mauritius", "Greece", "South Korea"],
      formData: {
        username: "",
        profileName: "",
        email: "",
        phoneNumber: "",
      },
    },
  });
  