//deklarasi variabel
var namaUser = '';
var pilihOperasi;
var num1;
var num2;
var hasil;
var ulang = true;

//function
function tambah(num1,num2){
    return hasil = num1 + num2;;
}
function kurang(num1,num2){
    return hasil = num1 - num2;
}
function kali(num1,num2){
    return hasil = num1 * num2;
}
function bagi(num1,num2){
    return hasil = num1 / num2;
}

// intro
alert('Selamat datang di program kalkulator sederhana');
namaUser = prompt('Masukkan nama kamu dulu : ');

//pilihan user & input
alert('Hai ' + namaUser + ', silahkan pilih operasi yang mau kamu lakukan');

while(ulang){
    pilihOperasi = parseInt(prompt('Pilih nomor : \n1. Penjumlahan \n2. Pengurangan \n3. Perkalian \n4. Pembagian \n(cth : 1)'));

    if(pilihOperasi > 4){
        alert('Input salah');
    } else{
        //proses
        num1 = parseInt(prompt('Masukkan angka pertama'));
        num2 = parseInt(prompt('Masukkan angka kedua'));

        switch(pilihOperasi){
            case 1:
                alert('Hasil dari ' +num1+ ' + ' +num2+ ' = ' + tambah(num1,num2));
                break;
            case 2:
                alert('Hasil dari ' +num1+ ' - ' +num2+ ' = ' + kurang(num1,num2));
                break;
            case 3:
                alert('Hasil dari ' +num1+ ' x ' +num2+ ' = ' + kali(num1,num2));
                break;
            case 4: 
                alert('Hasil dari ' +num1+ ' : ' +num2+ ' = ' + bagi(num1,num2));
                break;
            default:
                alert('Input salah');
                break;
        }
    }
    ulang = confirm('Coba lagi?');
}

