
const favorites:[{
name:"Todo el mundo saluda al mundo",
img:"https://img.freepik.com/vector-gratis/tierra-aislada-blanco_1308-55360.jpg?w=2000",
content:"existe una rara tendencia de los programadores a saludar el mundo cada vez que hacen una prueba. Ampliaremos"
},
                 {
name:"Los programadores saludan al mundo desde 1970",
img:"https://img.freepik.com/vector-gratis/tierra-aislada-blanco_1308-55360.jpg?w=2000",
content:"La rara tendencia de los programadores a saludar al mundo parece que no es algo nuevo, sino que viene desde los origenes de la programacion"
}],
var numbers = [1, 5, 10, 15];


var doubles = numbers.map(function(x) {
   return x * 2;});
// doubles is now [2, 10, 20, 30]
// numbers is still [1, 5, 10, 15]


// Para renderizar un elemento
favorites.map(article => (<div> <h1>article.name<h2> <img href={article.img}/>  <p>article.content</p> </div>));
//para visualizar un elemento
favorites.map(article => (console.log(article)));
