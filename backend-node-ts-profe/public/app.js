 // Llamada simple a la API
     const saludar= async () => {
        const res = await fetch("/api/saludo");
        const data = await  res.json();
        // const p1 = document.createElement('p'); // esto es opr si quiero imprimirlo en el HTML
        // p1.textContent = data.mensaje;

        // document.body.appendChild(p1);
        
     }
 

 



  const obtenerInfo = async () => {
    const res = await fetch('/api/info');
    const data = await res.json();

    const p = document.createElement('p');
    p.textContent = data.info;

    document.body.appendChild(p);
  };

  

  
 saludar();
  obtenerInfo();


