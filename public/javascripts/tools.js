const moment = require('moment');


const toolsFunction = {
  dateToString(date) { 
  return  moment(date).format('YYYY/MM/DD');

  }

}

module.exports = toolsFunction
