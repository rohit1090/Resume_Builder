// document.addEventListener("DOMContentLoaded", function() {

// function addNewWEField() {
//     const workExperienceContainer = document.getElementById("workExperienceContainer");
//     const workExperience = document.querySelector(".workExp").cloneNode(true);

//     // Event listener for "Add" button
//     workExperience.querySelectorAll("input, textarea").forEach(element => {
//       element.value = "";
//     });

//   // Add event listener for "Remove" button
//     const removeButton = workExperience.querySelector(".removeButton");
//     removeButton.addEventListener("click", () => {
//       workExperienceContainer.removeChild(workExperience);
//     });

//     workExperienceContainer.appendChild(workExperience);
//   }

//   document.getElementById("AddSkills").addEventListener("click", () => {
//     addNewWEField(".SkillsSection");
//   });

// //   document.getElementById("AddEducation").addEventListener("click", () => {
//     // addNewWEField(".educationSection");
// //   });
// });

// Add section functionality 3 ms-1 ";

document.addEventListener("DOMContentLoaded", function() {

  function addNewSection(containerId, sectionSelector,removeButtonClass) {
    const container = document.getElementById(containerId);
    const section = document.querySelector(sectionSelector);
    const newSection = section.cloneNode(true);

    // Reset input values
    newSection.querySelectorAll("input, textarea").forEach(element => {
      element.value = "";
    });

    // Create and append "Remove" button
    const removeButton = document.createElement("button");
    removeButton.className = `btn btn-secondary btn-sm ${removeButtonClass}`; 
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
      container.removeChild(newSection);
    });
    newSection.appendChild(removeButton);

    // Insert the new section after the Add button's container
    const addButtonContainer = container.querySelector(".container");
    addButtonContainer.parentElement.insertBefore(newSection, addButtonContainer);
  }

  document.getElementById("AddWE").addEventListener("click", (event) => {
    event.preventDefault();
    addNewSection("workExperienceContainer", ".workExp", "removeButton1 row g-3 col-md-4 ms-1");
  });

    document.getElementById("AddSkills").addEventListener("click", (event) => {
        event.preventDefault();
      addNewSection("skillsContainer", ".SkillsSection","removeButton2 row  ");
    });
  
    document.getElementById("AddEducation").addEventListener("click", (event) => {
        event.preventDefault();
        addNewSection("educationContainer", ".educationSection","removeButton3 row g-3 ms-6");
      });
  
});


// generating CV 

// function generateCV(){
//  
  // const firstName = document.getElementById("FirstName").value;
  // const lastName = document.getElementById("LastName").value;
  // const contact = document.getElementById("Contact").value;
  // const address = document.getElementById("AddressID").value;
  // const city = document.getElementById("CityID").value;
  // const state = document.getElementById("StateID").value;
  // const Pin = document.getElementById("PinCodeID").value;
  // 
// 
// 
  // if (address || city || state || Pin) {
    // addressOutput = `${address ? address + "," : ""} ${city ? city + "," : ""} ${state ? state + "," : ""} ${Pin ? "Pin Code : " + Pin : ""}`;
  // }
// 
// 
  // document.getElementById('nameT1').innerHTML = `${firstName} ${lastName}`;
  // document.getElementById('nameT2').innerHTML = `${firstName} ${lastName}`;
  // document.getElementById('ContactT1').innerHTML=`${contact}`;
  // document.getElementById('AddressT').innerHTML= addressOutput;
  // document.getElementById('NationalityT').innerHTML=NationalityID.value;
// 
// }


  // For nationality section 
  document.getElementById("generateCVButton").addEventListener("click", function() {
    
    const firstName = document.getElementById("FirstName").value;
    const lastName = document.getElementById("LastName").value;
    const contact = document.getElementById("Contact").value;
    const email = document.getElementById("EmailID").value;
    const address = document.getElementById("AddressID").value;
    const city = document.getElementById("CityID").value;
    const state = document.getElementById("StateID").value;
    const Pin = document.getElementById("PinCodeID").value;
    const gender = document.getElementById("GenderID").value;
    const DOB = document.getElementById("DoBID").value;
    const linkdin = document.getElementById("linkField").value;
    const facebook = document.getElementById("fbField").value;
    const github = document.getElementById("GitField").value;
    const Obj = document.getElementById("ObjID").value;


    // address section 
    let addressOutput = "";
    
    if (address || city || state || Pin) {
      addressOutput = `${address ? address + "," : ""} ${city ? city + "," : ""} ${state ? state + "," : ""} ${Pin ? "Pin Code : " + Pin : ""}`;
    }
    

    document.getElementById('nameT1').innerHTML = `${firstName} ${lastName}`;
    document.getElementById('nameT2').innerHTML = `${firstName} ${lastName}`;
    document.getElementById('ContactT1').innerHTML = `${contact}`;
    document.getElementById('EmailT').innerHTML = `${email}`;
    document.getElementById('AddressT').innerHTML = addressOutput;
    document.getElementById('DOBT').innerHTML = `${DOB}`;
    document.getElementById('genderT').innerHTML = `${gender}`;
    document.getElementById("NationalityT").innerHTML = NationalityID.value;
    document.getElementById('objectiveT').innerHTML = `${Obj}`;

  
  // impotant links section 
   const linkAnchore= document.getElementById('LinkT').querySelector('a');
   linkAnchore.textContent = "Visit LinkedIn";
   linkAnchore.href=linkdin;

  const fbAnchor = document.getElementById('fbT').querySelector('a');
  fbAnchor.textContent = "Visit Facebook";
  fbAnchor.href = facebook;

  const gitAnchor = document.getElementById('GitT').querySelector('a');
  gitAnchor.textContent = "Visit GitHub";
  gitAnchor.href = github;


  // work exprience section
  
  let wes = document.getElementsByClassName("workExp");

  let str="";

      for (let e of wes) {
          const position = e.querySelector(".inputPosition").value;
          const employee = e.querySelector(".inputEP").value;
          const city2 = e.querySelector(".inputCity").value;
          const startD = e.querySelector(".inputSD2").value;
          const endD = e.querySelector(".inputEd2").value;
          const description = e.querySelector(".DicID2").value;
  

              const formattedStartDate = new Date(startD).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
              const formattedEndDate = new Date(endD).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });

              str=str+`<li><b>${position}</b><br>
              ${employee}, ${city2}
              <span class="date-style">${formattedStartDate} - ${formattedEndDate}</span><br>
              ${description}<br><br></li>`;
          }
      
  
      document.getElementById('weT').innerHTML = str;


 // For education section 
let EducationS = document.getElementsByClassName('educationSection');
let str2 = "";

for (let e of EducationS) {
    const education = e.querySelector(".inputEducation").value;
    const cityE = e.querySelector(".inputCity3").value;
    const startE = e.querySelector(".inputSD").value;
    const EndE = e.querySelector(".inputEd").value;
    const DisE = e.querySelector(".DisID").value;
    const formattedStartE = new Date(startE).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
    const formattedEndE = new Date(EndE).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });

    str2 += `<li><b>${education}</b><br>${cityE}<br> <span class="date-style">${formattedStartE} - ${formattedEndE}</span><br>${DisE}<br><br></li>`;
}

document.getElementById('AQT').innerHTML = str2;


// For Skills section 

let Skills = document.getElementsByClassName('SkillsSection');
let str3="";

for(let e of Skills){
  const skills =e.querySelector('.inputSkills').value;

  str3 += `<li>${skills}</li>`
}

document.getElementById('SkillT').innerHTML=str3;


// this code for selecting pr0file pic 

let file = document.getElementById('imgF').files[0]

console.log(file);

let reader=new FileReader();

reader.readAsDataURL(file);

console.log(reader.result);

// set the img to template 

reader.onloadend=function() {
  document.getElementById('imgTemplate').src = reader.result;
}

// generate button sedction 

document.getElementById('cv-form').style.display='none';
document.getElementById('cv-template').style.display='block';

  });

  function PrintCV(){
    window.print();
  }