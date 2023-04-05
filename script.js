const form = document.querySelector("#form");
const boyInput = document.querySelector("#boy");
const kiloInput = document.querySelector("#kilo");
const sonucDiv = document.querySelector("#sonuc");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const boy = Number(boyInput.value);
  const kilo = Number(kiloInput.value);
  const kitleIndeksi = kilo / (boy / 100) ** 2;
  let sonuc;

  if (isNaN(kitleIndeksi)) {
    sonuc = "Lütfen boy ve kilonuzu girin.";
  } else if (kitleIndeksi < 18.5) {
    sonuc = "Kitle indeksiniz: " + kitleIndeksi.toFixed(2) + " (zayıf)";
  } else if (kitleIndeksi < 25) {
    sonuc = "Kitle indeksiniz: " + kitleIndeksi.toFixed(2) + " (normal)";
  } else if (kitleIndeksi < 30) {
    sonuc = "Kitle indeksiniz: " + kitleIndeksi.toFixed(2) + " (kilolu)";
  } else {
    sonuc = "Kitle indeksiniz: " + kitleIndeksi.toFixed(2) + " (obez)";
  }

  sonucDiv.innerText = sonuc;
});
