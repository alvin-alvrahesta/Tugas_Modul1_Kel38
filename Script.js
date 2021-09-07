//Menampilkan Nama Kelompok Menggunakan Function Map (Pengolahan Array)
const anggota = [
  { nama: "Alvin Alvrahesta", nim: "21120118120025" },
  { nama: "Hilal Haniefam", nim: "21120118130047" },
];

document.getElementById("textkelompok").innerHTML = anggota.map(getKelompok);

function getKelompok(item) {
  return [item.nama, item.nim].join(" - ");
}

//Fungsi Asynchronous
var Panjang, Lebar, Keliling, Luas;
const fungsiAsyncAwait = async () => {
  await keterangan();
  await hitungLuasKeliling();
};

const keterangan = () => {
  console.log("Hasil perhitungan: ");
};

//Menghitung dan Menampilkan Hasil Perhitungan
const hitungLuasKeliling = () => {
  Panjang = parseInt(document.getElementById("panjang").value);
  Lebar = parseInt(document.getElementById("lebar").value);
  Keliling = 2 * (Panjang + Lebar);
  Luas = Panjang * Lebar;

  document.getElementById("keliling").value =
    Keliling + (Keliling % 2 == 0 ? " (Genap)" : " (Ganjil)");

  //Hasil Keliling juga ditampilkan pada Console.log
  console.log(
    "Keliling = " + Keliling + (Keliling % 2 == 0 ? " (Genap)" : " (Ganjil)")
  );

  document.getElementById("luas").value =
    Luas + (Luas % 2 == 0 ? " (Genap)" : " (Ganjil)");

  //Hasil Luas juga ditampilkan juga pada Console.log
  console.log("Luas = " + Luas + (Luas % 2 == 0 ? " (Genap)" : " (Ganjil)"));
};

function reset() {
  document.getElementById("panjang").value = "";
  document.getElementById("lebar").value = "";
}
