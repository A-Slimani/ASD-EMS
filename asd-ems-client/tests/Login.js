const handleSubmit = (username) => {
  function isUser(name) { return /^-?[a-zA-Z0-9._%+-]+@EMS[HR,OP,MK,FN]{2}$/.test(name); }

  if (isUser(username)) { return true; }
  else { return false; }
};

module.exports = handleSubmit;
