
//add markdown header to the questions response
function formatQuestion(data, key) {
  if (data[key])
    return "## " + key.charAt(0).toUpperCase() + key.slice(1) + ":\n" + data[key]
  return ""
}

// -- HEY LOOK!! They gave us a FUNCTION... SO YOU BETTER USE IT *HINT HINT*
// for table of contants I grab the input from the user separated by commas and format as a list
function generateMarkdown(data) {
  let tob = ""
  if (data.contents) {
    let items = data.contents.split(",")
    tob = "## Table of Contents:"
    for (let i = 0; i < items.length; i++) {
      tob += "\n* " + items[i].trim()
    }
  }
  // trying out manually 
  if (data.description)
    data.description = "## Description:\n" + data.description

  data['email'] = formatQuestion(data, 'email')

  // do all the questions

// for most responses I decided to format the same way like below
  return `
# ${data.title}
By ${data.username}

${data.email}

${data.description}

${tob}

${formatQuestion(data,'badge')}
${formatQuestion(data,'instructions')}
${formatQuestion(data,'usage')}
${formatQuestion(data,'license')}
${formatQuestion(data,'contributers')}
${formatQuestion(data,'tests')}
${formatQuestion(data,'picture')}



`.trim(); // to remove the extra space in the file


}




// -- Here we are making our FUNCTION available outside (EXPORTING) of this file -- //
module.exports = generateMarkdown;
// -- NOTICE: that we are adding this function to the 'module.exports' OBJECT -- //

