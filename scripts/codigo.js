document.addEventListener("DOMContentLoaded", function () {
    let carritoContador = localStorage.getItem("Contador") || 0;
    actualizarContadorCarrito(carritoContador);


    const botonesAgregarCarrito = document.querySelectorAll("button");
    botonesAgregarCarrito.forEach((boton) => {
        boton.addEventListener("click", function () {
            carritoContador = parseInt(localStorage.getItem("Contador")) || 0;
            carritoContador++;
            localStorage.setItem("Contador", carritoContador);
            actualizarContadorCarrito(carritoContador);
        });
    });
});


function actualizarContadorCarrito(contador) {
    document.getElementById("contador").textContent = contador;
}