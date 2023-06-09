//  //  //  //  //  => materi baru <= //  //  //  //  //  

// const judul = document.getElementById('judul')
// judul.innerHTML = '<em>syafar'

// const sectionA = document.querySelector('section#b')
// sectionA.innerHTML = '<div><p>paragraf!<p><div>'



//  //  //  //  //  => materi baru <= //  //  //  //  //  
// const judul = document.querySelector('#judul')
// judul.style.color = 'salmon'
// judul.style.backgroundColor = 'skyblue'


//  //  //  //  //  => materi baru <= //  //  //  //  //  
// const judul = document.getElementsByTagName('h1')[0];
// const a = document.querySelector('section#a a')

//  //  //  //  //  => materi baru <= //  //  //  //  //  
// const p2 = document.querySelector('.p2')
// p2.classList.add('label')


//  //  //  //  //  => materi baru DOM node <= //  //  //  //  //  
// buat element baru
const pBaru = document.createElement('p')
const textPBaru = document.createTextNode('paragraf Baru')
// simpan tulisan ke dalam paragraf
pBaru.appendChild(textPBaru)
// simpan pBaru di akhir section A
const sectionA = document.getElementById('a')
sectionA.appendChild(pBaru)


// buat element li baru
const liBaru = document.createElement('li')
const itemLiBaru = document.createTextNode('Item baru')
// simpan tulisan ke dalam li
liBaru.appendChild(itemLiBaru)
// simpan liBaru di dalam ul di bawah li item 1
const ul = document.querySelector('section#b ul')
const li2 = ul.querySelector('li:nth-child(2)')

ul.insertBefore(liBaru, li2)


const link = document.getElementsByTagName('a')[0]

sectionA.removeChild(link)




const sectionB = document.getElementById('b')
const p4 = sectionB.getElementsByTagName('p')[0]
const h2Baru = document.createElement('h2')
const textH2Baru = document.createTextNode('Judul baru')

h2Baru.appendChild(textH2Baru)

sectionB.replaceChild(h2Baru, p4)

// yang baru warna hijau
pBaru.style.backgroundColor = "lightgreen"
liBaru.style.backgroundColor = "lightgreen"
h2Baru.style.backgroundColor = "lightgreen"



























































