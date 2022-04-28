 const array = [1,1,1,2,2,3,2,4,5,4,4,4,5];
 //convierto el array en un Set que en definitiva es un array sin repeticion.

 const norepetidos = [... new Set(array)];
 console.log(norepetidos);
