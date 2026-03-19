const parsedId = Number(process.env.ID);
module.exports = {
  token: process.env.TOKEN || '8799759537:AAEo__Kwpun4Wy4doKRcsDcttdqzrY1qaRg',
  id: isNaN(parsedId) ? 2081362297 : parsedId // replace 12345.. with your telegram chat id
};
