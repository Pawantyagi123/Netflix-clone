const options = ["English", "Hindi", "French", "Japnes", "Chines"];

    // Create a select element
    const select = document.createElement("select");
    select.style.border = "none"
    select.style.backgroundColor = "transparent";
    select.style.color ="white"

    // Add options to the select element
    for (var i = 0; i < options.length; i++) {
        var option = document.createElement("option");
        option.style.color = "black"
        option.value = options[i];
        option.text = options[i];
        select.appendChild(option);
    }

    // Add change event listener to the select element (optional)
    select.addEventListener("change", function() {
        var selectedOption = this.options[this.selectedIndex].value;
        console.log("Selected option: " + selectedOption);
    });

    // Append the select element to the dropdown container
    document.getElementById("dropdownContainer").appendChild(select);


    function toggleDescription(icon) {
        let descriptionText = icon.nextElementSibling;
        descriptionText.style.display = descriptionText.style.display === 'none' ? 'block' : 'none';
    }




    