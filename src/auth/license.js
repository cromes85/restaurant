const validLicenseKey = 'your-secure-license-key';

export const checkLicense = (key) => {
  return key === validLicenseKey;
};
