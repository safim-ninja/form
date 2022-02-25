function validateForm() {
  let fName = document.forms["sign-up"]["fName"].value;
  let lName = document.forms["sign-up"]["lName"].value;
  let eMail = document.forms["sign-up"]["eMail"].value;
  let pass = document.forms["sign-up"]["pass"].value;
  let i = cpl = sml = dgt = pnc = 0;
  if (fName === "") {
    document.getElementById("fn").innerHTML = "Please fillup this";
    return false;
  }
  else {
      document.getElementById("fn").innerHTML = "";
  }
  if (lName === "") {
    document.getElementById("ln").innerHTML = "Please fillup this";
    return false;
  }
  else {
      document.getElementById("ln").innerHTML = "";
  }
  
  if (eMail === "") {
    document.getElementById("em").innerHTML = "Please fillup this";
    return false;
  }
  else {
      document.getElementById("em").innerHTML = "";
  }
  
  for(i=0; pass[i]; i++)
  {
      if(pass[i] >= 'a' && pass[i] <= 'z')
          sml++;
      else if(pass[i] >= 'A' && pass[i] <= 'Z')
          cpl++;
      else if(pass[i] >= '1' && pass[i] <= '9')
          dgt++;
      else
          pnc++;
      
  }
  if (!(sml && cpl && dgt && pnc) || (i<8)) {
    document.getElementById("ps").innerHTML = "Please fillup this" + i;
    return false;
  }
  else {
      document.getElementById("ps").innerHTML = "" + i;
  }
}