const container = document.createElement("table")
document.body.append(container)
container.classList.add("container")

const title = document.createElement("thead")
    title.classList.add("title")
    container.append(title)

const body = document.createElement("tbody")
body.classList.add("body")
    container.append(body)

for (let number=2; number<=10; number++){

    
    
    const title_text = document.createElement("th")
    title_text.setAttribute("colspan", "1")
    title_text.classList.add("th")
    title.append(title_text)
    title_text.textContent="Table de " + number

    const td = document.createElement("td")
    td.classList.add("td")
    body.append(td)

        for (let i=0; i<=10; i++){
            const table = document.createElement("p")
            td.append(table)
            table.classList.add("table")
            const result = number*i
            table.textContent = number+" * "+i+" = "+result
        }


    const red = document.querySelectorAll(".td", ".th")
    for (var i = 0; i<red.length; i++){
        if (number%2===0) {
            td.style.backgroundColor= "red"
            title_text.style.backgroundColor= "red"
        }
        else {
            td.style.backgroundColor= "blue"
            title_text.style.backgroundColor= "blue"
        }    
      }
    }

    

