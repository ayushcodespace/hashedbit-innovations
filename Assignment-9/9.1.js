function Demo() {
  var x = 10;    // Function-scoped
  let y = 20;    // Block-scoped
  const z = 30;  // Block-scoped and constant

  if (true) {
    var x = 100;  // Affects outer x due to function scope
    let y = 200;  // New y inside block
    const z = 300;// New z inside block
    console.log("Inside block ->", x, y, z);// 100 200 300
  }

  console.log("Outside block ->", x, y, z);// 100 20 30
}
Demo();