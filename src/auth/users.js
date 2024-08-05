import { checkLicense } from './license';

const users = {
  directeur: { password: 'Tobichat', role: 'directeur' },
  employe: { password: 'grincheux', role: 'employe' },
};

export const getUsers = (licenseKey) => {
  if (checkLicense(licenseKey)) {
    return users;
  } else {
    throw new Error('Invalid license key');
  }
};
