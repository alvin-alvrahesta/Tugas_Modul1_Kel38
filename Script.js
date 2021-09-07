var Panjang, Lebar, Keliling, Luas;
const fungsiAsyncAwait = async () => {
  await hitungLuasKeliling();
  await keterangan();
}

const keterangan=()=>{
  console.log("Hasil perhitungan luas dan keliling dari input yang dimasukan pada panjang dan lebar");
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
