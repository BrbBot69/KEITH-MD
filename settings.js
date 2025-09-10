/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/
const fs = require('fs-extra');

const path = require('path');

if (fs.existsSync('set.env')) {
    require('dotenv').config({ path: __dirname + '/set.env' });
}
const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA61Vaa/iOhL9L/4K3TerQ5BammxsISTsgdHoySROCGTDdhKgxX9/CvSdvnpLvzvS5JMV26dOVZ06/g7yIqHYxjfQ/w5KktSI4XbJbiUGfaBXUYQJ6IIQMQT6gJut3LuWzG+xuYPGCM44bTNoinUEd85heFfZqSr16aZHztI38OiCsjqkSfALwE6xD63KP7PONlsJQ3NwOMK3aTSrXeftJEsz/nbo7R1NX2ncN/BoEVFCkjy2yiPOMEGpjW8eSsjn6HcG1zrk5mFn8FbGEze7xJmz06PYgVWuFhehCOOtqKxP4432Ofq+MCYJcmfim0ANfbeeXvb5LQ4a34yOy3K9mi+2AvEPy9pfv+jTJM5xOA5xzhJ2+3Td5zqt9566JoPtXL8vO6pijmC4vUiWvx1UfrCXJCWxR+SeF58jLq/242aC+V418GMa0cGI10kK5VTp5Paoh+ztLZpkXpA08UfiHnnXyvl/qfvOquqcUX7qLnaamFHhxNYTmyqWteffjNWkmcbeznArxNPP0edg4PmFl0B1jsz79pTZCX8Qer4/wcbKRUz3pydSObcON/5JH7GK/IplWM62qVsy+WQ7/Cbcct4l2DEqkWxow9Jj62mNsF4dTo7NZUcml+sYFcup0yw8a5BMyoUx7BwPN2toqF54DTTtbI5OzbdnRmd8G4egzz+6gOA4oYwglhT5858EuwCF9RIHBLNneUEjcMcLTKc9e7tvIs8QxdLF6qxx6tQXpHPoyTM5z2vZPVnfQBeUpAgwpTgcJZQV5OZgSlGMKej/+9mpNmmCs4LhSRKCPhCUHt8TREGA6r/o1+aIGEVl+TXHDHRBRIrMwaDPSIW74Hleky2tJ0MoWTKULJ0zIbQsS7JU0eyJlmi2GWavmKskw5ShrAR9XpEVSZUFWXp0/080dEkxFF3lNc6EGhwoHA8lQ+B4STT1nvAPNODjP12Q4yt7qbitvch3QZQQytZ5VaYFCt8l/r6JgqCocra85YHRLjAB/Q+/MWNJHtM2sSpHJDgmNTbaPEA/QinFjy4IcZ0EuMUDv+3V6dLBwqp2R54wipzrb2mgtf07FvnrSChJkRKI4RcIZfWLxPPqlwMHoy8CPGCRi1RFhiFoy/EykPbO3+r51pyPcn113NVKKu3wPndL+1ILaTVsnpp8CRETHL5X+YCCc1WuijPOf4G7vSv0dB9NRbQN4EnNj3LObVitnvbBB9yXwEH/+0/TNoqwxTNMwRL34g603Wrj/FEMfZH7sx5y1B4GxfVrSTCloAvS5z1ekWSV51QeKrIo9Nq77cbjv01qI4SYoSSlbfCJHfY4a15HHesa73a6oWm2prVT9N7Ud6t4jaKbdWBewk2oEW2m2oeauM3OfbvzVs9B6p1Pomi0qm7NcWD9FQjog4OQb8JzXWh1spvPluMNgaHJmWZvMj4q8zcNXeh0ZCaHuetc5aGkKNLAPK2X/l1dZxu6I0t/h/iYOItEi5VJIKuaMdZbX3kX18dgozW6ZONCcLip0RQD7u4rSxtej1eFKyt11Ni9oTXeUGVLyolVzQOcp0dhMehoV37g6LXQuRbrbF/6UIWsWdv74mDTJH6Z2NNE0x+PV/LDXl5SjBL8fAt+dOmfmvlzKLhH9wPEj8flb4Snr8q6KiFO/bndmNEyU+CdDs26py48c1gH6i4Xr5xC6XixAI922ssUsaggGegDmh0Q6AJSVO3IjvOo+EUkQ1uPDe2VdYoo037awF84iyS9TnmkKEeIHkEfeNuzrLcCv2lluWSIvZsK0NrPa2Lw+B19nfVwfQkAAA==';

const prefix = process.env.PREFIX || '.';

const author = process.env.OWNER_NAME || '☆☆☆☆♤';

const packname = process.env.PACKNAME || '.';

const dev = process.env.OWNER_NUMBER || '27767494368';

const DevKeith = dev.split(",");

const antibot = process.env.ANTIBOT || 'true';

const botname = process.env.BOTNAME || '☆☆☆☆♤';

const mode = process.env.MODE || 'public';

const sessionName = "session";

const url = process.env.URL || 'https://files.catbox.moe/mikdi0.jpg';

const gurl = process.env.GURL || 'https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47';

const timezone = process.env.TIMEZONE || 'Africa/Johannesburg;

//fo mega users only
const megaEmail = process.env.MEGA_EMAIL || '';
const megaPassword = process.env.MEGA_PASSWORD || '';

const { Sequelize } = require('sequelize'); // Ensure Sequelize is imported
const DATABASE_URL = process.env.DATABASE_URL || './database.db'; // Define DATABASE_URL properly

const database =
  DATABASE_URL === './database.db'
    ? new Sequelize({
        dialect: 'sqlite',
        storage: DATABASE_URL,
        logging: false,
      })
    : new Sequelize(DATABASE_URL, {
        dialect: 'postgres',
        ssl: true,
        protocol: 'postgres',
        dialectOptions: {
          ssl: { require: true, rejectUnauthorized: false },
        },
        logging: false,
      });

module.exports = {
  sessionName,
  database,  
  botname, 
  mode,
  prefix,
megaEmail,
 megaPassword,
  timezone,
  author,  
  url,
  gurl,
  antibot,
  packname,
  dev,
  DevKeith,  
  session,
};
