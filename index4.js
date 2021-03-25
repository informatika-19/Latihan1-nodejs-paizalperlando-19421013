//Array

//const listNilai = ['A' , 'B' , 'C']
//console.log(listNilai[2])

const dataMahasiswa = [
    {
        nama: 'paizal perlando',
        npm: '19421013',
        prodi: 'Informatika'
    },
    {
        nama: 'rivan aulia balkis',
        npm: ' 19421025',
        prodi: 'informatika'
    }
    
]
//console.log(dataMahasiswa[1].npm)

for (let i in dataMahasiswa){
    console.log(dataMahasiswa[i].nama + '-' + dataMahasiswa[i].npm + '-' + dataMahasiswa[i].prodi)
}