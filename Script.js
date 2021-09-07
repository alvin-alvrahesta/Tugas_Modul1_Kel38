var Panjang, Lebar, Keliling, Luas;

hitungLuasKeliling = () => {
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
