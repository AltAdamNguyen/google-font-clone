//theme switch
const btnTheme = document.getElementById("btn_theme");
const htmlElement = document.documentElement;

if (localStorage.getItem("theme") === "dark") {
    htmlElement.classList.add("dark");
    btnTheme.innerHTML = `<i class="fa-light fa-sun-bright"></i>`;
} else {
    htmlElement.classList.remove("dark");
    btnTheme.innerHTML = `<i class="fa-light fa-moon"></i>`;
}

btnTheme.addEventListener("click", function () {

  if (htmlElement.classList.contains('dark')) {
    htmlElement.classList.remove('dark');
    btnTheme.innerHTML = `<i class="fa-light fa-moon"></i>`;
    localStorage.setItem("theme", "light");
  } else {
    htmlElement.classList.add('dark');
    btnTheme.innerHTML = `<i class="fa-light fa-sun-bright"></i>`;
    localStorage.setItem("theme", "dark");
  }
});

//search
const btnSeach = document.getElementById("btn_search");
const inputText = document.getElementById("input_text");

btnSeach.addEventListener("click", function () {
  inputText.focus();
});

//view
const btnList = document.getElementById("btn_list");
const btnGrid = document.getElementById("btn_grid");

const defaultContent = {
  grid: "Whereas recognition of the inherent dignity ",
  list: `
Everyone has the right to freedom of thought, conscience and religion; this right includes
                        freedom to change his religion or belief, and freedom, either alone or in community with others
                        and in public or private, to manifest his religion or belief in teaching, practice, worship and
                        observance.
                        Everyone has the right to freedom of opinion and expression; this right includes freedom to hold
                        opinions without interference and to seek, receive and impart information and ideas through any
                        media and regardless of frontiers.
                        Everyone has the right to rest and leisure, including reasonable limitation of working hours and
                        periodic holidays with pay.
`,
};

const grid = document.getElementById("grid");
const handleGrid = () => {
    const record = grid.querySelectorAll("#card");
    for (let i = 0; i < 20; i++) {
        const clone = record[0].cloneNode(true);
        grid.appendChild(clone);
    }
    
    // const pList = grid.querySelectorAll("#card .font_grid_txt");
    // pList.forEach((p) => {
    //     p.textContent = defaultContent.grid;
    // });
}
handleGrid();

const list = document.getElementById("list");
const handleList = () => {
  const record = list.querySelectorAll(".record");
  for (let i = 0; i < 10; i++) {
    const clone = record[0].cloneNode(true);
    list.appendChild(clone);
  }

//   const spanList = list.querySelectorAll(".record .font_temp span");
//   spanList.forEach((span) => {
//     span.textContent = defaultContent.list;
//   });
};

handleList();
grid.classList.add("hidden");

btnList.classList.add("text-[#1a73e8]", "dark:text-[#8ab4f8]");

//event
btnList.addEventListener("click", function () {
  btnList.classList.add("text-[#1a73e8]", "dark:text-[#8ab4f8]");
  btnGrid.classList.remove("text-[#1a73e8]", "dark:text-[#8ab4f8]");
  list.classList.remove("hidden");
  grid.classList.add("hidden");
});

btnGrid.addEventListener("click", function () {
  btnList.classList.remove("text-[#1a73e8]", "dark:text-[#8ab4f8]");
  btnGrid.classList.add("text-[#1a73e8]", "dark:text-[#8ab4f8]");
  list.classList.add("hidden");
  grid.classList.remove("hidden");
});

inputText.addEventListener("input", function (e) {
    const value = e.target.value;
    const isHidden = list.classList.contains("hidden");

    // Choose the correct elements based on whether the list is hidden
    const elementsToUpdate = isHidden
        ? grid.querySelectorAll("#card .font_grid_txt")
        : list.querySelectorAll(".record .font_temp span");

    // Update the text content based on input value
    const newContent = value.length > 0 ? value : isHidden ? defaultContent.grid : defaultContent.list;

    elementsToUpdate.forEach((element) => {
        element.textContent = newContent;
    });
});
