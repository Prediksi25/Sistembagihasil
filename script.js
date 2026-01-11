document.getElementById('datetime').innerText =
  'Tanggal & Jam: ' + new Date().toLocaleString('id-ID');

function generatePDF() {
  const pencatat = document.getElementById('pencatat').value;
  const jerigen = document.getElementById('jerigen').value;
  const harga = document.getElementById('harga').value;

  if (!pencatat || !jerigen || !harga) {
    alert('Lengkapi data dulu');
    return;
  }

  const total = jerigen * harga;
  const zakat = total * 0.025;
  const upahPolot = jerigen * 40000;
  const bersih = total - zakat - upahPolot;

  const text = `LAPORAN PENJUALAN MINYAK
Tanggal: ${new Date().toLocaleString('id-ID')}
Pencatat: ${pencatat}

Jerigen: ${jerigen}
Harga/Jerigen: Rp ${harga}
Total Penjualan: Rp ${total}

Zakat (2.5%): Rp ${zakat}
Upah Polot: Rp ${upahPolot}

SISA HASIL BERSIH: Rp ${bersih}
`;

  const blob = new Blob([text], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);

  window.open(url);

  const wa = `https://wa.me/?text=${encodeURIComponent('Laporan PDF siap dibagikan')}`;
  window.open(wa);
}
