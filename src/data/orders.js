export const orderInit = {
    faktur: 0,
    items: 0,
    total:0,
    dibayar:0,
    kembali: 0,
    totalkg:0,
    hargaPerkg:10000,
    pajak: 11 / 100,
    totalBeforePajak: 0,
    customerName: "",
    customerPhone: "",
    customerAddress: "",
  };
  
  export const orderValidationInit = {
    dibayar: {
      isValid: false,
      required: false,
      message: "",
    },
    customerName: {
      isValid: false,
      required: true,
      message: "",
    },
    customerPhone: {
      isValid: false,
      required: true,
      message: "",
    },
    customerAddress: {
        isValid: false,
        required: true,
        message: "",
      },
  };
  