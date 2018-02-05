//code for different functions
var linebreak = document.createElement("br");
let HelloLib = function (params) {
  this.params = params;
  console.log("Hello World From The library!", this.params)
}
HelloLib.prototype.init = function () {
  Object.keys(this.params).map(function (inp) {
    if (this.params[inp].type == "inputtext") {
      console.log(inputtext(this.params[inp].type, this.params[inp].placeholder, this.params[inp].class, this.params[inp].id));
    } else if (this.params[inp].type == "submit") {
      console.log(insbutton(this.params[inp].value, this.params[inp].class, this.params[inp].id));
    } else if (this.params[inp].type == "dropd") {
      console.log(dropdownfunc(this.params[inp].value, this.params[inp].class, this.params[inp].options, this.params[inp].id))
    } else if (this.params[inp].type == "textarea") {
      console.log(textarea(this.params[inp].value, this.params[inp].class, this.params[inp].col, this.params[inp].row, this.params[inp].id));
    } else if (this.params[inp].type == "cardnum") {

      console.log(credcard(this.params[inp].cardcls, this.params[inp].id, this.params[inp].placeholder));
      console.log(readOnlyText(this.params[inp].readOnlyText.placeholder, this.params[inp].readOnlyText.class, this.params[inp].readOnlyText.id));


    } else if (this.params[inp].type == "phonenum") {
      console.log(phnum(this.params[inp].class, this.params[inp].id));
    } else if (this.params[inp].type == "dropd2") {
      console.log(dropdownfunc2(this.params[inp].class, this.params[inp].options, this.params[inp].id));
    } else if (this.params[inp].type == "readOnlyText") {
    }
  }.bind(this))
}
function insbutton(value, clsName, id) {
  var element = document.createElement("FORM");
  document.getElementsByTagName("BODY").appendChild(linebreak);
  var data = document.createTextNode(value);
  element.append(data);
  element.className += clsName;
  element.id = id;
  document.getElementsByTagName("FORM")[0].appendChild(element);
  return element;
}
function inputtext(type, placeholder, clsName, id) {
  var element = document.createElement("INPUT");
  console.log("linebreak:" + linebreak);
  document.body.appendChild(linebreak);
  element.setAttribute("type", "text");
  element.setAttribute("placeholder", placeholder);
  element.className += "form-control";
  element.className += clsName;
  element.setAttribute("id", id);
  document.getElementsByTagName("FORM")[0].appendChild(element);
  return element;
}
function credcard(clsName, id, ph) {
  var element = document.createElement("INPUT");
  document.getElementsByTagName("FORM")[0].append(linebreak);
  element.setAttribute("type", "text");
  $(element).inputmask({ "mask": "9999 9999 9999 9999" });
  element.setAttribute("onkeypress", "cc_brand_id(event)");
  element.setAttribute("id", "cc");
  element.setAttribute("placeholder", ph);
  element.className += clsName;
  element.setAttribute("id", id);
  document.getElementsByTagName("FORM")[0].appendChild(element);
  return element;
}
function textarea(value, clsName, col, row, id) {
  var element = document.createElement("TEXTAREA")
  element.setAttribute('rows', row);
  element.setAttribute('cols', col);
  document.getElementsByTagName("FORM")[0].append(linebreak);
  var data = document.createTextNode(value);
  element.className += "form-control";
  //document.getElementsByTagName("BODY")[0].append(element);
  element.append(data);
  element.setAttribute("id", id);
  element.className += clsName;
  document.getElementsByTagName("FORM")[0].appendChild(element);
  return element;
}
function insbutton(value, clsName, id) {
  var element = document.createElement("BUTTON");
  document.getElementsByTagName("BODY")[0].append(linebreak);
  var data = document.createTextNode(value);
  document.getElementsByTagName("FORM")[0].appendChild(element);
  element.append(data);
  element.setAttribute("id", id);
  element.className += clsName;
  return element;
}

function phnum(clsName, id) {
  var element = document.createElement("INPUT");
  document.body.appendChild(linebreak);
  element.setAttribute("type", "text");
  element.setAttribute("id", id);
  $(element).inputmask({ "mask": "99999-99999" });
  element.className += clsName;
  element.className += "form-control";
  document.getElementsByTagName("FORM")[0].appendChild(element);
  return element;
}
function dropdownfunc(value, clsName, options, id) {
  var element = document.createElement("SELECT");
  document.body.appendChild(linebreak);
  var data = document.createTextNode(value);
  console.log(options);
  element.setAttribute("id", id);
  element.append(data);
  element.className += clsName;
  element.className += "dropdown-menu";
  Object.keys(options).map(function (opt) {
    var option = document.createElement("option");
    console.log(options[opt]);
    option.text = options[opt];
    option.class = "dropdown-item";
    element.add(option);
  });
  element.className += clsName;
  document.getElementsByTagName("FORM")[0].appendChild(element);
  return element;
}
function readOnlyText(ph, cls, id) {
  console.log("ROT");
  var element = document.createElement("INPUT");
  document.body.appendChild(linebreak);
  element.setAttribute("type", "text");
  element.setAttribute("readonly", "TRUE");
  element.setAttribute("placeholder", ph);
  element.className += "form-control";
  element.className += cls;
  element.setAttribute("id", id);
  document.getElementsByTagName("FORM")[0].appendChild(element);
  return element;
}
function dropdownfunc2(clsName, options, id) {
  var element = document.createElement("SELECT");
  document.body.appendChild(linebreak);
  //var data=document.createTextNode(value);
  console.log(options);
  element.setAttribute("id", id);
  //document.getElementsByTagName("BODY")[0].append(element);

  //element.append(data);
  Object.keys(options).map(function (opt) {
    var option = document.createElement("option");
    console.log(options[opt]);
    option.text = options[opt];
    element.add(option);
  });
  element.className += clsName;
  document.getElementsByTagName("FORM")[0].appendChild(element);
  return element;
}
function cc_brand_id(event) {
  var cur_val = event.target.value;
  console.log(cur_val);
  var sel_brand;
  //var cur_val = $("cc").html;
  // the regular expressions check for possible matches as you type, hence the OR operators based on the number of chars
  // regexp string length {0} provided for soonest detection of beginning of the card numbers this way it could be used for BIN CODE detection also

  //JCB
  jcb_regex = new RegExp('^(?:2131|1800|35)[0-9]{0,}$'); //2131, 1800, 35 (3528-3589)
  // American Express
  amex_regex = new RegExp('^3[47][0-9]{0,}$'); //34, 37
  // Diners Club
  diners_regex = new RegExp('^3(?:0[0-59]{1}|[689])[0-9]{0,}$'); //300-305, 309, 36, 38-39
  // Visa
  visa_regex = new RegExp('^4[0-9]{0,}$'); //4
  // MasterCard
  mastercard_regex = new RegExp('^(5[1-5]|222[1-9]|22[3-9]|2[3-6]|27[01]|2720)[0-9]{0,}$'); //2221-2720, 51-55
  maestro_regex = new RegExp('^(5[06789]|6)[0-9]{0,}$'); //always growing in the range: 60-69, started with / not something else, but starting 5 must be encoded as mastercard anyway
  //Discover
  discover_regex = new RegExp('^(6011|65|64[4-9]|62212[6-9]|6221[3-9]|622[2-8]|6229[01]|62292[0-5])[0-9]{0,}$');
  ////6011, 622126-622925, 644-649, 65


  // get rid of anything but numbers
  cur_val = cur_val.replace(/\D/g, '');

  // checks per each, as their could be multiple hits
  //fix: ordering matter in detection, otherwise can give false results in rare cases
  if (cur_val.match(jcb_regex)) {
    sel_brand = "JCB";
  } else if (cur_val.match(amex_regex)) {
    sel_brand = "AMEX";
  } else if (cur_val.match(diners_regex)) {
    sel_brand = "Diners Club";
  } else if (cur_val.match(visa_regex)) {
    sel_brand = "VISA";
  } else if (cur_val.match(mastercard_regex)) {
    sel_brand = "MasterCard";
  } else if (cur_val.match(discover_regex)) {
    sel_brand = "Discover";
  } else if (cur_val.match(maestro_regex)) {
    if (cur_val[0] == '5') { //started 5 must be mastercard
      sel_brand = "MasterCard";
    } else {
      sel_brand = "Maestro"; //maestro is all 60-69 which is not something else, thats why this condition in the end
    }
  } else {
    sel_brand = "Enter More";
  }
  document.getElementById("readOnlyText").value = sel_brand;
}
