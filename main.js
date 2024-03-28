// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }

//   console.log(returnRandBase());

  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }

//   factory function
  function pAequorFactory(num,baseArr){

    return {
        specimenNum : num,
        dna : baseArr,
        mutate(){
            // pilih index mana yang ingin diganti
            const dnaBases = ['A', 'T', 'C', 'G']
            const idBase = Math.floor(Math.random()*this.dna.length)
            // cek base di index itu apa, dan mau diganti apa
            const toBeMutated = this.dna[idBase];            
            const diffDnaBases = dnaBases.filter((base) =>{
                 return base !== toBeMutated;
            })          
            this.dna[idBase] = diffDnaBases[Math.floor(Math.random()*diffDnaBases.length)];

            return this.dna;
        },
        compareDNA(otherDNA){
            let sameBase = 0;
            for(let i =0 ; i < this.dna.length ; i++){
                if(otherDNA.dna[i] === this.dna[i]){
                    // base sama persis
                    sameBase++;
                }
            }
            let percentage = sameBase/this.dna.length *100;

            console.log(`speciment #${otherDNA.specimenNum} and #${this.specimenNum} have ${percentage}% in common`)
            
        },
        willLikelySurvive(){
            const cPercentage = this.dna.filter(base => base==='C').length/this.dna.length*100;
            const gPercentage =  this.dna.filter(base => base==='G').length/this.dna.length*100;

            console.log(`c : ${cPercentage} g : ${gPercentage}`)

            if(cPercentage>=60 || gPercentage>=60){
                return true
            }
            return false
        }

    }
  }


  const speciment1 = pAequorFactory(1,mockUpStrand());
  const speciment2 = pAequorFactory(2,mockUpStrand());
  const speciment3 = pAequorFactory(3,mockUpStrand());

//   CHAD SPECIMENT
//   collect chad speciment that are likely to survive, because they are a CHAD (lol, i mean they have at least 60% C or G base)
  let sumOfChad = 0
  let arrOfChad = []

  while(sumOfChad!==30){
    let tempSpeciment = pAequorFactory(sumOfChad+1,mockUpStrand())

    if (tempSpeciment.willLikelySurvive()){
        sumOfChad++
        arrOfChad.push(tempSpeciment)
    }

  }

  console.log(arrOfChad)


  
  
