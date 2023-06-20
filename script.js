// console.log(" hello i am js ");


uppercase.addEventListener("click", () => {
    console.log(" transforming to uppercase ");
    inpText.value = inpText.value.toUpperCase();

})

lowercase.addEventListener("click", () => {
    console.log(" transforming to lowercase ");
    inpText.value = inpText.value.toLowerCase();
})

inpText.addEventListener("input", () => {

    //     let remText = inpText.value.replace(/\s /g, "");
    //    charcount.innerText= remText.trim().length;
    charcount.innerText = inpText.value.replace(/ /g, "").trim().length;
    wordcount.innerText = inpText.value.trim().split(" ").length;
    if (charcount.innerText == 0) {
        wordcount.innerText = 0;
    }


})

removeextraspaces.addEventListener("click", () => {
    console.log(" This will remove extra spaces ")
    inpText.value = inpText.value.replace(/\s+/g, ' ').trim();
})

removelines.addEventListener("click", () => {
    console.log(" This will remove extra new lines ")
    inpText.value = inpText.value.replace(/\n+/g, '\n').trim();
})

clearall.addEventListener("click", () => {
    inpText.value = null;
    wordcount.innerText = 0;
    charcount.innerText = 0;
})

