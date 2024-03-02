// https://www.codewars.com/kata/58b8dccecf49e57a5a00000e/train/javascript


function repeatAdjacent(s){
    let j = 0
    let groupsArray = []
    let bigGroups = 0

    while(s.length > 0){
        groupsArray[j] = ""
        for(i = 0; i < s.length; i++) {
            if(s[i] === s[i+1]){
                groupsArray[j] += s[i]
                continue
            }
            groupsArray[j] += s[i]
            break
        }
        s = s.slice(groupsArray[j].length, s.length)
        j++
    }

    for(i = 0; i < groupsArray.length; i ++){
        try{
            if(groupsArray[i].length >= 2 && groupsArray[i+1].length >= 2){
                bigGroups++
                i++
            }
        } catch(e){break}
    }
    return bigGroups
}

console.log(repeatAdjacent("ccccoodeffffiiighhhhhhhhhhttttttts")) // 3 co fi ht
console.log(repeatAdjacent("xxxxxggggggggggggsssssssbbbbbeeeeeeehhhmmmmmmm")) // 3 xg sb eh
console.log(repeatAdjacent("ccccoooooooooooooooooooooooddee")) // 1 code
