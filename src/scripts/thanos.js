import { PATH_DB } from '../constants/contacts.js';

import fs from 'fs';

export const thanos = async () => {
  try {
    if (fs.existsSync(PATH_DB)) {
      const data = fs.readFileSync(PATH_DB, 'utf-8');
      let contacts = JSON.parse(data);
      for (let i = contacts.length - 1; i >= 0; i--) {
        if (Math.random() < 0.5) {
          contacts.splice(i, 1);
          console.log(`One contact has been deleted!`);
        }
      }
      fs.writeFileSync(PATH_DB, JSON.stringify(contacts, null, 4));
      console.log('Balancing completed.');
    }
  } catch (error) {
    console.error('Error during balancing:', error);
  }
};

await thanos();
