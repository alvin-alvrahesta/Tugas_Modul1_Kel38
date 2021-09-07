var Panjang, Lebar, Keliling, Luas;
const fungsiAsyncAwait = async () => {
  await keterangan();
  await hitungLuasKeliling();
}

const keterangan=()=>{
  console.log("Hasil perhitungan: ");
}

const hitungLuasKeliling = () => {
  Panjang = parseInt(document.getElementById("panjang").value);
  Lebar = parseInt(document.getElementById("lebar").value);
  Keliling = 2 * (Panjang + Lebar);
  Luas = Panjang * Lebar;

  document.getElementById("keliling").value =
    Keliling + (Keliling % 2 == 0 ? " (Genap)" : " (Ganjil)");
  console.log(
    "Keliling = " + Keliling + (Keliling % 2 == 0 ? " (Genap)" : " (Ganjil)")
  );

  document.getElementById("luas").value =
    Luas + (Luas % 2 == 0 ? " (Genap)" : " (Ganjil)");
  console.log("Luas = " + Luas + (Luas % 2 == 0 ? " (Genap)" : " (Ganjil)"));
};

function reset() {
  document.getElementById("panjang").value = "";
  document.getElementById("lebar").value = "";
 }
