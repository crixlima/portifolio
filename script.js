const btPdf = document.querySelector("#btnCurriculo");

btPdf.addEventListener("click", ()=>{


const content= document.querySelector("#curriculo")

const opcoes ={

    margin: [10, 10, 10, 10],
    filename: "arquivo.pdf",
    html2canvas: {scale: 2},
    jsPDF:{unit: "mm", format: "a4", orientation: "portrait"}
}

html2pdf().set(opcoes).from(content).save();

})

