const tabelaMorse = [
    {codigo: '.-', letra: 'a'},     {codigo: '-...', letra: 'b'},
    {codigo: '-.-.', letra: 'c'},   {codigo: '-..', letra: 'd'},
    {codigo: '.', letra: 'e'},      {codigo: '..-.', letra: 'f'},
    {codigo: '--.', letra: 'g'},    {codigo: '....', letra: 'h'},
    {codigo: '..', letra: 'i'},     {codigo: '.---', letra: 'j'},
    {codigo: '-.-', letra: 'k'},    {codigo: '.-..', letra: 'l'},
    {codigo: '--', letra: 'm'},     {codigo: '-.', letra: 'n'},
    {codigo: '---', letra: 'o'},    {codigo: '.--.', letra: 'p'},
    {codigo: '--.-', letra: 'q'},   {codigo: '.-.', letra: 'r'},
    {codigo: '...', letra: 's'},    {codigo: '-', letra: 't'},
    {codigo: '..-', letra: 'u'},    {codigo: '...-', letra: 'v'},
    {codigo: '.--', letra: 'w'},    {codigo: '-..-', letra: 'x'},
    {codigo: '-.--', letra: 'y'},   {codigo: '--..', letra: 'z'}
];

function traduzirMorse(morse) {
    let cod = morse.split(" ");
    let resultado = [];
    for(let i=0; i<=cod.length; i++){
        for(let x=0; x<tabelaMorse.length; x++){
            if(cod[i] == tabelaMorse[x].codigo){
                resultado.push(tabelaMorse[x].letra);
            };
        };
    };
    return resultado;
};