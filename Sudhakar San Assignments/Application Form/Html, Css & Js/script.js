document.getElementById("appForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const form = this;
  const fullname = form.fullname.value.trim();
  const email = form.email.value.trim();
  const password = form.password.value.trim();
  const age = form.age.value.trim();
  const department = form.department.value;
  const skills = Array.from(form.skills).filter(chk => chk.checked);

  // Validating Full Name
  if(fullname === "") {
    alert("Full Name is required.");
    form.fullname.focus();
    return false;
  }

  // Validating Email
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
  if(email === "") {
    alert("Email is required.");
    form.email.focus();
    return false;
  } else if(!emailPattern.test(email)) {
    alert("Please enter a valid email in the format: name@company.domain");
    form.email.focus();
    return false;
  }

  // Validating Password
  if(password === "") {
    alert("Password is required.");
    form.password.focus();
    return false;
  }

  // Validating Age
  if(age === "") {
    alert("Age is required.");
    form.age.focus();
    return false;
  }

  // Validating Skills
  if(skills.length === 0) {
    alert("Please select at least one skill.");
    return false;
  }

  // Validating Department
  if(department === "") {
    alert("Please select a department.");
    form.department.focus();
    return false;
  }

  //  All validations passed 
  const formData = new FormData(form);
  const values = {};
  formData.forEach((value, key) => {
    if(values[key]) {
      if(Array.isArray(values[key])) {
        values[key].push(value);
      } else {
        values[key] = [values[key], value];
      }
    } else {
      values[key] = value;
    }
  });

  // Redirecting to new window
  let output = "<h1>Submitted Data</h1><ul style='font-family:Segoe UI;'>";
  for(const key in values) {
    output += `<li><strong>${key}:</strong> ${values[key]}</li>`;
  }
  output += "</ul>";
  const newWin = window.open();
  newWin.document.write(output);
  newWin.document.close();

  window.location.reload();
});
