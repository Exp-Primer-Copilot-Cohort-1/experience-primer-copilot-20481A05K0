function skillsMember()
{
    var skill = document.getElementById("skill").value;
    var skillList = document.getElementById("skillList");
    var skillListLength = skillList.options.length;
    var skillListOptions = skillList.options;
    var skillListOptionsText = [];
    for (var i = 0; i < skillListLength; i++)
    {
        skillListOptionsText.push(skillListOptions[i].text);
    }
    if (skillListOptionsText.indexOf(skill) === -1)
    {
        var option = document.createElement("option");
        option.text = skill;
        skillList.add(option);
    }
    else
    {
        alert("Skill already added!");
    }
}

