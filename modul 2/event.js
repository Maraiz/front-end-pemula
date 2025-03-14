function welcome() {
    alert('Sim salabim muncullah elemen-elemen HTML!');
    const contents = document.querySelector('.contents');
    contents.removeAttribute('hidden');
  }

 function tekan() {
    document.getElementById('count').innerText++;
    
    if (document.getElementById('count').innerText == 7) {
        const pesan = document.createElement('h4');
        pesan.innerHTML = '<i>Selamat kamu menemukan sebuah hadia tersebunyi</i>';

        const gambar = document.createElement('img');
        gambar.setAttribute('src', 'https://raw.githubusercontent.com/dicodingacademy/a315-web-pemula-labs/shared-files/catto.jpg')

        const posisi = document.querySelector('.contents');
        
        posisi.appendChild(gambar);
        posisi.appendChild(pesan);
    }
 } 
//  document.body.onload = welcome;
//  document.getElementById('incrementButton').onclick = tekan;
