
var wheel1Content = [["App", "Un app"], ["Bot", "Un bot"], ["Chatbot", "Un chatbot"], ["AI", "Una inteligencia artificial"], ["Buscador", "Un buscador"], ["Mailing List", "Un mailing list"], ["Puesto de tacos", "Un puesto de tacos"]];
var wheel2Content = [["Información", "que tome información de FB"], ["Hashtag", "que lea hashtags"], ["Memes", "que invente memes"], ["Venda", "que venda"], ["Negocios", "que haga negocios"], ["Compile", "que compile datos"], ["Analice", "que analice datos"]];
var wheel3Content = [["Paz mundial", "para resolver la paz mundial"], ["Domine", "para dominar el mundo"], ["Trump", "para bullear a Trump"], ["Pa qué", "pa ke kieres saber eso jaja salu2"], ["Coral blanco", "para salvar al coral blanco"], ["Multinivel", "para que seas tu propio jefe"]];


var firstElements = wheel1Content.map(function(e){
    return(e[0]);
});

var secondElements = wheel2Content.map(function(e){
  return(e[0]);
});

var thirdElements = wheel3Content.map(function (e) {
  return(e[0]);
});

var colorpalettecustom = {
    firstColorOne: new Array('#6290C3'),
    firstColorPlus: new Array('#486A91'),
    firstColorMinus: new Array('#8AB7EA'),
    secondColorOne: new Array('#66A182'),
    secondColorPlus: new Array('#518268'),
    secondColorMinus: new Array('#8ADBB0'),
    thirdColorOne: new Array('#AC3931'),
    thirdColorPlus: new Array('#7C2822'),
    thirdColorMinus: new Array('#E0493E'),
};
