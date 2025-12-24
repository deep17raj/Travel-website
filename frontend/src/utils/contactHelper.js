// src/utils/contactHelper.js

export const handleCall = (phoneNumber = "+919876543210") => {
  // Use window.location to trigger the dialer
  window.location.href = `tel:${phoneNumber}`;
};