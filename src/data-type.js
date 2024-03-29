import template from "./template.js"

function stringType(data){
  return template("string", data, data.length);
}

function intType(data){
  return template("integer", data, null)
}

function intObject(data){
  return template("object", data, data.length)
}

function check(data){
  let dataType = typeof data;
  switch (dataType) {
    case 'string':
       return  stringType(data)
      break;
    case 'number':
       return  intType(data)
      break;
    case 'object':
       return  intObject(data)
      break;
    
    default:
     return "Sorry, <span style='color:#fe5359'>js-var-dumper</span> don't support this type of data yet 🤒"
  }
}

export default check