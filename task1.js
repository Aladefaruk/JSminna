const Word = (params)=> {

    const wordsplit = params.split(" ");

    const lettersplit = wordsplit.map((words)=> {

       let newstring =""

        for(let i=0; i<= words.length; i++){

            let letter=words.charAt(i)

            if(letter == letter.toUpperCase()){

                letter=letter.toLowerCase()}

             else{letter=letter.toUpperCase()} 
        newstring += letter;   
    }

    return newstring
    })

    let Capitalizedwords=lettersplit.filter((words)=> {

      return words[0]==words[0].toUpperCase()
    })

    let INGwords=lettersplit.filter((words)=>{
        return words.slice(-3).toUpperCase() === 'ING';
    })

    let PalindromeList= Capitalizedwords.filter(word => {
        return word.toLowerCase() == word.split('').reverse('').join('').toLowerCase();
    })

    if(PalindromeList.length==1){
        var Palindrome= PalindromeList[0]
    }

    else if(PalindromeList.length>=1){
        var Palindrome= PalindromeList
    }

    else{var Palindrome=[]}    
    
return { 'uppercased':Capitalizedwords, 'ing':INGwords, 'palindrome':Palindrome}
    
}

Word ()